"use client";
import React, { useState } from "react";
import "../styles/Forms.css";
import FormTable from "./FormTable";
import { useDispatch, useSelector } from "react-redux";
import {
  setFormsStatusAsApproved,
  setFormsStatusAsPending,
} from "@/redux/features/FormsSlice";

function Forms() {
  const dispatch = useDispatch();
  const isApprovedBtnSelected = useSelector(
    (state) => state.forms.isApprovedFormsShowed
  );

  const approvedBtnClassName = `${isApprovedBtnSelected && "active-btn"}`;
  const pendingBtnClassName = `${!isApprovedBtnSelected && "active-btn"}`;
  function selectApprovedBtnHandler() {
    dispatch(setFormsStatusAsApproved());
  }
  function selectPendingBtnHandler() {
    dispatch(setFormsStatusAsPending());
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
