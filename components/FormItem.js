import React from "react";
import showIcon from "../public/icons/show.png";
import downloadIcon from "../public/icons/download.png";
import editIcon from "../public/icons/edit.png";
import Image from "next/image";
import "../styles/FormItem.css";

function FormItem() {
  return (
    <tr className="form-item">
      <td>01</td>
      <td>Know Your Client Form</td>
      <td>September 23, 2022</td>
      <td>
        <div className="action-btns">
          <Image src={editIcon} />
          <Image src={showIcon} />
          <Image src={downloadIcon} />
        </div>
      </td>
    </tr>
  );
}

export default FormItem;
