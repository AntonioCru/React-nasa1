import React, { Fragment } from "react";
import Header1 from "./Header1";
import DivArticle from "./DivArticle";
import useFetch from "../hooks/useFetch";

const DivContainer = () => {

    const functionChangeDate = (dateChange) => {
        console.log(dateChange);
        useFetch("https://api.nasa.gov/planetary/apod?api_key="+REACT_APP_APIKEY+"&date="+dateChange);
    }
//   var url = "https://api.nasa.gov/planetary/apod";
//   var key = "?api_key=gJ0jcjqcaEkO0uNhNGyn64S8d6XaajGiub0M4bmf";
//   var dateUrl = "&date=" + dataString;
//   var urlWithKey = url + key + dateUrl;
    
  return (
    <Fragment>
      <body background="" className="body" id="bodyId">
        <div className="container">
          <Header1 functionChange={functionChangeDate}/>

          <div className="divDate">
            <h2 className="date" id="dateId"></h2>
          </div>

          <DivArticle />
        </div>
      </body>
    </Fragment>
  );
};

export default DivContainer;
