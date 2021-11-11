import './Forecast.css';
import { useState } from 'react';
import DayButtons from './DayButtons';


function Forecast({ forecastDataArray, dateAndTimeFromdt, kelvinToCelsius }) {
  
  
  const daysArray = [];

  //Create table rows from forecast data
  const forecastArray = forecastDataArray.map((time) => {
    
    const dateAndTime = dateAndTimeFromdt(time.dt);
    const date = dateAndTime.slice(0, 6);

    //Populate days array with the days in the forecast data to create selector buttons
    if (!daysArray.includes(date)) {
      daysArray.push(date);
    }

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
  });

  //Used to create selector buttons and display forecast for selected day
  const [day, setDay] = useState(daysArray[0]);

  //Filter the table based on which day is selected by the DayButtons
  const forecastArrayFiltered = forecastArray.filter((time) => {
    if (time.props.children[0].props.children.slice(0,6) === day) {
      return time;
    };
  });

  //Create table headers
  const tableHeaderStringArray = ["Date", "Temp.", "Min Temp.", "Max Temp.", "Wind", "Description"];
  const tableHeaderArray = tableHeaderStringArray.map((header) => {
    return <th>{header}</th>
  })

  return (
    <div>
      {`current day: ${day}`}
      <table>
        <tbody className="Forecast">
          <tr>{tableHeaderArray}</tr>
          {forecastArrayFiltered}
        </tbody>
      </table>
      <DayButtons daysArray={daysArray} setDay={setDay}/>
    </div>
  );
}

export default Forecast;