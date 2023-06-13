"use client";
import React, { useState } from "react";

import "../styles/CheckBox.css";
function CheckBox({ isSelected, onClick, label }) {
  const getClassName = `check-box ${
    isSelected && "check-box_checked border-checked"
  }`;

  return (
    <div className="check-box-container" onClick={onClick}>
      <div className={getClassName}></div>
      <span>{label}</span>
    </div>
  );
}

export default CheckBox;
