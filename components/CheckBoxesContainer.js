"use client";
import React, { useReducer } from "react";
import "../styles/CheckBoxesContainer.css";
import CheckBox from "./CheckBox";

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
  } else if (action == 2) {
    return { ...defaultState, isThirdCheckBoxSelected: true };
  }
}

function CheckBoxesContainer({ title }) {
  const [state, dispatch] = useReducer(reducer, defaultState);

  return (
    <div className="check-boxes-container">
      <h4>{title}</h4>
      <div className="check-boxes">
        <CheckBox
          isSelected={state.isFirstCheckBoxSelected}
          onClick={() => dispatch(0)}
        />
        <CheckBox
          isSelected={state.isSecondCheckBoxSelected}
          onClick={() => dispatch(1)}
        />
        <CheckBox
          isSelected={state.isThirdCheckBoxSelected}
          onClick={() => dispatch(2)}
        />
      </div>
    </div>
  );
}

export default CheckBoxesContainer;
