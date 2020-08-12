import React, { Component } from "react";
import Navbar from "../Navbar";
import ResultsList from "../ResultsList";
import API from "../../utils/API";
import "./style.css";

function SearchResults(props) {

  const businesses = props.results;
  console.log('titties');
  console.log(businesses);

  return(
    <div>
      <h4>Businesses that match your search:</h4>
      {businesses.map( business => {
        return (
          <div>
          <h6>{business.business_name}</h6>
          <h6>{business.category}</h6>
          <h6>{business.street}, {business.city}</h6>

          </div>

        )
      })}

    </div>
  )
}


export default SearchResults;
