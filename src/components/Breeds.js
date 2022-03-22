import React from "react";
import "../styles/breeds.css"

export default function Breeds({ getRequestBreeds, sendData }) {
  return (
    <>
      <div className="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-3 px-4 pb-2 g-3">
        {getRequestBreeds.map((item) => (
          <div className="col" type="button" key={item.id}>
            <div
              onClick={() => {
                sendData(item.id);
              }}
              className="card h-100"
            >
              <div className="card-body d-flex flex-column justify-content-end p-0">
                <div className="d-flex justify-content-center mb-1 text-center title-background">
                  <h4 className="">{item.name}</h4>
                </div>
              </div>
              <img src={item.image.url} className="card-img-breeds pt-2" alt="" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
