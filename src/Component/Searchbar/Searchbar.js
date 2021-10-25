import React, { Component } from "react";
import PropTypes from "prop-types";

import s from "./Searchbar.module.css";

class SearchBar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    searchQuery: "",
  };

  handleChange = (event) => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { searchQuery } = this.state;

    this.props.onSubmit(searchQuery);
    this.setState({ searchQuery: "" });
  };

  render() {
    const { searchQuery } = this.state;
    return (
      <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={s.SearchFormButton}>
            <span className={s.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={s.SearchFormInput}
            type="text"
            autoComplete="off"
            name="searchQuery"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
            value={searchQuery}
          />
        </form>
      </header>
    );
  }
}

export default SearchBar;
