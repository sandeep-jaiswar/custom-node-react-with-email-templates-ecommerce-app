import React from "react";
import { IoMdMenu, IoIosCart } from "react-icons/io";
import Icon from "../Icon";

export default function Header() {
  const iconColor = getComputedStyle(document.documentElement).getPropertyValue(
    "--firstColor"
  );
  return (
    <div className="header">
      <div className="wrapper">
        <Icon className="header-items">
          <IoMdMenu size="10vw" color={`${iconColor}`} />
        </Icon>
        <div className="header-items"></div>
        <Icon className="header-items">
          <IoIosCart size="10vw" color={`${iconColor}`} />
        </Icon>
      </div>
    </div>
  );
}
