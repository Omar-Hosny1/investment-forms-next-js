import React from "react";
import "../styles/OtherInformatonForm.css";

function OtherInformatonForm() {
  return (
    <div className="other-information-form">
      <h2>Other Information</h2>
      <p>Where do you want to send the following:</p>
      <div className="Certificates">
        <h4>Certificates</h4>
      </div>
      <input placeholder="Other Entity" />
      <div className="other-information-form__brns"></div>
    </div>
  );
}

export default OtherInformatonForm;
