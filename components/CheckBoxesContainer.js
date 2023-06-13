"use client";
import React, { useReducer } from "react";
import "../styles/CheckBoxesContainer.css";
import CheckBox from "./CheckBox";
import {
  CLIENT_CHECKBOX_VALUE,
  CUSTODIAN_CHECKBOX_VALUE,
  OTHRE_ENTITY_CHECKBOX_VALUE,
} from "@/utils/constants";

const defaultState = {
  isFirstCheckBoxSelected: false,
  isSecondCheckBoxSelected: false,
  isThirdCheckBoxSelected: false,
};

function reducer(state, action) {
  if (action == 0) {
    return { ...defaultState, isFirstCheckBoxSelected: true };
  } else if (action == 1) {
    return { ...defaultState, isSecondCheckBoxSelected: true };
  } else {
    return { ...defaultState, isThirdCheckBoxSelected: true };
  }
}

function CheckBoxesContainer({ title, onSumbit }) {
  const [state, dispatch] = useReducer(reducer, defaultState);

  function onClientCheckBoxSelected() {
    dispatch(0);
    const selectedValue = CLIENT_CHECKBOX_VALUE;
    onSumbit(selectedValue);
  }
  function onCustodianCheckBoxSelected() {
    dispatch(1);
    const selectedValue = CUSTODIAN_CHECKBOX_VALUE;
    onSumbit(selectedValue);
  }
  function onOtherEntityCheckBoxSelected() {
    dispatch(2);
    const selectedValue = OTHRE_ENTITY_CHECKBOX_VALUE;
    onSumbit(selectedValue);
  }

  return (
    <div className="check-boxes-container">
      <h4>{title}</h4>
      <div className="check-boxes">
        <CheckBox
          label={"Client"}
          isSelected={state.isFirstCheckBoxSelected}
          onClick={onClientCheckBoxSelected}
        />
        <CheckBox
          label={"Custodian"}
          isSelected={state.isSecondCheckBoxSelected}
          onClick={onCustodianCheckBoxSelected}
        />
        <CheckBox
          label={"Other Entity"}
          isSelected={state.isThirdCheckBoxSelected}
          onClick={onOtherEntityCheckBoxSelected}
        />
      </div>
    </div>
  );
}

export default CheckBoxesContainer;
