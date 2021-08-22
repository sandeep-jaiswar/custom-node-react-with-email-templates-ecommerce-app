import React, { forwardRef, useEffect, useRef } from "react";
import { IoMdMenu, IoIosCart } from "react-icons/io";
import { useDispatch } from "react-redux";
import { showPopover } from "../../actions/popover-actions/popoverActions";
import { showSlider } from "../../actions/slider-actions/sliderActions";
import Icon from "../Icon";

const Header = forwardRef((props, ref) => {
  const iconColor = getComputedStyle(document.documentElement).getPropertyValue(
    "--firstColor"
  );
  const dispatch = useDispatch();
  const cartIconRef = useRef(null);
  const menuClickHandler = () => {
    dispatch(showSlider("MenuSlider"));
  };
  const cartClickHandler = () => {
    dispatch(
      showPopover({
        id: "cartPopover",
        position: cartIconRef.current.getBoundingClientRect()
      })
    );
  };
  useEffect(() => {}, []);
  return (
    <div ref={ref} className="header">
      <div className="wrapper">
        <Icon className="header-items" onClick={menuClickHandler}>
          <IoMdMenu size="10vw" color={`${iconColor}`} />
        </Icon>
        <div
          ref={cartIconRef}
          className="header-items"
          onClick={cartClickHandler}
        >
          <Icon>
            <IoIosCart size="10vw" color={`${iconColor}`} />
          </Icon>
        </div>
      </div>
    </div>
  );
});

export default Header;
