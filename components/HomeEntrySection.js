import React from "react";

import "../styles/HomeEntrySection.css";
import Image from "next/image";
import arrowDownIcon from "../public/icons/arrow-down_blue.png";
import formsIcon from "../public/icons/forms.png";
import searchIcon from "../public/icons/search.png";

function EntrySection() {
  return (
    <div className="container">
      <div className="forms-entry container">
        <div className="forms-entry_first-section">
          <div className="forms-icon_container">
            <Image src={formsIcon} className="forms-icon" alt="icon" />
          </div>
          <div className="forms-entry_description">
            <h3>Forms</h3>
            <p>All the compulsory forms are available here</p>
          </div>
        </div>
        <div className="forms-entry_second-section">
          <div className="search-input_container">
            <input placeholder="Search" className="search-input" />
            <Image src={searchIcon} alt="icon" />
          </div>
          <div className="sort-by">
            <span>Sort By</span>
            <Image src={arrowDownIcon} alt="icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EntrySection;
