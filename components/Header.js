"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import "../styles/Header.css";
import lightIcon from "../public/icons/light.png";
import notificationIcon from "../public/icons/notification.png";
import arrowIcon from "../public/icons/arrow_down.png";
import openMenuIcon from "../public/icons/menu.png";
import closeMenuIcon from "../public/icons/close.png";
import Link from "next/link";

function Header() {
  const [isEnglishSelected, setIsEnglishSelected] = useState(true);

  // Handle the selection of English language
  function onEnglishSelectedHandler() {
    setIsEnglishSelected(true);
  }

  // Handle the selection of Arabic language
  function onArabicSelectedHandler() {
    setIsEnglishSelected(false);
  }

  // Set the class name based on the selected language
  const englishClassName = `${isEnglishSelected && "active-span"}`;
  const arabicClassName = `${!isEnglishSelected && "active-span"}`;

  // Manage the state of the header opened/closed state
  const [isHeaderOpened, setIsHeaderOpened] = useState(false);

  return (
    <div className="header-container">
      <div className="header__open-icon-container">
        <Image
          className="header__open-icon"
          src={openMenuIcon}
          onClick={() => {
            setIsHeaderOpened(true);
          }}
        />
      </div>

      <div className={`header ${isHeaderOpened ? "open-header" : ""}`}>
        <Image
          alt="icon"
          className="header__close-icon"
          src={closeMenuIcon}
          onClick={() => {
            setIsHeaderOpened(false);
          }}
        />
        <Link
          href="/create-form"
          className="to-form-link"
          onClick={() => setIsHeaderOpened(false)}
        >
          Add Form
        </Link>
        <button className="header-button app-button">
          Individual Investor
        </button>
        <div className="header-icon__container themes">
          <Image src={lightIcon} className="header-icon" alt="icon" />
          <span>Theme</span>
        </div>
        <div className="header-icon__container">
          <Image src={notificationIcon} className="header-icon" alt="icon" />
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
          <Image src={arrowIcon} alt="icon" />
        </div>
      </div>
    </div>
  );
}

export default Header;
