// import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Weather from './components/Weather';
import Forecast from './components/Forecast';
require('dotenv').config();
const { dateAndTimeFromdt, cityIdFromCityName, kelvinToCelsius } = require('./helpers');



function App() {

  const [cityName, setCityName] = useState(""); 
  const [cityId, setCityId] = useState(null);
  const [weatherDataObj, setWeatherDataObj] = useState({});

  let weatherMainDescription = Object.keys(weatherDataObj).length ? weatherDataObj.weather[0].main : "";
  let weatherDetailedDescription = Object.keys(weatherDataObj).length ? weatherDataObj.weather[0].description : "";
  let weatherCityName = Object.keys(weatherDataObj).length ? weatherDataObj.name : "";
  //Need to convert to kelvin to celsius (subtract 273.15)
  let weatherFeelsLikeCelsius = Object.keys(weatherDataObj).length ? kelvinToCelsius(weatherDataObj.main.feels_like) : null;
  let weatherTemperatureCelsius = Object.keys(weatherDataObj).length ? kelvinToCelsius(weatherDataObj.main.temp) : null;

  console.log("RUN AGAIN");
  console.log(weatherDataObj);

  //Set the cityId based on whichever city is selected in drop down
  useEffect(() => {
    setCityId(cityIdFromCityName(cityName))
  }, [cityName])

  //Set the weatherDataObj based on whichever city is selected in drop down
  useEffect(() => {

    if (cityId) {
      axios.get(`http://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${process.env.REACT_APP_OPEN_WEATHER_KEY}`)
      .then(response => {
        setWeatherDataObj(response.data);
      })
    }
   
    // axios.get(`http://api.openweathermap.org/data/2.5/forecast?id=${cities[1].id}&appid=${process.env.REACT_APP_OPEN_WEATHER_KEY}`)
    // .then(response => {
    //   console.log("FORECAST:", response);
    // });

  }, [cityId]);

  return (
    <div className="App">
      <Weather cityName={cityName} setCityName={setCityName}/>
      <div>{cityName}</div>
      <div>{cityId}</div>
      <div>{weatherCityName}</div>
      <div>{weatherMainDescription}</div>
      <div>{weatherDetailedDescription}</div>
      { weatherTemperatureCelsius && <div>{`Current Temperature: ${weatherTemperatureCelsius}`}</div> }
      { weatherFeelsLikeCelsius && <div>{`Feels like: ${weatherFeelsLikeCelsius}`}</div> }
      <Forecast/>
    </div>
  );
}

export default App;
