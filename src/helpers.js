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

module.exports = { dateAndTimeFromdt };