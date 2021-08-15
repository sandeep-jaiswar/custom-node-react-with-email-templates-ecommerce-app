import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hideSlider } from "../../actions/slider-actions/sliderActions";
import useOutsideClick from "../../hooks/useOutsideClick";
import useSwipeable from "../../hooks/useSwipeable";

export default function Slider(props) {
  const { slider } = useSelector((state) => state.config);
  const sliderRef = useRef(null);
  const dispatch = useDispatch();
  const openSlider = () => {
    sliderRef.current.classList.add("slider-isOpening");
  };
  const closeSlider = () => {
    sliderRef.current.classList.remove("slider-isOpening");
    setTimeout(() => dispatch(hideSlider()), 500);
  };
  useOutsideClick(sliderRef, () => {
    closeSlider();
  });
  useSwipeable(sliderRef, { openSlider, closeSlider });
  useEffect(() => {
    openSlider();
  }, []);
  return (
    <div ref={sliderRef} className="slider-wrapper">
      <div className="slider-content">{props.children}</div>
    </div>
  );
}
