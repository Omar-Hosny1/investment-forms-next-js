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
  const currentForm = useSelector((state) => state.forms.currentForm);
  console.log(currentForm);
  return (
    <div className="container">
      <div className="create-form__container">
        <div className="create-form__side-menu">
          <SideMenuItem
            isActive={currentForm == 0 ? true : false}
            title={"Custodian Details"}
            icon={faUserAlt}
          />
          <SideMenuItem
            icon={faInfoCircle}
            isActive={currentForm == 1 ? true : false}
            title={"Other Information"}
          />
          <SideMenuItem
            icon={faCertificate}
            isActive={currentForm == 2 ? true : false}
            title={"Certification"}
          />
        </div>

        <div className="create-form__form">
          {currentForm == 0 && <DetailsForm />}
          {currentForm == 1 && <OtherInformatonForm />}
          {currentForm == 2 && <CertificationForm />}
        </div>
      </div>
    </div>
  );
}

export default CreateForm;
