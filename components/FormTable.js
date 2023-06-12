"use client";
import React, { useState } from "react";
import FormItem from "./FormItem";
import "../styles/FormTable.css";

function FormTable() {
  const [isTablePending, setIsTablePending] = useState(false);

  return (
    <div className="table-container">
      <table className="forms-table">
        <tr className="forms-table__header">
          <th onClick={() => setIsTablePending((s) => !s)}>ID</th>
          <th>Form Title</th>

          {isTablePending ? <th>Generated on</th> : <th>Date</th>}
          {isTablePending && <th>Status</th>}
          <th>Actions</th>
        </tr>
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
