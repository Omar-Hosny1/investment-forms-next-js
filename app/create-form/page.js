"use client";
import React from "react";
import SideMenuItem from "@/components/SideMenuItem";
import {
  faCertificate,
  faInfoCircle,
  faUserAlt,
} from "@fortawesome/free-solid-svg-icons";

import "../../styles/CreateForm.css";
import CertificationForm from "@/components/CertificationForm";
import { useSelector } from "react-redux";
import DetailsForm from "@/components/DetailsForm";
import OtherInformatonForm from "@/components/OtherInformatonForm";

function CreateForm() {
  const currentFillingForm = useSelector(
    (state) => state.forms.currentFillingForm
  );
  console.log(currentFillingForm);
  return (
    <div className="container">
      <div className="create-form__container">
        <div className="create-form__side-menu">
          <SideMenuItem
            isActive={currentFillingForm == 0 ? true : false}
            title={"Custodian Details"}
            icon={faUserAlt}
          />
          <SideMenuItem
            icon={faInfoCircle}
            isActive={currentFillingForm == 1 ? true : false}
            title={"Other Information"}
          />
          <SideMenuItem
            icon={faCertificate}
            isActive={currentFillingForm == 2 ? true : false}
            title={"Certification"}
          />
        </div>

        <div className="create-form__form">
          {currentFillingForm == 0 && <DetailsForm />}
          {currentFillingForm == 1 && <OtherInformatonForm />}
          {currentFillingForm == 2 && <CertificationForm />}
        </div>
      </div>
    </div>
  );
}

export default CreateForm;
