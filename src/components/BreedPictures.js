import React from "react";
import "../styles/breedpictures.css"

export default function BreedPictures({ getRequestPics, addClicked }) {
  return (
    <>
      <div className="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-3 px-4 pb-2 g-3">
        {getRequestPics.map((item) => (
          <div
            className="col"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasBottom"
            aria-controls="offcanvasBottom"
            onClick={() => addClicked(item)}
            key={item.id}
          >
            <div className="card h-100">
              <div className="card-body d-flex flex-column justify-content-end p-1">
                <img src={item.url} className="card-img-breed" alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
