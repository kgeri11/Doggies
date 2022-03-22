import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import BreedsContainer from "../components/BreedContainer";
import Search from "../components/Search";
import SearchContainer from "../components/SearchContainer";
import Pagination from "../components/Pagination";

export default function Breeds() {
  //api eléréshez key és url
  const access_token = "1e474df9-2478-4725-893a-47600dbe1061";
  const urlBreed = "https://api.thedogapi.com/v1/breeds?limit=12&page=";

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  //lekért kutyafajták
  const [fetchedBreeds, setFetchedBreeds] = useState([]);
  //fajta ID lekérése az aloldalhoz
  const [breedId, setBreedId] = useState("");
  //search query
  const [query, setQuery] = useState("");
  //a passzoló találatok
  const [filteredResults, setFilteredResults] = useState([]);
  //oldalszámláló a lapozáshoz
  const [pagecount, setPageCount] = useState(0);

  //config az api-hoz
  const config = {
    headers: {
      "x-api-key": { access_token },
    },
  };

  //a clickelt elem ID-ját kéri le
  const addBreedId = (item) =>
    setBreedId((breedId) => item, console.log(breedId));

  //paraméter átküldése másik routera
  const navigate = useNavigate();
  const sendData = (item) => {
    navigate("/Breed", { state: { id: item, name: "ájdí" } });
  };

  //adatok lekérése és hiba megakadályozása egyszerűn hogy a pagecount ne lehesen negatív és ne dobjon hibát
  useEffect(() => {
    async function getRequestBreeds() {
      try {
        const request = await axios.get(
          urlBreed + (pagecount >= 0 ? pagecount : setPageCount(0)),
          config
        );
        setFetchedBreeds(request.data);
        setIsLoaded(true);
        console.log(fetchedBreeds);
        console.log(pagecount);
        return request;
      } catch (error) {
        setIsLoaded(true);
        setError(error);
      }
    }
    getRequestBreeds();
  }, [pagecount]);

  //kereső mező és a szűrés
  const searchBreeds = (searchValue) => {
    setQuery(searchValue);
    if (query !== "") {
      const filteredData = fetchedBreeds.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(query.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(fetchedBreeds);
    }
    console.log(filteredResults);
    console.log(query);
  };

  //oldal komponenseinek megjelenítése
  //ha van valamilyen érték a keresőmezőben akkor a azt a komponenst jeleníti meg, máskülönben az alap felületet
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
  } else if (query.length > 1) {
    return (
      <>
        <Search searchBreeds={searchBreeds} />
        <SearchContainer filteredResults={filteredResults} breedId={breedId} />
      </>
    );
  } else {
    return (
      <>
        <Search searchBreeds={searchBreeds} />
        <BreedsContainer getRequestBreeds={fetchedBreeds} sendData={sendData} />
        <Pagination setPageCount={setPageCount} pagecount={pagecount} />
      </>
    );
  }
}

/*
 */
