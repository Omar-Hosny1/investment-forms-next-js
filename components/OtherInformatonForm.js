import React, { useRef, useState } from "react";
import "../styles/OtherInformatonForm.css";
import CheckBoxesContainer from "./CheckBoxesContainer";
import { useDispatch } from "react-redux";
import { goToCertificationFormData } from "@/redux/features/FormsSlice";
import Error from "./Error";
import { showErrorMessage } from "@/utils/helper_functions";
import { OTHRE_ENTITY_CHECKBOX_VALUE } from "@/utils/constants";

const initialState = {
  certificatesdData: null,
  profitsdData: null,
  salesdData: null,
  otherEntityInputValue: null,
};

function OtherInformatonForm() {
  const dispatch = useDispatch();

  // Represents the state of an error and provides a function to display error messages.
  const [error, setError] = useState({
    isHasError: false, // Indicates whether an error is currently being displayed.
    errorMessage: null, // The error message to be displayed.
  });

  const otherEntityInputRef = useRef();
  const [collectedData, setCollectedData] = useState(initialState);

  function setCertificatesdData(data) {
    console.log(data, "CERTIF");
    setCollectedData((prevData) => {
      return { ...prevData, certificatesdData: data };
    });
  }

  function setOtherEntityInputValue(data) {
    console.log(data, "CERTIF");
    setCollectedData((prevData) => {
      return { ...prevData, otherEntityInputValue: data };
    });
  }
  function setProfitsdData(data) {
    console.log(data, "PROF");

    setCollectedData((prevData) => {
      return { ...prevData, profitsdData: data };
    });
  }
  function setSalesdData(data) {
    console.log(data, "SAL");
    setCollectedData((prevData) => {
      return { ...prevData, salesdData: data };
    });
  }

  function isCheckBoxHasOtherEntityValue() {
    if (collectedData.certificatesdData == OTHRE_ENTITY_CHECKBOX_VALUE) {
      return true;
    }
    if (collectedData.profitsdData == OTHRE_ENTITY_CHECKBOX_VALUE) {
      return true;
    }
    if (collectedData.salesdData == OTHRE_ENTITY_CHECKBOX_VALUE) {
      return true;
    }
  }

  // Validate And Save The Data
  function saveClickHandler() {
    console.log(collectedData);
    if (!collectedData.certificatesdData) {
      showErrorMessage(
        "Compelete The Certificates Section Please",
        error,
        setError
      );
      return;
    }

    if (!collectedData.profitsdData) {
      showErrorMessage("Compelete The Profits Section Please", error, setError);
      return;
    }
    if (!collectedData.salesdData) {
      showErrorMessage(
        "Compelete The Sales Outcomes Section Please",
        error,
        setError
      );
      return;
    }
    const otherEntityInputValue = otherEntityInputRef.current.value;
    const isOtherEntityInputValueEmpty =
      otherEntityInputValue.trim().length == 0;

    const isCheckBoxesHasOtherEntityValue = isCheckBoxHasOtherEntityValue();

    if (isCheckBoxesHasOtherEntityValue) {
      if (isOtherEntityInputValueEmpty) {
        showErrorMessage("Fill The Other Entity Field Please", error, setError);
        return;
      }
      setOtherEntityInputValue(otherEntityInputValue);
    } else {
      setOtherEntityInputValue(null);
    }

    // dispatch(goToCertificationFormData());
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
            onSumbit={setCertificatesdData}
          />
          <CheckBoxesContainer
            title={"Profits or any other Income"}
            onSubmitOtherEntityInput={setOtherEntityInputValue}
            onSumbit={setProfitsdData}
          />
          <CheckBoxesContainer
            title={"Sales Outcomes"}
            onSubmitOtherEntityInput={setOtherEntityInputValue}
            onSumbit={setSalesdData}
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
