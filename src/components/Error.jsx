import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log("Error", err);

  return (
    <>
      <h1>Oops!!!</h1>
      <h2>Some thing Went Wrong</h2>
      <h3>
        {err.status}: {err.statusText}
      </h3>
    </>
  );
};

export default Error;
