// import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Weather from './components/Weather';
import Forecast from './components/Forecast';
require('dotenv').config();
const {dateAndTimeFromdt} = require('./helpers');



function App() {


  const [cityName, setCityName] = useState(""); 
  const [cityId, setCityId] = useState(null);

  // console.log(dateAndTimeFromdt(1636511728));

  const cities = [
    {
      id: 6167865,
      name: "Toronto",
      country: "CA"
    },
    {
      id: 6094817,
      name: "Ottawa",
      country: "CA"
    },
    {
      id: 1850147,
      name: "Tokyo",
      country: "JP"
    }
  ];

  //Finds the weatherapp id for a city name
  const cityIdFromCityName = (name) => {

    let cityId = null

    cities.forEach((city) => {
      if (city.name === name) {
        cityId = city.id;
      } 
    });

    return cityId;
  }

  // console.log(cityIdFromCityName("Toronto"));

  useEffect(() => {
    setCityId(cityIdFromCityName(cityName))
  }, [cityName])



  // useEffect(() => {

  //   axios.get(`http://api.openweathermap.org/data/2.5/weather?id=${cities[1].id}&appid=${process.env.REACT_APP_OPEN_WEATHER_KEY}`)
  //   .then(response => {
  //     console.log("Weather:", response);
  //   });

  //   axios.get(`http://api.openweathermap.org/data/2.5/forecast?id=${cities[1].id}&appid=${process.env.REACT_APP_OPEN_WEATHER_KEY}`)
  //   .then(response => {
  //     console.log("FORECAST:", response);
  //   });

  // }, []);




  return (
    <div className="App">
      <div>{cityName}</div>
      <div>{cityId}</div>
      <Weather cityName={cityName} setCityName={setCityName}/>
      <Forecast/>
    </div>
  );
}

export default App;
