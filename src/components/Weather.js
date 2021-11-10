// import React from 'react';
import './Weather.css';

function Weather({cityName, setCityName}) {

  return (
    <div className="Weather">

      {/* <div>{cityName}</div> */}

      <select name="cities" id="city-select" onChange={event => setCityName(event.target.value)}>
          <option value="">City</option>
          <option value="Ottawa">Ottawa</option>
          <option value="Toronto">Toronto</option>
          <option value="Tokyo">Tokyo</option>
      </select>
      <label for="city-select">Please select city to see the forecast: </label>
    </div>
  );
}

export default Weather;
