import React, { useState, useEffect } from "react";
import "./style.css";

import SearchResults from '../SearchResults'

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm() {

  const [searchState, setSearchState] = useState([]);

  useEffect( () => {

    const businesses = fetch('/api/business', {
      headers: {
       'Content-Type': 'application/json'
     }
    })
      .then(response => response.json())
      .then(data => data);

    Promise.all([ searchState ])
      .then(payload => {
         setSearchState(payload[0]);
       });


  }, []);


  return (
    <div>
      <form className="search">
        <div className="form-group">

          <input name="business_name" type="input" placeholder="Business Name" id="business_name" />

          <select name="category" id="category">
            <option value="">Select Category</option>
            <option value="entertainment">Entertainment</option>
            <option value="fitness">Fitness</option>
            <option value="Resturaunt">Healt/Beauty</option>
            <option value="maintenance">Maintenance</option>
            <option value="miscellaneous">Miscellaneous</option>
          </select>

          <input name="city" className="" placeholder="City" id="city" />

          <button type="submit" className="btn btn-success"
          onClick={ () => {

            console.log('yo');

            const formData = {
              business_name: document.querySelector('#business_name').value,
              category: document.querySelector('#category').value,
              city: document.querySelector('#city').value
            }

            console.log('yo');

            fetch('/api/business', {
              formData: formData
            })
            .then( res => {
              console.log(res);
              setSearchState(res);
            });

          }} >
            Search
          </button>
        </div>
      </form>

      <SearchResults results={searchState} />
    </div>

  );
}

export default SearchForm;
