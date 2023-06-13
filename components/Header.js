"use client";
import React, { useState } from "react";
import Image from "next/image";
import "../styles/Header.css";
import lightIcon from "../public/icons/light.png";
import notificationIcon from "../public/icons/notification.png";
import arrowIcon from "../public/icons/arrow_down.png";
import openMenuIcon from "../public/icons/menu.png";
import closeMenuIcon from "../public/icons/close.png";

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
  const [isHeaderOpened, setIsHeaderOpened] = useState(false);
  return (
    <div className="header-container">
      <Image
        className="header__open-icon"
        src={openMenuIcon}
        onClick={() => {
          setIsHeaderOpened(true);
        }}
      />

      <div className={`header ${isHeaderOpened ? "open-header" : ""}`}>
        <Image
          className="header__close-icon"
          src={closeMenuIcon}
          onClick={() => {
            setIsHeaderOpened(false);
          }}
        />
        <button className="header-button app-button">
          Individual Investor
        </button>
        <div className="header-icon__container themes">
          <Image src={lightIcon} className="header-icon" />
          <span>Theme</span>
        </div>
        <div className="header-icon__container">
          <Image src={notificationIcon} className="header-icon" />
          <span>Notifications</span>
        </div>
        <div className="header-language">
          <div className="header-switch">
            <span
              className={englishClassName}
              onClick={onEnglishSelectedHandler}
            >
              EN
            </span>
            <span className={arabicClassName} onClick={onArabicSelectedHandler}>
              ع
            </span>
          </div>
          <span className="language-text">Language</span>
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
    </div>
  );
}

export default Header;
