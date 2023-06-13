import SideMenuItem from "@/components/SideMenuItem";
import Image from "next/image";
import React from "react";
import "../../styles/CreateForm.css";
import DetailsForm from "@/components/DetailsForm";
import OtherInformatonForm from "@/components/OtherInformatonForm";
import CertificationForm from "@/components/CertificationForm";

function CreateForm() {
  return (
    <div className="container">
      <div className="create-form__container">
        <div className="create-form__side-menu">
          <SideMenuItem />
          <SideMenuItem />
          <SideMenuItem />
        </div>
        <div className="create-form__form">
          <DetailsForm />
          {/* <OtherInformatonForm /> */}
          {/* <CertificationForm /> */}
        </div>
      </div>
    </div>
  );
}

export default CreateForm;
