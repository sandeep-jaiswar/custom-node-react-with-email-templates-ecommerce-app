import React from "react";
import {
  IoMdHome,
  IoIosSearch,
  IoMdApps,
  IoIosNotificationsOutline
} from "react-icons/io";
import Icon from "../Icon";

export default function Footer() {
  const iconColor = getComputedStyle(document.documentElement).getPropertyValue(
    "--firstColor"
  );
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
        <Icon className="footer-items">
          <IoIosNotificationsOutline size="10vw" color={`${iconColor}`} />
        </Icon>
      </div>
    </div>
  );
}
