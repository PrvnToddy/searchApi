import "./ImageList.css";
import React from "react";
import ImageCard from "./imageCard";

const SearchList = props => {
  console.log(props.images);
  const image = props.images.map(image => {
    return <ImageCard key={image.id} image={image} />;
  });
  return <div className="image-list">{image}</div>;
};

export default SearchList;
