import React from "react";
import "../styles/DetailsForm.css";

function DetailsForm() {
  return (
    <div className="details-form">
      <span>Custodian Details</span>
      <div className="details-form__iputs">
        <input placeholder="Name *" />
        <input placeholder="Address of Correspondence *" />
        <input placeholder="Account Name *" />
        <input placeholder="Account Number *" />
      </div>
      <div className="global-form__btns">
        <button>Cancel</button>
        <button>Next</button>
      </div>
    </div>
  );
}

export default DetailsForm;
