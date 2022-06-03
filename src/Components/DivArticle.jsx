import React, { Fragment } from "react";
const DivArticle = ({ data }) => {
    // console.log(data);
  const date = data.date;
  const img = data.hdurl;
  const explanation = data.explanation;
  const title = data.title;
  const copyright = data.copyright;

  return (
    <Fragment>
        <div class="impData">{data.date}</div>
      <div className="divDate">
        <h2 className="date" id="dateId">
          {date}
        </h2>
      </div>

      <article className="article">
        <div className="divImg">
          <img src={img} className="image" id="imageId" />
        </div>

        <h2 className="title" id="titleId">{title}</h2>

        <div className="info">
          <h2 className="service_version" id="service_versionId">{copyright}</h2>
          <p className="explanation">{explanation}</p>
        </div>
      </article>
    </Fragment>
  );
};

export default DivArticle;
