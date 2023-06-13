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
};

function OtherInformatonForm() {
  const dispatch = useDispatch();
  const otherEntityInputRef = useRef();
  const [collectedData, setCollectedData] = useState(initialState);

  // Represents the state of an error and provides a function to display error messages.
  const [error, setError] = useState({
    isHasError: false, // Indicates whether an error is currently being displayed.
    errorMessage: null, // The error message to be displayed.
  });

  function setCertificatesdData(data) {
    console.log(data, "CERTIF");
    setCollectedData((prevData) => {
      return { ...prevData, certificatesdData: data };
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
    // Handle The Other Entity Mechanism

    // const otherEntityInputValue = otherEntityInputRef.current.value;
    // const isOtherEntityInputValueEmpty =
    //   otherEntityInputValue.trim().length == 0;

    // if (collectedData.salesdData == OTHRE_ENTITY_CHECKBOX_VALUE) {
    //   if (isOtherEntityInputValueEmpty) {
    //     showErrorMessage("Fill The Other Entity Field Please", error, setError);
    //   } else {
    //     console.log("RUNNING");
    //     // add the input value field if the sales section value is "Other Entity"
    //     setSalesdData(otherEntityInputValue);
    //   }
    // }

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
            onSumbit={setCertificatesdData}
          />
          <CheckBoxesContainer
            title={"Profits or any other Income"}
            onSumbit={setProfitsdData}
          />
          <CheckBoxesContainer
            title={"Sales Outcomes"}
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
