import React, { useEffect } from "react";
import PropTypes from "prop-types";

import s from "./Modal.module.css";

export default function Modal({ content, onBackdrop }) {
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  const handleKeyDown = (e) => {
    if (e.code === "Escape") {
      onBackdrop();
    }
  };

  const handleBackdropClick = (event) => {
    if (event.currentTarget === event.target) {
      onBackdrop();
    }
  };

  return (
    <div className={s.Overlay} onClick={handleBackdropClick}>
      <div className={s.Modal}>
        <img src={content} alt="" />
      </div>
    </div>
  );
}
Modal.propTypes = {
  onBackdrop: PropTypes.func.isRequired,
  content: PropTypes.string.isRequired,
};
