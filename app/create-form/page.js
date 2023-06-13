import SideMenuItem from "@/components/SideMenuItem";
import Image from "next/image";
import React from "react";
import "../../styles/CreateForm.css";
import DetailsForm from "@/components/DetailsForm";
import OtherInformatonForm from "@/components/OtherInformatonForm";
import CertificationForm from "@/components/CertificationForm";
import person from "../../public/icons/person.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCertificate,
  faInfo,
  faInfoCircle,
  faUser,
  faUserAlt,
} from "@fortawesome/free-solid-svg-icons";
function CreateForm() {
  return (
    <div className="container">
      <div className="create-form__container">
        <div className="create-form__side-menu">
          <SideMenuItem
            isActive={true}
            title={"Custodian Details"}
            icon={faUserAlt}
          />
          <SideMenuItem
            icon={faInfoCircle}
            isActive={true}
            title={"Other Information"}
          />
          <SideMenuItem
            icon={faCertificate}
            isActive={true}
            title={"Certification"}
          />
        </div>
        <div className="create-form__form">
          {/* <DetailsForm /> */}
          {/* <OtherInformatonForm /> */}
          <CertificationForm />
        </div>
      </div>
    </div>
  );
}

export default CreateForm;
