import React from "react";
import "../styles/Error.css";

function Error({ message }) {
  return (
    <div className="error">
      <span style={{ color: "white" }}>{message}</span>
    </div>
  );
}

export default Error;
