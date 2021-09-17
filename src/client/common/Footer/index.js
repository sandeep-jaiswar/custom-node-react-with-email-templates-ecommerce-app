import React, { forwardRef, useRef } from "react";
import {
  IoMdHome,
  IoIosSearch,
  IoMdApps,
  IoIosNotificationsOutline
} from "react-icons/io";
import { useDispatch } from "react-redux";
import { showPopover } from "../../actions/popover-actions/popoverActions";
import Icon from "../Icon";

const Footer = forwardRef((props, ref) => {
  const iconColor = getComputedStyle(document.documentElement).getPropertyValue(
    "--firstColor"
  );
  const dispatch = useDispatch();
  const notificationIconRef = useRef(null);
  const notificationClickHandler = () => {
    dispatch(
      showPopover({
        id: "cartPopover",
        position: notificationIconRef.current.getBoundingClientRect()
      })
    );
  };
  if(!window.isMobile){
    return null;
  }
  return (
    <div className="footer">
      <div className="wrapper">
        <Icon className="footer-items">
          <IoMdHome size="10vw" color={`${iconColor}`} />
        </Icon>
        <Icon className="footer-items">
          <IoIosSearch size="10vw" color={`${iconColor}`} />
        </Icon>
        <Icon className="footer-items">
          <IoMdApps size="10vw" color={`${iconColor}`} />
        </Icon>
        <div
          ref={notificationIconRef}
          onClick={notificationClickHandler}
          className="footer-items"
        >
          <Icon>
            <IoIosNotificationsOutline size="10vw" color={`${iconColor}`} />
          </Icon>
        </div>
      </div>
    </div>
  );
});

export default Footer;
