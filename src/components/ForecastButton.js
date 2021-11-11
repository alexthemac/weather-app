// import React from 'react';
import './ForecastButton.css';
import Button from 'react-bootstrap/Button'


function ForecastButton({forecastShow, setForecastShow}) {
  return (
    <Button onClick={() => forecastShow === false ? setForecastShow(true) : setForecastShow(false)} variant={forecastShow === false ? "success" : "danger"}>
      { forecastShow === false ? "SEE FORECAST" : "CLOSE" }  
    </Button>
  );
}

export default ForecastButton;