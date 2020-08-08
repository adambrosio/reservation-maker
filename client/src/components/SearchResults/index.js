import React, { Component } from "react";
import Navbar from "../Navbar";
import ResultsList from "../ResultsList";
import "./style.css";

class SearchResults extends Component {
  state = {
    search: "",
    results: []
  };

  businessSearch = query => {

  }

  handleInputChange = event => {
    // any business that matches the search input value
    const business = event.target.business;
    const value = event.target.value;
    this.setState({
      [business]: value
    });
  }

  handleFormSubmit = event => {
    event.preventDefault();

  }

  render() {
    return (
      <div>
        <div className="search-results">{this.state.search}</div>
        <Navbar
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <ResultsList results={this.state.results} />
      </div>
    );
  }
}

export default SearchResults;
