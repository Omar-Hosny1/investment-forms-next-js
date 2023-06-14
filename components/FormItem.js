"use client";
import React from "react";
import showIcon from "../public/icons/show.png";
import downloadIcon from "../public/icons/download.png";
import editIcon from "../public/icons/edit.png";
import removeIcon from "../public/icons/remove.png";
import Image from "next/image";
import "../styles/FormItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRemove } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { onRemoveForm } from "@/redux/features/FormsSlice";

function FormItem({ isPending, formTitle, date, id, currentForm }) {
  // To Show it with Two digits even it smaller than 10
  const getTheId = `${currentForm < 10 ? "0" + currentForm : currentForm}`;
  const dispatch = useDispatch();

  function RemoveHandler() {
    dispatch(onRemoveForm({ id }));
  }
  return (
    <tbody>
      <tr className="form-item">
        <td>{getTheId}</td>
        <td>{formTitle}</td>
        <td>{date}</td>
        {isPending && (
          <td>
            <span className="submitted">Submitted</span>
          </td>
        )}
        <td>
          <div className="action-btns">
            <Image src={editIcon} alt="edit-icon" />
            <Image src={showIcon} alt="show-icon" />
            {!isPending && <Image src={downloadIcon} alt="download-icon" />}
            {!isPending && (
              <FontAwesomeIcon icon={faRemove} onClick={RemoveHandler} />
            )}
          </div>
        </td>
      </tr>
    </tbody>
  );
}

export default FormItem;
