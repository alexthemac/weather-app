//Returns the date and time from dt
const dateAndTimeFromdt = (dt) => {

  //dt is seconds since Jan 01, 1970.
  //Multiply dt by 1000 to convert to milliseconds.
  const dateObject = new Date(dt*1000);
  
  //format: (Ex Nov 9, 10 PM)
  const dateAsString = dateObject.toLocaleString("en-US", { month: 'short', day: 'numeric', hour: "numeric" });

  //Can also return as array of [date, time]
  // const date = dateAsString.slice(0, 10);
  // const time = dateAsString.slice(12);

  return dateAsString;

}

//Given list of cities to supply weather data for
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

const kelvinToCelsius = kelvin => Math.round(kelvin - 273.15);


module.exports = { dateAndTimeFromdt, cityIdFromCityName, kelvinToCelsius, cities };