import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import BreedPictures from "../components/BreedPictures";
import Popup from "../components/Popup";

export default function Breed() {
  //api eléréshez key és url
  const access_token = "1e474df9-2478-4725-893a-47600dbe1061";
  const url = "https://api.thedogapi.com/v1/images/search?limit=5&breed_id=";
  //paraméter fogadása a másik routeról
  const location = useLocation();
  const id = location.state.id;
  //a lekért adatok
  const [fetchedData, setFetchedData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  //clikkelt elemekhez
  const [clicked, setClicked] = useState([]);

  //a clickelt elem adatait lekéri
  const addClicked = (item) =>
    setClicked((clicked) => [item], console.log(clicked));

  //config az api-hoz
  const config = {
    headers: {
      "x-api-key": { access_token },
    },
  };

  //adatok lekérése a kapott ID-val összefűzve
  useEffect(() => {
    async function getRequestPics() {
      try {
        console.log(url + id);
        const request = await axios.get(url + id, config);
        setIsLoaded(true);
        setFetchedData(request.data);
        console.log(fetchedData);
        console.log(location);
        return request;
      } catch (error) {
        setIsLoaded(true);
        setError(error);
      }
    }
    getRequestPics();
  }, [url]);

  //oldal komponenseinek megjelenítése
  if (error) {
    return <>{error.message}</>;
  } else if (!isLoaded) {
    return (
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="container-fluid bg-transparent page my-1 p-1" id="page">
          <BreedPictures
            getRequestPics={fetchedData}
            addClicked={addClicked}
            clicked={clicked}
          />
          <Popup clicked={clicked} />
        </div>
      </div>
    );
  }
}
