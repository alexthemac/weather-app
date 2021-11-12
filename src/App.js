// import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Weather from './components/Weather';
import Forecast from './components/Forecast';
import ForecastButton from './components/ForecastButton';
import CityDropDown from './components/CityDropDown';
import Header from './components/Header';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
const { dateAndTimeFromdt, cityIdFromCityName, kelvinToCelsius } = require('./helpers');
require('dotenv').config();


function App() {

  const [cityName, setCityName] = useState(""); 
  const [cityId, setCityId] = useState(null);
  const [weatherDataObj, setWeatherDataObj] = useState({});
  const [forecastShow, setForecastShow] = useState(false); 
  const [forecastDataArray, setForecastDataArray] = useState({});

  console.log("RUN AGAIN");
  // console.log("WEATHER OBJ!:", weatherDataObj);
  console.log("Forecast OBJ!:", forecastDataArray);


  //Set the cityId based on whichever city is selected in CityDropDown component
  useEffect(() => {

    console.log("setCityId useEffect RAN again")
    setCityId(cityIdFromCityName(cityName))
  }, [cityName])

  //Set the weatherDataObj based on whichever city is CityDropDown component
  useEffect(() => {

    console.log("axios.get useEffect RAN again");

    if (cityId) {

      axios.get(`http://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${process.env.REACT_APP_OPEN_WEATHER_KEY}`)
      .then(response => {
        setWeatherDataObj(response.data);
      });

      axios.get(`http://api.openweathermap.org/data/2.5/forecast?id=${cityId}&appid=${process.env.REACT_APP_OPEN_WEATHER_KEY}`)
      .then(response => {
        setForecastDataArray(response.data.list);
      });

    } else {
      setWeatherDataObj({});
      setForecastDataArray([]);
    }

  }, [cityId]);

  return (
    <div className="App">
      <Header/>
      <CityDropDown cityName={cityName} setCityName={setCityName}/>
      { Object.keys(weatherDataObj).length > 0 && <Weather weatherDataObj={weatherDataObj} kelvinToCelsius={kelvinToCelsius} /> }      
      { Object.keys(weatherDataObj).length > 0 && <ForecastButton forecastShow={forecastShow} setForecastShow={setForecastShow} /> }
      { forecastShow === true && cityName !== "" && <Forecast forecastDataArray={forecastDataArray} dateAndTimeFromdt={dateAndTimeFromdt} kelvinToCelsius={kelvinToCelsius} /> }
      <Footer/>
    </div>
  );
}

export default App;
