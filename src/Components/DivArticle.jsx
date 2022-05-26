import React from "react";
const DivArticle = () => {
  return (
    <article className="article">
      <div className="divImg">
        <img src="" className="image" id="imageId" />
      </div>

      <h2 className="title" id="titleId"></h2>

      <div className="info">
        <h2 className="service_version" id="service_versionId"></h2>
        <p className="explanation"></p>
      </div>
    </article>
  );
};

export default DivArticle;
