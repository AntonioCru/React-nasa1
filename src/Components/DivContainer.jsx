import React, { useState } from "react";
import Header1 from "./Header1";
import DivArticle from "./DivArticle";
import useFetch from "../hooks/useFetch";

const DivContainer = (data) => {
  const [nasaUrl, setNasaUrl] = useState(
    "https://api.nasa.gov/planetary/apod?api_key=" +
      process.env.REACT_APP_PRIVATE_KEY
  );

  

  return (
    <>
      <div background="" className="body" id="bodyId">{data.url}
        <div className="container">
          <Header1
            functionChange={(newDate) => {
              setNasaUrl(
                "https://api.nasa.gov/planetary/apod?api_key=" +
                  process.env.REACT_APP_PRIVATE_KEY +
                  "&date=" +
                  newDate
              );
            }}
          />

          <DivArticle data={useFetch(nasaUrl)} />
        </div>
      </div>
    </>
  );
};

export default DivContainer;
