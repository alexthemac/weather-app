// import React from 'react';
import { dateAndTimeFromdt } from '../helpers';
import './Forecast.css';

function Forecast({ forecastDataArray, dateAndTimeFromdt, kelvinToCelsius }) {

  const forecastArrayDivs = forecastDataArray.map((time) => {
    
    const dateAndTime = dateAndTimeFromdt(time.dt);
    const temp = kelvinToCelsius(time.main.temp) + " °C";
    const minTemp = kelvinToCelsius(time.main.temp_min) + " °C";
    const maxTemp = kelvinToCelsius(time.main.temp_max) + " °C";
    const windSpeed = time.wind.speed + " m/sec";
    const description = time.weather[0].description;

    return <div>
              {dateAndTime} {temp} {minTemp} {maxTemp} {windSpeed} {description} 
          </div>
  })

  return (
    <div className="Forecast">
      {forecastArrayDivs}
    </div>
  );
}

export default Forecast;