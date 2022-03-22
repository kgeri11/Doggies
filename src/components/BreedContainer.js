import React from "react";
import Breeds from "./Breeds";
import "../styles/container.css";



export default function BreedsContainer({ addBreedId, getRequestBreeds, sendData }) {
  return (
    <div className="container-fluid bg-transparent page my-1 p-1" id="page">
      <Breeds
        addBreedId={addBreedId}
        getRequestBreeds={getRequestBreeds}        
        sendData={sendData}
      />
    </div>
  );
}
