import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  hidePopover,
  showPopover
} from "../../actions/popover-actions/popoverActions";
import useOutsideClick from "../../hooks/useOutsideClick";

const Popover = (props) => {
  const calculateStyle = (obj) => {
    console.log(obj);
    const popoverHt = popoverRef.current.clientHeight;
    const popoverWd = popoverRef.current.clientWidth;
    const screenHt = document.documentElement.scrollHeight;
    const screenWd = document.documentElement.scrollWidth;
    const isLeftAvailable = obj.x - popoverWd + obj.width > 0;
    const isTopAvailable = obj.y - popoverHt + obj.height > 0;
    const isRightAvailable = screenWd - obj.x - popoverWd - obj.width > 0;
    const isBottomAvailable = screenHt - obj.y - popoverHt - obj.height > 0;
    let count = 0;
    if (isLeftAvailable) {
      count += 1;
    }
    if (isTopAvailable) {
      count += 1;
    }
    if (isRightAvailable) {
      count += 1;
    }
    if (isBottomAvailable) {
      count += 1;
    }
    let styleObj = {};
    let styleStr = "opacity: 1;";
    if (count === 2) {
      if (isLeftAvailable)
        styleObj.left = `${
          obj.x -
          popoverWd +
          (isTopAvailable ? obj.width : isBottomAvailable ? obj.width : 0)
        }px`;
      if (isTopAvailable)
        styleObj.top = `${
          obj.y - popoverHt + (isLeftAvailable ? 0 : isRightAvailable ? 0 : 0)
        }px`;
      if (isRightAvailable)
        styleObj.right = `${
          screenWd -
          obj.x -
          popoverWd +
          (isTopAvailable ? 0 : isBottomAvailable ? 0 : 0)
        }px`;
      if (isBottomAvailable)
        styleObj.bottom = `${
          screenHt -
          obj.y -
          popoverHt -
          (isLeftAvailable ? obj.height : isRightAvailable ? 0 : 0)
        }px`;
    }
    for (const [key, value] of Object.entries(styleObj)) {
      styleStr += `${key}:${value};`;
    }
    return styleStr;
  };
  const { popover } = useSelector((state) => state.config);
  const positionDetails = popover.current.position;
  const popoverRef = useRef(null);
  const dispatch = useDispatch();
  useOutsideClick(popoverRef, () => {
    popoverRef.current.classList.remove("open-popover");
    dispatch(hidePopover());
  });
  useEffect(() => {
    const styleStr = calculateStyle(positionDetails);
    popoverRef.current.setAttribute("style", styleStr);
  }, []);
  return (
    <div ref={popoverRef} className={`popover-wrapper`}>
      <div className="popover-content">{props.children}</div>
    </div>
  );
};

export default Popover;
