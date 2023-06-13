import React from "react";
import "../styles/SideMenuItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SideMenuItem({ title, isActive, icon }) {
  const className = `${isActive ? "side-menu-item" : "side-menu-item active"}`;
  const spanClassName = `${
    !isActive ? "active-span-side-menu" : "side-menu-item-span"
  }`;
  const iconsClassName = `${
    isActive
      ? "font-awsome-icons active-font-awsome-icons"
      : "font-awsome-icons"
  }`;
  return (
    <div className={className}>
      <FontAwesomeIcon icon={icon} className={iconsClassName} />
      <span className={spanClassName}>{title}</span>
    </div>
  );
}

export default SideMenuItem;
