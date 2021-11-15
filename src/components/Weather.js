import './Weather.css';

function Weather({weatherDataObj, kelvinToCelsius}) {

  let weatherMainDescription = Object.keys(weatherDataObj).length ? weatherDataObj.weather[0].main : "";
  let weatherDetailedDescription = Object.keys(weatherDataObj).length ? weatherDataObj.weather[0].description : "";
  let weatherWind = Object.keys(weatherDataObj).length ? Math.round(weatherDataObj.wind.speed * 10) / 10  : null;

  //Temperatures provided by openweather api are in kelvin, need to convert to celsius
  // let weatherFeelsLikeCelsius = Object.keys(weatherDataObj).length ? kelvinToCelsius(weatherDataObj.main.feels_like) : null;
  let weatherTemperatureCelsius = Object.keys(weatherDataObj).length ? kelvinToCelsius(weatherDataObj.main.temp) : null;
  let weatherIcon = Object.keys(weatherDataObj).length ? weatherDataObj.weather[0].icon : null;
  let weatherIconLocation = `/images/${weatherIcon}@2x.png`

  return (
    <div className="weather">
      <img src={weatherIconLocation} className="weather-icon" alt="weather-icon" width="200px" height="200px"></img>
      <div className="weather-details">
        <div>{weatherMainDescription}</div>
        <div>{weatherDetailedDescription}</div>
        <div>{`${weatherTemperatureCelsius} °C`}</div>
        <div>{`Wind: ${weatherWind} m/sec`}</div> 
      </div>
    </div>
  );
}

export default Weather;
