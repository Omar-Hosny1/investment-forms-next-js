"use client";
import React, { useState } from "react";
import "../styles/Forms.css";
import FormTable from "./FormTable";

function Forms() {
  const [isApprovedBtnSelected, setIsApprovedBtnSelected] = useState(true);

  const approvedBtnClassName = `${isApprovedBtnSelected && "active-btn"}`;
  const pendingBtnClassName = `${!isApprovedBtnSelected && "active-btn"}`;

  function selectApprovedBtnHandler() {
    setIsApprovedBtnSelected(true);
  }
  function selectPendingBtnHandler() {
    setIsApprovedBtnSelected(false);
  }

  return (
    <div className="container">
      <div className="forms">
        <div className="forms-btns">
          <button
            className={approvedBtnClassName}
            onClick={selectApprovedBtnHandler}
          >
            Approved
          </button>
          <button
            className={pendingBtnClassName}
            onClick={selectPendingBtnHandler}
          >
            Pending
          </button>
        </div>
        <FormTable />
      </div>
    </div>
  );
}

export default Forms;
