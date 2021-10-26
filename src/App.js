import React, { useState, useEffect } from "react";

import SearchBar from "./Component/Searchbar/Searchbar";
import ImageGallery from "./Component/ImageGallery/ImageGallery";
import Modal from "./Component/Modal/Modal";
import Button from "./Component/Button/Button";
import Spinner from "./Component/Loader/Loader";

import "./App.css";
import fetchImages from "./services/pixabay-api";

export default function App() {
  const [modalContent, setModalContent] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const [visibleImages, setVisibleImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [openModal, setIsOpenModal] = useState(false);

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery, page]);
  useEffect(() => {
    handleScroll();
  });

  const toggleModal = () => {
    setIsOpenModal(!openModal);
  };
  // eslint-disable-next-line
  const toggleLoading = () => {
    setIsLoading(!isLoading);
  };

  const hadleChangeQuery = (query) => {
    setSearchQuery(query);
    setPage(1);
    setVisibleImages([]);
  };

  const getData = () => {
    if (searchQuery !== "" || page !== 1) {
      fetchImages(searchQuery, page)
        .then(({ hits }) => setVisibleImages([...visibleImages, ...hits]))
        .then(handleScroll)
        .catch((error) => console.log(error.message));
    }
  };

  const handleNextPage = () => {
    setPage((prevState) => prevState + 1);
  };

  const handleScroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };
  const modalContentSet = (itemId) => {
    // const { visibleImages } = this.state;
    const element = visibleImages.find(({ id }) => id === itemId);
    console.log(element);
    setModalContent(element.largeImageURL);
  };

  const isNotLastPage = visibleImages.length / page === 12;
  const btnEnable = visibleImages.length > 0 && !isLoading && isNotLastPage;

  return (
    <div className="App">
      <SearchBar onSubmit={hadleChangeQuery} />
      {visibleImages.length === 0 ? (
        <h2>Enter your request</h2>
      ) : (
        <>
          <ImageGallery
            images={visibleImages}
            onClick={toggleModal}
            onItemClick={modalContentSet}
          />

          {openModal && (
            <Modal content={modalContent} onBackdrop={toggleModal} />
          )}
          {isLoading && <Spinner />}

          {btnEnable && <Button name="Load more" onPress={handleNextPage} />}
        </>
      )}
    </div>
  );
}
