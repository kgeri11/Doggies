import axios from "axios";
import { useState, useEffect } from "react";
import Container from "../components/Container";
import Popup from "../components/Popup";

export default function Home() {
  //api eléréshez key és url
  const access_token = "1e474df9-2478-4725-893a-47600dbe1061";
  const url = "https://api.thedogapi.com/v1/images/search?limit=24";

  //lekért adatokhoz
  const [fetchedData, setFetchedData] = useState([]);
  const [error, setError] = useState(null);
  //oldal betöltéséhez
  const [isLoaded, setIsLoaded] = useState(false);
  //clikkelt elemekhez
  const [clicked, setClicked] = useState([]);

  //config az api-hoz
  const config = {
    headers: {
      "x-api-key": { access_token },
    },
  };

  //a clickelt elem adatait lekéri
  const addClicked = (item) =>
    setClicked((clicked) => [item], console.log(clicked));

  //adatok lekérése
  useEffect(() => {
    async function getRequest() {
      try {
        const request = await axios.get(url, config);
        setIsLoaded(true);
        setFetchedData(request.data);
        console.log(fetchedData);
        return request;
      } catch (error) {
        setIsLoaded(true);
        setError(error);
      }
    }
    getRequest();
  }, [url]);

  //oldal komponenseinek megjelenítése
  if (error) {
    return <>{error.message}</>;
  } else if (!isLoaded) {
    return (
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status"></div>
      </div>
    );
  } else {
    return (
      <div>
        <Container
          getRequest={fetchedData}
          clicked={clicked}
          addClicked={addClicked}
        />
        <Popup clicked={clicked} />
      </div>
    );
  }
}
