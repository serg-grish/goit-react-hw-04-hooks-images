import PropTypes from "prop-types";
import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem";
import React, { Component } from "react";
import s from "./ImageGallery.module.css";

class ImageGallery extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
    onItemClick: PropTypes.func.isRequired,
    images: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
      })
    ).isRequired,
  };

  handleOpenModal = (e) => {
    if (e.target !== e.currentTarget) {
      this.props.onClick();
    }
  };

  render() {
    const { images, onItemClick } = this.props;
    return (
      <ul className={s.ImageGallery} onClick={this.handleOpenModal}>
        {images &&
          images.map((image) => (
            <li key={image.id} className={s.ImageGalleryItem}>
              <ImageGalleryItem {...image} onItemClick={onItemClick} />
            </li>
          ))}
      </ul>
    );
  }
}

export default ImageGallery;
