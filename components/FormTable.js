import React from "react";
import FormItem from "./FormItem";
import "../styles/FormTable.css";

function FormTable() {
  return (
    <div className="table-container">
      <table className="forms-table">
        <tr className="forms-table__header">
          <th>ID</th>
          <th>Form Title</th>
          <th>Date</th>
          <th>Actions</th>
        </tr>
        <FormItem />
        <FormItem />
        <FormItem />
        <FormItem />
        <FormItem />
        <FormItem />
        <FormItem />
        <FormItem />
        <FormItem />
        <FormItem />
        <FormItem />
        <FormItem />
        <FormItem />
        <FormItem />
        <FormItem />
        <FormItem />
        <FormItem />
        <FormItem />
        <FormItem />
        <FormItem />
      </table>
    </div>
  );
}

export default FormTable;
