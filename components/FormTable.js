"use client";
import React, { useEffect, useState } from "react";
import FormItem from "./FormItem";
import "../styles/FormTable.css";
import { getForms } from "@/service/forms-service";
import { useDispatch, useSelector } from "react-redux";
import { setForms } from "@/redux/features/FormsSlice";
import { formatter, showErrorMessage } from "@/utils/helper_functions";
import Spinner from "./Spinner";
import NoItemsFound from "./NoItemsFound";

function FormTable() {
  const isTableApproved = useSelector(
    (state) => state.forms.isApprovedFormsShowed
  );
  const formsData = useSelector((state) => state.forms.forms);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  // Represents the state of an error and provides a function to display error messages.
  const [error, setError] = useState({
    isHasError: false, // Indicates whether an error is currently being displayed.
    errorMessage: null, // The error message to be displayed.
  });

  const fetch = async () => {
    // Fetch forms data using the getForms() function
    const data = await getForms();

    // Convert the fetched data into an array of key-value pairs
    dispatch(setForms(Object.entries(data || {})));
  };

  useEffect(() => {
    try {
      setIsLoading(true);

      // Call the fetch() function to fetch the forms data
      fetch();
    } catch (error) {
      // Show error message if an error occurs during fetching
      showErrorMessage("Something Went Wrong", error, setError);
    }

    setIsLoading(false);
  }, []);

  const renderedFormsData = formsData.map((e, index) => {
    return (
      <FormItem
        isPending={!isTableApproved}
        date={formatter.format(new Date(e[1].date))}
        formTitle={e[1].detailsFormData.name}
        id={e[0]}
        key={index}
        currentForm={index}
      />
    );
  });

  function NoItmesFoundText() {
    if (!isLoading && !formsData.length && !error.errorMessage) {
      return <NoItemsFound />;
    }
  }
  return (
    <>
      <div className="table-container">
        {isLoading ? (
          <Spinner />
        ) : (
          <table className="forms-table">
            <tbody>
              <tr className="forms-table__header">
                <th>ID</th>
                <th>Form Title</th>
                <th>{!isTableApproved ? "Generated on" : "Date"}</th>
                {!isTableApproved && <th>Status</th>}
                <th>Actions</th>
              </tr>
            </tbody>
            {!isLoading && renderedFormsData}
          </table>
        )}
        {NoItmesFoundText()}
      </div>
      {error.isHasError ? <Error message={error.errorMessage} /> : null}
    </>
  );
}

export default FormTable;
