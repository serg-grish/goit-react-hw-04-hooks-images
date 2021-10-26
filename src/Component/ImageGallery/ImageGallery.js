import PropTypes from "prop-types";
import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem";
import s from "./ImageGallery.module.css";
import React from "react";

export default function ImageGallery({ images, onItemClick, onClick }) {
  const handleOpenModal = (e) => {
    if (e.target !== e.currentTarget) {
      onClick();
    }
  };
  return (
    <ul className={s.ImageGallery} onClick={handleOpenModal}>
      {images &&
        images.map((image) => (
          <li key={image.id} className={s.ImageGalleryItem}>
            <ImageGalleryItem
              {...image}
              onItemClick={onItemClick}
              key={images.id}
            />
          </li>
        ))}
    </ul>
  );
}
ImageGallery.propTypes = {
  onClick: PropTypes.func.isRequired,
  onItemClick: PropTypes.func.isRequired,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
