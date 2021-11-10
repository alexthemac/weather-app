// import React from 'react';
import { dateAndTimeFromdt } from '../helpers';
import './Forecast.css';

function Forecast({ forecastDataArray, dateAndTimeFromdt, kelvinToCelsius }) {

  const forecastArray = forecastDataArray.map((time) => {
    
    const dateAndTime = dateAndTimeFromdt(time.dt);
    const temp = kelvinToCelsius(time.main.temp) + " °C";
    const minTemp = kelvinToCelsius(time.main.temp_min) + " °C";
    const maxTemp = kelvinToCelsius(time.main.temp_max) + " °C";
    const windSpeed = time.wind.speed + " m/sec";
    const description = time.weather[0].description;

    return  <tr>
              <td>{dateAndTime}</td>
              <td>{temp}</td>
              <td>{minTemp}</td>
              <td>{maxTemp}</td>
              <td>{windSpeed}</td>
              <td>{description}</td>
            </tr>
  })


  const tableHeaderStringArray = ["Date", "Temp.", "Min Temp.", "Max Temp.", "Wind", "Description"];

  const tableHeaderArray = tableHeaderStringArray.map((header) => {
    return <th>{header}</th>
  })

  return (
    <table>
      <tbody className="Forecast">
        <tr>{tableHeaderArray}</tr>
        {forecastArray}
      </tbody>
    </table>
  );
}

export default Forecast;