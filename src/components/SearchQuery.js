import React from "react";

export default function Breeds({ filteredResults, addBreed }) {
  return (
    <>
      <div className="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-3 px-4 pb-2 g-3">
        {filteredResults.map((item) => (
          <div className="col" type="button" key={item.id}>
            <div className="card h-100 ">
              <div className="card-body d-flex flex-column justify-content-end p-0">
                <div className="d-flex justify-content-center mb-1 text-center title-background">
                  <h4 className="">{item.name}</h4>
                </div>
              </div>
              <img src={item.image.url} className="card-img-top pt-2" alt="" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
