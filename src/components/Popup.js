import React from "react";
import "../styles/popup.css";

export default function Popup({ clicked }) {
  return (
    <>
      {clicked.map((item) =>
        !item.breeds[0] ? (
          <div
            key={item.id}
            className="offcanvas offcanvas-bottom"
            tabindex="-1"
            id="offcanvasBottom"
            data-bs-keyboard="false"
            data-bs-backdrop="false"
            aria-labelledby="offcanvasBottomLabel"
          >
            <div className="offcanvas-header">
              <h3 className="offcanvas-title me-5" id="offcanvasBottomLabel">
                Some dog
              </h3>
              <button
                type="button"
                className="btn-close btn-light text-reset ms-5"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div
              className="offcanvas-body bg-transparent overflow-hidden"
              id="popup-body"
            >
              <div className="p-1">
                <img className="card-img-popup img-fluid" src={item.url} />
              </div>
            </div>
          </div>
        ) : (
          <div
            key={item.id}
            className="offcanvas offcanvas-bottom"
            tabindex="-1"
            id="offcanvasBottom"
            data-bs-keyboard="false"
            data-bs-backdrop="false"
            aria-labelledby="offcanvasBottomLabel"
          >
            <div className="offcanvas-header">
              <h2
                className="offcanvas-title border-bottom border-dark me-5"
                id="offcanvasBottomLabel"
              >
                {item.breeds[0].name}
              </h2>

              <button
                type="button"
                className="btn-close btn-light text-reset ms-5"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div
              className="offcanvas-body bg-transparent overflow-hidden"
              id="popup-body"
            >
              <div className="p-1">
                <img className="card-img-popup img-fluid" src={item.url} />
              </div>

              <div
                className="row row-cols-1 row-cols-xs-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2 px-1 py-1 g-1 ms-1 overflow-auto"
                id="description"
              >
                <h4 className="col">Jellemzők: </h4>
                <h5 className="col">
                  Viselkedése: {item.breeds[0].temperament}
                </h5>
                <h5 className="col">
                  Súlya: {item.breeds[0].weight.metric} kg
                </h5>
                <h5 className="col">
                  Magassága: {item.breeds[0].height.metric} cm
                </h5>
                <h5 className="col">Élethossz: {item.breeds[0].life_span}</h5>
                <h5 className="col">
                  Mire lett tenyésztve: {item.breeds[0].bred_for}
                </h5>
                <h5 className="col">Csoport: {item.breeds[0].breed_group}</h5>
              </div>
            </div>
          </div>
        )
      )}
    </>
  );
}


/*
{clicked.map((item) => (
        <div
          key={item.id}
          className="offcanvas offcanvas-bottom"
          tabindex="-1"
          id="offcanvasBottom"
          data-bs-keyboard="false"
          data-bs-backdrop="false"
          aria-labelledby="offcanvasBottomLabel"
        >
          <div className="offcanvas-header">
            <h3 className="offcanvas-title" id="offcanvasBottomLabel">
              {item.name}
            </h3>
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body bg-transparent " id="popup-body">
            <div className="p-1">
              <img className="card-img-popup img-fluid" src={item.image.url} />
            </div>

            <div
              className="row row-cols-1 row-cols-xs-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2 px-1 py-1 g-2 ms-1 overflow-auto"
              id="description"
            >
              <h4 className="col">Jellemzők: </h4>
              <h5 className="col">Viselkedése: {item.breeds[0].temperament}</h5>
              <h5 className="col">Súlya: {item.breeds[0]weight.metric} kg</h5>
              <h5 className="col">Magassága: {item.breeds[0]height.metric} cm</h5>
              <h5 className="col">Élethossz: {item.breeds[0]life_span}</h5>
              <h5 className="col">Mire lett tenyésztve: {item.breeds[0]bred_for}</h5>
            </div>
          </div>
        </div>
      ))}

      */