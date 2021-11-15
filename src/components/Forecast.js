import './Forecast.css';
import { useState } from 'react';
import DayButtons from './DayButtons';
import Table from 'react-bootstrap/Table'



function Forecast({ forecastDataArray, dateAndTimeFromdt, kelvinToCelsius }) {

  console.log("FORECASTDATAARRAY:", forecastDataArray);
  
  
  const daysArray = [];

  //Create table rows from forecast data
  const forecastArray = forecastDataArray.map((time) => {
    
    const dateAndTime = dateAndTimeFromdt(time.dt);
    const date = dateAndTime.slice(0, 6);

    //Populate days array with the days in the forecast data to create selector buttons
    if (!daysArray.includes(date)) {
      daysArray.push(date);
    }

  
    const forecastIcon = time.weather[0].icon;
    const forecastIconLocation = `/images/${forecastIcon}@2x.png`
    const temp = kelvinToCelsius(time.main.temp) + " °C";
    const minTemp = kelvinToCelsius(time.main.temp_min) + " °C";
    const maxTemp = kelvinToCelsius(time.main.temp_max) + " °C";
    const windSpeed = Math.round(time.wind.speed * 10) / 10  + " m/sec";
    const description = time.weather[0].description;

    return  <tr key={dateAndTime}>
              <td className="table-row"><img src={forecastIconLocation} alt="forecastIcon"></img></td>
              <td className="table-row">{dateAndTime}</td>
              <td className="table-row">{temp}</td>
              <td className="table-row">{minTemp}</td>
              <td className="table-row">{maxTemp}</td>
              <td className="table-row">{windSpeed}</td>
              <td className="table-row">{description}</td>
            </tr>
  });

  //Used to create selector buttons and display forecast for selected day
  const [day, setDay] = useState(daysArray[0]);

  //Filter the table based on which day is selected by the DayButtons
  const forecastArrayFiltered = forecastArray.filter((time) => {
    if (time.props.children[1].props.children.slice(0,6) === day) {
      return time;
    };
    return false;
  });

  //Create table headers
  const tableHeaderStringArray = ["", "Date", "Temp.", "Min Temp.", "Max Temp.", "Wind", "Description"];
  const tableHeaderArray = tableHeaderStringArray.map((header) => {
    return <th className="text-center" key={header}>{header}</th>
  })

  return (
    <div className="forecast-container">
      <DayButtons daysArray={daysArray} setDay={setDay}/>
      <Table className="forecast-table" striped bordered>
        <thead>
          <tr>{tableHeaderArray}</tr>
        </thead>
        <tbody>
          {forecastArrayFiltered}
        </tbody>
      </Table>
    </div>
  );
}

export default Forecast;