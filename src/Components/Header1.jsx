import React from "react";
import "flatpickr/dist/themes/material_green.css";
import Flatpickr from "react-flatpickr";
// import { Component } from "react";

const Header1 = ({functionChange}) => {
  const handleOnChange = (dateStr) => {
    functionChange(dateStr);
  };
  return (
    <Flatpickr
      className="calendario button"
      id="calendarioId"
    //   value={date}
      onChange={(selectedDate, dateStr, instance) => {
        handleOnChange(dateStr);
      }}
    ></Flatpickr>
  );
};

export default Header1;

