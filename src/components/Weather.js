// import React from 'react';
import './Weather.css';

function Weather({weatherDataObj, kelvinToCelsius}) {

  let weatherMainDescription = Object.keys(weatherDataObj).length ? weatherDataObj.weather[0].main : "";
  let weatherDetailedDescription = Object.keys(weatherDataObj).length ? weatherDataObj.weather[0].description : "";
  let weatherCityName = Object.keys(weatherDataObj).length ? weatherDataObj.name : "";
  let weatherWind = Object.keys(weatherDataObj).length ? Math.round(weatherDataObj.wind.speed * 10) / 10  : null;
  //Temperatures provided by openweather api are in kelvin, need to convert to celsius
  // let weatherFeelsLikeCelsius = Object.keys(weatherDataObj).length ? kelvinToCelsius(weatherDataObj.main.feels_like) : null;
  let weatherTemperatureCelsius = Object.keys(weatherDataObj).length ? kelvinToCelsius(weatherDataObj.main.temp) : null;

  return (
    <div className="Weather">
      {/* <div>{weatherCityName}</div> */}
      <div>{weatherMainDescription}</div>
      <div>{weatherDetailedDescription}</div>
      <div>{`${weatherTemperatureCelsius} °C`}</div>
      {/* <div>{`Feels like: ${weatherFeelsLikeCelsius} °C`}</div> */}
      <div>{`Wind: ${weatherWind} m/sec`}</div> 
    </div>
  );
}

export default Weather;
