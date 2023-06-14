import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import "../styles/DetailsForm.css";
import {
  goToInformationsFormData,
  onSaveDetailsFormData,
} from "../redux/features/FormsSlice";
import Error from "./Error";
import {
  isValidEmail,
  isValidNumber,
  showErrorMessage,
} from "@/utils/helper_functions";

function DetailsForm() {
  const dispatch = useDispatch();
  const nameRef = useRef();
  const addressRef = useRef();
  const accountNameRef = useRef();
  const accountNumberRef = useRef();

  // Represents the state of an error and provides a function to display error messages.
  const [error, setError] = useState({
    isHasError: false, // Indicates whether an error is currently being displayed.
    errorMessage: null, // The error message to be displayed.
  });

  function submitClickHandler() {
    // Get the current values from the input references
    const nameValue = nameRef.current.value.trim();
    const addressValue = addressRef.current.value.trim();
    const accountNameValue = accountNameRef.current.value.trim();
    const accountNumberValue = accountNumberRef.current.value.trim();

    // Validate the input values
    if (!nameValue) {
      showErrorMessage("Please enter your name", error, setError);
      return;
    }

    if (!addressValue) {
      showErrorMessage("Please enter your address", error, setError);
      return;
    }

    // if (!accountNameValue || !isValidEmail(accountNameValue)) {
    //   showErrorMessage(
    //     "Please enter a valid account name (email)",
    //     error,
    //     setError
    //   );
    //   return;
    // }

    if (
      !accountNumberValue ||
      !isValidNumber(accountNumberValue) ||
      accountNumberValue.length == 0
    ) {
      showErrorMessage("Please enter a valid account number", error, setError);
      return;
    }

    dispatch(
      onSaveDetailsFormData({
        name: nameValue,
        address: addressValue,
        accountName: accountNameValue,
        accountNumber: accountNumberValue,
      })
    );
    // go to the second form
    dispatch(goToInformationsFormData());
  }

  return (
    <div className="details-form">
      <span>Custodian Details</span>
      <div className="details-form__iputs">
        <input ref={nameRef} placeholder="Name *" />
        <input ref={addressRef} placeholder="Address of Correspondence *" />
        <input ref={accountNameRef} placeholder="Account Name *" />
        <input ref={accountNumberRef} placeholder="Account Number *" />
      </div>
      <div className="global-form__btns">
        <button>Cancel</button>
        <button onClick={submitClickHandler}>Next</button>
      </div>
      {error.isHasError ? <Error message={error.errorMessage} /> : null}
    </div>
  );
}

export default DetailsForm;
