import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Searchbar from '../components/Searchbar';
import ImageGallery from '../components/ImageGallery';
import Button from '../components/Button';
import Loader from '../components/Loader';
import Modal from '../components/Modal';

const App = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState('');

  useEffect(() => {
    if (!query) return;

    const fetchImages = () => {
      const apiKey = '40939556-45ae640df6958a2bad92a04f4';
      const url = `https://pixabay.com/api/?q=${query}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`;

      setLoading(true);

      axios
        .get(url)
        .then(response => {
          const imagesFromApi = response.data.hits;
          setImages(prevImages =>
            page > 1 ? [...prevImages, ...imagesFromApi] : imagesFromApi
          );
        })
        .catch(error => console.error('Error al obtener las imágenes:', error))
        .finally(() => setLoading(false));
    };

    fetchImages();
  }, [query, page]);

  const handleSearchSubmit = newQuery => {
    if (newQuery !== query) {
      setQuery(newQuery);
      setPage(1);
      setImages([]);
    } else {
      console.log('Same search!');
    }
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleImageClick = imageURL => {
    setLargeImageURL(imageURL);
    setShowModal(true);
  };

  return (
    <div>
      <Searchbar onSubmit={handleSearchSubmit} />
      <ImageGallery images={images} onImageClick={handleImageClick} />
      {loading && <Loader />}
      {images.length > 0 && !loading && <Button onClick={handleLoadMore} />}
      {showModal && (
        <Modal largeImageURL={largeImageURL} onClose={toggleModal} />
      )}
    </div>
  );
};

export default App;
