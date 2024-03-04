import React from 'react';
import './styles/ImageGalleryItem-module.css';

const ImageGalleryItem = ({ image, onImageClick }) => {
  return (
    <li
      className="gallery-item"
      onClick={() => onImageClick(image.largeImageURL)}
    >
      <img className="gallery-item-img" src={image.webformatURL} alt="" />
    </li>
  );
};

export default ImageGalleryItem;
