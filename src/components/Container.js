import React, { useEffect, useState } from "react";
import "../styles/container.css";
import Card from "./Card";

export default function Container({ getRequest, addClicked }) {
  return (
    <div className="container-fluid bg-transparent page my-1 p-1"
    id="page">
      <Card
        getRequest={getRequest}        
        addClicked={addClicked}
      />
    </div>
  );
}
