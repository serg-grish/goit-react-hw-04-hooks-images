import React from "react";
import PropTypes from "prop-types";

import s from "./ImageGalleryItem.module.css";

export default function ImageGalleryItem({ id, webformatURL, onItemClick }) {
  const modalContent = (id) => {
    onItemClick(id);
    console.log(id);
  };

  return (
    <img
      src={webformatURL}
      alt=""
      className={s.ImageGalleryItemImage}
      onClick={() => modalContent(id)}
    />
  );
}
ImageGalleryItem.propTypes = {
  onItemClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  webformatURL: PropTypes.string.isRequired,
};
