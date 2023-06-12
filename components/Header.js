"use client";
import React, { useState } from "react";
import Image from "next/image";

import "../styles/Header.css";
import lightIcon from "../public/icons/light.png";
import notificationIcon from "../public/icons/notification.png";
import arrowIcon from "../public/icons/arrow_down.png";

function Header() {
  const [isEnglishSelected, setIsEnglishSelected] = useState(true);
  function onEnglishSelectedHandler() {
    setIsEnglishSelected(true);
  }
  function onArabicSelectedHandler() {
    setIsEnglishSelected(false);
  }

  const englishClassName = `${isEnglishSelected && "active-span"}`;
  const arabicClassName = `${!isEnglishSelected && "active-span"}`;

  return (
    <div className="header">
      <button className="header-button app-button">Individual Investor</button>
      <Image src={lightIcon} className="header-icon" />
      <Image src={notificationIcon} className="header-icon" />
      <div className="header-switch">
        <span className={englishClassName} onClick={onEnglishSelectedHandler}>
          EN
        </span>
        <span className={arabicClassName} onClick={onArabicSelectedHandler}>
          ع
        </span>
      </div>

      <div className="header-dropdown">
        <span className="header__image-place-holder">BA</span>
        <div className="header-dropdown__greeting">
          <span>Welcome!</span>
          <span>Bader Alobaidi</span>
        </div>
        <Image src={arrowIcon} />
      </div>
    </div>
  );
}

export default Header;
