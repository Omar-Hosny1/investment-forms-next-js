"use client";
import React, { useRef, useState } from "react";
import "../styles/CertificationForm.css";
import Error from "./Error";
import { showErrorMessage } from "@/utils/helper_functions";
import { useDispatch } from "react-redux";
import {
  onSave,
  onSaveCertificationFormData,
} from "@/redux/features/FormsSlice";
import { useRouter } from "next/navigation";

function CertificationForm() {
  // to dispatch actions
  const dispatch = useDispatch();
  const router = useRouter();

  const checkboxRef = useRef(); // check box refrence to get the value
  const textareaRef = useRef(); // textarea refrence to get the value

  // Represents the state of an error and provides a function to display error messages.
  const [error, setError] = useState({
    isHasError: false, // Indicates whether an error is currently being displayed.
    errorMessage: null, // The error message to be displayed.
  });

  function saveHandler() {
    // Check if the checkbox is checked
    const isCheckboxChecked = checkboxRef.current.checked;

    // hold the textarea value
    const certificatesTextareaValue = textareaRef.current.value;

    // If textarea is not filled, show an error message and close the function
    if (!certificatesTextareaValue) {
      showErrorMessage(
        "Please Fill The Certification Textarea",
        error,
        setError
      );
      return;
    }

    // If checkbox is not checked, show an error message and close the function
    if (!isCheckboxChecked) {
      showErrorMessage("Please tick the box to certify", error, setError);
      return;
    }

    dispatch(
      onSaveCertificationFormData({
        certificationText: certificatesTextareaValue,
      })
    );
    dispatch(onSave());
    router.back();
  }

  return (
    <>
      <div className="certification-form">
        <h2>Certification</h2>
        <textarea ref={textareaRef} />
        <input ref={checkboxRef} type="checkbox" id="certification-check-box" />
        <label htmlFor="certification-check-box">
          Please tick the box to certify.
        </label>
        <h3>Digitally Certify Document</h3>
        <p>
          You can click on the below button it will redirect to a platform where
          you can E-Sign the document to certify <br />
          the details and the contract with XYZ.Capital
        </p>
        <button className="e_sign-btn">E-Sign Document</button>
        <div className="global-form__btns">
          <button>Cancel</button>
          <button onClick={saveHandler}>Save</button>
        </div>
      </div>
      {error.isHasError ? <Error message={error.errorMessage} /> : null}
    </>
  );
}

export default CertificationForm;
