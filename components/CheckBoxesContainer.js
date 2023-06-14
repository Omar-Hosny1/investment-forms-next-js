"use client";
import React, { useReducer, useState } from "react";
import "../styles/CheckBoxesContainer.css";
import CheckBox from "./CheckBox";
import {
  CLIENT_CHECKBOX_VALUE,
  CUSTODIAN_CHECKBOX_VALUE,
  OTHRE_ENTITY_CHECKBOX_VALUE,
} from "@/utils/constants";

/**
 * This code defines a component called CheckBoxesContainer that displays a set of checkboxes.
 * The component uses a reducer function to manage the state of the checkboxes.
 * The state object contains the selected state of each checkbox.
 * The reducer function handles the state updates based on the dispatched actions.
 * The component also provides callback functions for when a checkbox is selected.
 */

/**
 * The default state object representing the initial state of the checkboxes.
 */
const defaultState = {
  isFirstCheckBoxSelected: false,
  isSecondCheckBoxSelected: false,
  isThirdCheckBoxSelected: false,
};

/**
 * The reducer function that handles state updates based on the dispatched actions.
 * @param {Object} state - The current state object.
 * @param {number} action - The action dispatched to update the state.
 * @returns {Object} - The updated state object.
 */
function reducer(state, action) {
  if (action === 0) {
    return { ...defaultState, isFirstCheckBoxSelected: true };
  } else if (action === 1) {
    return { ...defaultState, isSecondCheckBoxSelected: true };
  } else {
    return { ...defaultState, isThirdCheckBoxSelected: true };
  }
}

/**
 * The CheckBoxesContainer component that displays a set of checkboxes and manages their state.
 * @param {string} title - The title of the checkboxes container.
 * @param {Function} onSubmit - The callback function to be called when a checkbox is selected.
 * @returns {JSX.Element} - The rendered component.
 */
function CheckBoxesContainer({ title, onSubmit }) {
  const [state, dispatch] = useReducer(reducer, defaultState);

  /**
   * Handles the selection of the Client checkbox.
   * Updates the state and calls the onSubmit callback with the selected value.
   */
  function onClientCheckBoxSelected() {
    dispatch(0); // Replace with the actual value for the checkbox
    const selectedValue = CLIENT_CHECKBOX_VALUE;
    onSubmit(selectedValue);
  }

  /**
   * Handles the selection of the Custodian checkbox.
   * Updates the state and calls the onSubmit callback with the selected value.
   */
  function onCustodianCheckBoxSelected() {
    dispatch(1); // Replace with the actual value for the checkbox
    const selectedValue = CUSTODIAN_CHECKBOX_VALUE;
    onSubmit(selectedValue);
  }

  /**
   * Handles the selection of the Other Entity checkbox.
   * Updates the state and calls the onSubmit callback with the selected value.
   */
  function onOtherEntityCheckBoxSelected() {
    dispatch(2); // Replace with the actual value for the checkbox
    const selectedValue = OTHRE_ENTITY_CHECKBOX_VALUE;
    onSubmit(selectedValue);
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
