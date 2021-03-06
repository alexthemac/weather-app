import './ForecastButton.css';

function ForecastButton({ forecastShow, setForecastShow }) {
  return (
    <button onClick={() => forecastShow === false ? setForecastShow(true) : setForecastShow(false)} className="forecast-button">
      { forecastShow === false ? "SEE FORECAST" : "CLOSE FORECAST" }  
    </button>
  );
}

export default ForecastButton;