import React from "react";
import "../styles/card.css";

export default function Card({ getRequest, addClicked }) {
  return (
    <>
      <div className="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 px-4 pb-1 g-3">
        {getRequest.map((item) =>
          !item.breeds[0] ? (
            <div
              className="col"
              key={item.id}
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasBottom"
              aria-controls="offcanvasBottom"
            >
              <div onClick={() => addClicked(item)} className="card h-100">
                <div className="card-body d-flex flex-column  justify-content-end p-0">
                  <div className="d-flex justify-content-center mb-1 text-center title-background">
                    <h4 className="">Some dog</h4>
                  </div>
                </div>
                <img src={item.url} className="card-img-top mt-1 mb-3" alt="" />
              </div>
            </div>
          ) : (
            <div
              className="col"
              key={item.id}
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasBottom"
              aria-controls="offcanvasBottom"
            >
              <div onClick={() => addClicked(item)} className="card h-100">
                <div className="card-body d-flex flex-column  justify-content-end p-0">
                  <div className="d-flex justify-content-center mb-1 text-center title-background">
                    <h4 className="">{item.breeds[0].name}</h4>
                  </div>
                </div>
                <img src={item.url} className="card-img-top mt-1 mb-3" alt="" />
              </div>
            </div>
          )
        )}
      </div>
    </>
  );
}


/*<h4 className="overflow-hidden">{item.name}</h4>*/