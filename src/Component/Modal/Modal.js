import React, { Component } from "react";
import PropTypes from "prop-types";

import s from "./Modal.module.css";

class Modal extends Component {
  static propTypes = {
    onBackdrop: PropTypes.func.isRequired,
    content: PropTypes.string.isRequired,
  };

  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (e) => {
    if (e.code === "Escape") {
      this.props.onBackdrop();
    }
  };

  hendleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      this.props.onBackdrop();
    }
  };

  render() {
    const { content } = this.props;
    console.log(content);
    return (
      <div className={s.Overlay} onClick={this.handleBackdropClick}>
        <div className={s.Modal}>
          <img src={content} alt="" />
        </div>
      </div>
    );
  }
}

export default Modal;
