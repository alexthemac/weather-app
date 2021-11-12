// import React from 'react';
import './ForecastButton.css';
import Button from 'react-bootstrap/Button'


function ForecastButton({forecastShow, setForecastShow}) {
  return (
    <button onClick={() => forecastShow === false ? setForecastShow(true) : setForecastShow(false)} className="forecast-button">
      { forecastShow === false ? "SEE FORECAST" : "CLOSE" }  
    </button>
  );
}

export default ForecastButton;