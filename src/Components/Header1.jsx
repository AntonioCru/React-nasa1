import React from "react";
import "flatpickr/dist/themes/material_green.css";
import Flatpickr from "react-flatpickr";
import { Component } from "react";

window.onload = function () {
  let date = new Date();

  let mes = date.getMonth() + 1;
  let dia = date.getDate();
  let año = date.getFullYear();

  let dateInit = año + "-" + mes + "-" + dia;

  callData(dateInit);
};

function callData(dataString) {
  var url = "https://api.nasa.gov/planetary/apod";
  var key = "?api_key=gJ0jcjqcaEkO0uNhNGyn64S8d6XaajGiub0M4bmf";
  var dateUrl = "&date=" + dataString;
  var urlWithKey = url + key + dateUrl;

  fetch(urlWithKey)
    .then((response) => response.json())
    .then((data) => datos(data));

  const calDate = document.querySelector(".impData");
  calDate.textContent = dataString;
}

let auxDate;
function datos({
  date,
  explanation,
  hdurl,
  media_type,
  title,
  service_version,
  url,
}) {
  auxDate = date;

  const title1 = document.getElementById("titleId");
  title1.innerHTML = title;

  const description = document.querySelector(".explanation");
  description.innerHTML = explanation;

  const img = document.getElementById("imageId");
  const img2 = document.getElementById("bodyId");

  img.src = url;
  img2.background = url;

  const version = document.getElementById("service_versionId");
  version.innerHTML = "Version " + service_version;

  const dateF = document.getElementById("dateId");
  dateF.innerHTML = "Date " + date;
}

class Header1 extends Component {
  state = {
    fecha: new Date(),
  };

  onChange = (selectedDates, dateStr, instance) => {
    callData(dateStr);
    console.log("++onChange++" + dateStr);
  };

  render() {
    return (
      <header>
        <Flatpickr
          className="calendario button"
          id="calendarioId"
          onChange={this.onChange}
        ></Flatpickr>
        <div className="impData"></div>
      </header>
    );
  }
}
export default Header1;
