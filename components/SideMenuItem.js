import React from "react";
import "../styles/SideMenuItem.css";
import Image from "next/image";
import person from "../public/icons/person.png";

function SideMenuItem() {
  return (
    <div className="side-menu-item">
      <Image src={person} />
      <span>Custodian Details</span>
    </div>
  );
}

export default SideMenuItem;
