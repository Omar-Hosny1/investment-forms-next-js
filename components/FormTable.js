"use client";
import React, { useState } from "react";
import FormItem from "./FormItem";
import "../styles/FormTable.css";

function FormTable() {
  const [isTablePending, setIsTablePending] = useState(false);

  return (
    <div className="table-container">
      <table className="forms-table">
        <tbody>
          <tr className="forms-table__header">
            <th onClick={() => setIsTablePending((s) => !s)}>ID</th>
            <th>Form Title</th>
            <th>{isTablePending ? "Generated on" : "Date"}</th>
            {isTablePending && <th>Status</th>}
            <th>Actions</th>
          </tr>
        </tbody>
        <FormItem isPending={isTablePending} />
        <FormItem isPending={isTablePending} />
        <FormItem isPending={isTablePending} />
        <FormItem isPending={isTablePending} />
        <FormItem isPending={isTablePending} />
        <FormItem isPending={isTablePending} />
        <FormItem isPending={isTablePending} />
        <FormItem isPending={isTablePending} />
        <FormItem isPending={isTablePending} />
        <FormItem isPending={isTablePending} />
        <FormItem isPending={isTablePending} />
        <FormItem isPending={isTablePending} />
        <FormItem isPending={isTablePending} />
        <FormItem isPending={isTablePending} />
        <FormItem isPending={isTablePending} />
        <FormItem isPending={isTablePending} />
        <FormItem isPending={isTablePending} />
        <FormItem isPending={isTablePending} />
        <FormItem isPending={isTablePending} />
        <FormItem isPending={isTablePending} />
      </table>
    </div>
  );
}

export default FormTable;
