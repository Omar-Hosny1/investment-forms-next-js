import React from "react";
import "../styles/CertificationForm.css";

function CertificationForm() {
  return (
    <div className="certification-form">
      <h2>Certification</h2>
      <textarea />
      <input type="checkbox" id="certification-check-box" />
      <label for="certification-check-box">
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
        <button>Save</button>
      </div>
    </div>
  );
}

export default CertificationForm;
