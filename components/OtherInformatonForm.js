import React from "react";
import "../styles/OtherInformatonForm.css";
import CheckBox from "./CheckBox";
import CheckBoxesContainer from "./CheckBoxesContainer";

function OtherInformatonForm() {
  return (
    <div className="other-information-form">
      <h2>Other Information</h2>
      <p>Where do you want to send the following:</p>
      <div className="other-information-form__chooses">
        <CheckBoxesContainer title={"Certificates"} />
        <CheckBoxesContainer title={"Certificates"} />
        <CheckBoxesContainer title={"Certificates"} />
      </div>
      <input placeholder="Other Entity" />
      <div className="global-form__btns">
        <button>Cancel</button>
        <button>Save</button>
      </div>
    </div>
  );
}

export default OtherInformatonForm;
