import React, { useRef, useState } from "react";
import "../styles/OtherInformatonForm.css";
import CheckBoxesContainer from "./CheckBoxesContainer";
import { useDispatch } from "react-redux";
import {
  goToCertificationFormData,
  onSaveInformationFormData,
} from "@/redux/features/FormsSlice";
import Error from "./Error";
import { showErrorMessage } from "@/utils/helper_functions";
import { OTHRE_ENTITY_CHECKBOX_VALUE } from "@/utils/constants";
/**
 * This code defines a component called OtherInformationForm that collects data related to other information.
 * The component manages the state of the collected data and provides validation before saving the data.
 */

/**
 * The initial state object representing the initial values of the collected data.
 */
const initialState = {
  certificatesdData: null,
  profitsdData: null,
  salesdData: null,
  otherEntityInputValue: null,
};

/**
 * The OtherInformationForm component that collects data related to other information.
 * @returns {JSX.Element} - The rendered component.
 */
function OtherInformatonForm() {
  const dispatch = useDispatch();

  // Represents the state of an error and provides a function to display error messages.
  const [error, setError] = useState({
    isHasError: false, // Indicates whether an error is currently being displayed.
    errorMessage: null, // The error message to be displayed.
  });

  const otherEntityInputRef = useRef();
  const [collectedData, setCollectedData] = useState(initialState);

  /**
   * Updates the collected data with the certificates data.
   * @param {any} data - The certificates data to be set.
   */
  function setCertificatesdData(data) {
    setCollectedData((prevData) => {
      return { ...prevData, certificatesdData: data };
    });
  }

  /**
   * Updates the collected data with the other entity input value.
   * @param {any} data - The other entity input value to be set.
   */
  function setOtherEntityInputValue(data) {
    setCollectedData((prevData) => {
      return { ...prevData, otherEntityInputValue: data };
    });
  }

  /**
   * Updates the collected data with the profits data.
   * @param {any} data - The profits data to be set.
   */
  function setProfitsdData(data) {
    setCollectedData((prevData) => {
      return { ...prevData, profitsdData: data };
    });
  }

  /**
   * Updates the collected data with the sales data.
   * @param {any} data - The sales data to be set.
   */
  function setSalesdData(data) {
    setCollectedData((prevData) => {
      return { ...prevData, salesdData: data };
    });
  }

  /**
   * Checks if any of the checkboxes has the value of other entity.
   * @returns {boolean} - True if any of the checkboxes has the value of other entity, false otherwise.
   */
  function isCheckBoxHasOtherEntityValue() {
    if (collectedData.certificatesdData === OTHRE_ENTITY_CHECKBOX_VALUE) {
      return true;
    }
    if (collectedData.profitsdData === OTHRE_ENTITY_CHECKBOX_VALUE) {
      return true;
    }
    if (collectedData.salesdData === OTHRE_ENTITY_CHECKBOX_VALUE) {
      return true;
    }
  }

  /**
   * Handles the click event of the save button in the OtherInformationForm component.
   * Validates the collected data and takes appropriate actions.
   */
  function saveClickHandler() {
    console.log(collectedData);

    // Validate Certificates Section
    if (!collectedData.certificatesdData) {
      showErrorMessage(
        "Complete the Certificates Section, Please",
        error,
        setError
      );
      return;
    }

    // Validate Profits Section
    if (!collectedData.profitsdData) {
      showErrorMessage("Complete the Profits Section, Please", error, setError);
      return;
    }

    // Validate Sales Outcomes Section
    if (!collectedData.salesdData) {
      showErrorMessage(
        "Complete the Sales Outcomes Section, Please",
        error,
        setError
      );
      return;
    }

    // Get the value of the Other Entity input field
    const otherEntityInputValue = otherEntityInputRef.current.value;
    const isOtherEntityInputValueEmpty =
      otherEntityInputValue.trim().length === 0;

    // Check if any checkbox has the value of other entity
    const isCheckBoxesHasOtherEntityValue = isCheckBoxHasOtherEntityValue();

    // Validate Other Entity Field if they has any "other entity" value
    if (isCheckBoxesHasOtherEntityValue) {
      // Check if the input value has no value
      if (isOtherEntityInputValueEmpty) {
        // Global Value that help to show error messages
        showErrorMessage(
          "Fill the Other Entity Field, Please",
          error,
          setError
        );
        return;
      }
      setOtherEntityInputValue(otherEntityInputValue);
    } else {
      // if the all boxes don't has the "other entity" value just clean the value
      setOtherEntityInputValue(null);
    }
    // // TO GET THE LATEST STATE OBJECT AND SAVE IT
    // setCollectedData((CD) => {
    //   dispatch(
    //     );
    //     // Go To The Second Screen
    //     return CD;
    //   });
    const data = {
      certificatesdData: collectedData.certificatesdData,
      profitsdData: collectedData.profitsdData,
      salesdData: collectedData.salesdData,
      otherEntityInputValue: collectedData.otherEntityInputValue,
    };
    onSaveInformationFormData(data);
    dispatch(goToCertificationFormData());
  }

  return (
    <>
      <div className="other-information-form">
        <h2>Other Information</h2>
        <p>Where do you want to send the following:</p>
        <div className="other-information-form__chooses">
          <CheckBoxesContainer
            title={"Certificates"}
            onSubmitOtherEntityInput={setOtherEntityInputValue}
            onSubmit={setCertificatesdData}
          />
          <CheckBoxesContainer
            title={"Profits or any other Income"}
            onSubmitOtherEntityInput={setOtherEntityInputValue}
            onSubmit={setProfitsdData}
          />
          <CheckBoxesContainer
            title={"Sales Outcomes"}
            onSubmitOtherEntityInput={setOtherEntityInputValue}
            onSubmit={setSalesdData}
          />
        </div>
        <input placeholder="Other Entity" ref={otherEntityInputRef} />
        <div className="global-form__btns">
          <button>Cancel</button>
          <button onClick={saveClickHandler}>Next</button>
        </div>
      </div>
      {error.isHasError ? <Error message={error.errorMessage} /> : null}
    </>
  );
}

export default OtherInformatonForm;
