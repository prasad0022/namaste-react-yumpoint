import React from "react";
import { useRouteError } from "react-router";

const ErrorPage = () => {
  const err = useRouteError();

  return (
    <div className="error-container">
      <h1>Oops !!!</h1>
      <h2>Error Status : {err.status}</h2>
      <h2>Error Message : {err.statusText}</h2>
    </div>
  );
};

export default ErrorPage;
