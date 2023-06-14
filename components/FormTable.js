"use client";
import React, { useEffect, useState } from "react";
import FormItem from "./FormItem";
import "../styles/FormTable.css";
import { getForms } from "@/service/forms-service";
import { useDispatch, useSelector } from "react-redux";
import { setForms } from "@/redux/features/FormsSlice";
import { formatter } from "@/utils/helper_functions";

function FormTable() {
  const isTablePending = useSelector(
    (state) => state.forms.isApprovedFormsShowed
  );
  const formsData = useSelector((state) => state.forms.forms);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetch = async () => {
      const data = await getForms();
      console.log(Object.entries(data));
      dispatch(setForms(Object.entries(data)));
    };
    fetch();
  }, []);

  const renderedFormsData = formsData.map((e, index) => {
    // console.log(e);
    if (!e) {
      return;
    }
    return (
      <FormItem
        isPending={isTablePending}
        date={formatter.format(new Date(e[1].date))}
        formTitle={e[1].detailsFormData.name}
        id={e[0]}
        key={index}
        currentForm={index}
      />
    );
  });

  return (
    <div className="table-container">
      <table className="forms-table">
        <tbody>
          <tr className="forms-table__header">
            <th>ID</th>
            <th>Form Title</th>
            <th>{isTablePending ? "Generated on" : "Date"}</th>
            {isTablePending && <th>Status</th>}
            <th>Actions</th>
          </tr>
        </tbody>
        {renderedFormsData}
      </table>
    </div>
  );
}

export default FormTable;
