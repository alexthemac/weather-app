// import React from 'react';
import './CityDropDown.css';
import { cities } from "../helpers";

function CityDropDown({cityName, setCityName}) {

  // const citiesArray = cities.map{ }
  <option></option>

  return (
    <div className="city-drop-down">
      { cityName !== "" && <div>City</div> }
      <select name="cities" id="city-select" onChange={event => setCityName(event.target.value)}>
          <option value="">City</option>
          
          <option value="Ottawa">Ottawa</option>
          <option value="Toronto">Toronto</option>
          <option value="Tokyo">Tokyo</option>
      </select>
      { cityName === "" && <div>Please select city to see the forecast</div> }
    </div>
  );
}

export default CityDropDown;