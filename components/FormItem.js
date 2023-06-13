import React from "react";
import showIcon from "../public/icons/show.png";
import downloadIcon from "../public/icons/download.png";
import editIcon from "../public/icons/edit.png";
import Image from "next/image";
import "../styles/FormItem.css";

function FormItem({ isPending }) {
  return (
    <tbody>
      <tr className="form-item">
        <td>01</td>
        <td>Know Your Client Form</td>
        <td>September 23, 2022</td>
        {isPending && <td>Submitted</td>}
        <td>
          <div className="action-btns">
            <Image src={editIcon} />
            <Image src={showIcon} />
            {!isPending && <Image src={downloadIcon} />}
          </div>
        </td>
      </tr>
    </tbody>
  );
}

export default FormItem;
