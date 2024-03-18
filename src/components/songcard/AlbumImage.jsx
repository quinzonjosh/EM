import React from "react";
import "./albumImage.css";

const AlbumImage = ({ url }) => {
  // console.log(url)

  return (
      <div className="albumImage">
        <img src={url} alt="album art" className="albumImage-art" />
      </div>
  );
};

export default AlbumImage;
