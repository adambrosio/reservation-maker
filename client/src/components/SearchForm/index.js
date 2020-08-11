import React from "react";
import { useHistory } from 'react-router-dom';
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm() {

  const history = useHistory();

  return (
    <form className="search">
      <div className="form-group">

        <input name="business_name" type="input" className="" placeholder="Business Name" id="business_name" />

        <select name="category" id="category">
          <option value="">Select Category</option>
          <option value="entertainment">Entertainment</option>
          <option value="fitness">Fitness</option>
          <option value="Resturaunt">Healt/Beauty</option>
          <option value="maintenance">Maintenance</option>
          <option value="miscellaneous">Miscellaneous</option>
        <select/>

        <input name="city" className="" placeholder="City" id="city" />

        <button type="submit" onClick= className="btn btn-success">
          Search
        </button>
      </div>
    </form>
  );
}

async function handleSubmit() {
  const formData = {
    business_name: document.querySelector('#business_name').value,
    category: document.querySelector('#category').value,
    city: document.querySelector('#city').value
  }

  await fetch('/api/business', {
    formData: formData
  })
  .then( res => {
      history.push('/business', { state: res.data } );
  });

}

export default SearchForm;
