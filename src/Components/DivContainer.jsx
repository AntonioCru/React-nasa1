import React, { Fragment } from "react";
import Header1 from "./Header1";
import DivArticle from "./DivArticle";

const DivContainer = () => {
  return (
    <Fragment>
      <body background="" class="body" id="bodyId">
        <div className="container">
          <Header1 />

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
