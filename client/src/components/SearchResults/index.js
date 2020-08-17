import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Navbar from "../Navbar";
import ResultsList from "../ResultsList";
import API from "../../utils/API";
import "./style.css";

import ImgPlaceholder from '../ImgPlaceholder'
import Button from '../../components/Button'

function SearchResults(props) {

  const businesses = props.results;
  console.log(businesses);


  return(
    <div className='grid-x text-center grid-margin-y'>
      {businesses.map( business => {
        return (
          <div key={business.id} className="cell small-12 medium-6 grid-x" style={{ 'width': '50%' }}>

            <div className="cell small-12 medium-6">
              <h4><strong>{business.business_name}</strong></h4>
              <ImgPlaceholder />
            </div>


            <div className="cell small-12 medium-6">
              <h6>{business.category}</h6>
              <h6>{business.street}, {business.city}</h6>
              <Link to={"/business/" + business.id}><Button button="button" name="View Business" /></Link>

            </div>


          </div>

        )
      })}

    </div>
  )
}


export default SearchResults;
