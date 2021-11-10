// import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import axios from 'axios';
require('dotenv').config();


function App() {

  useEffect(() => {

    axios.get(`http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=${process.env.REACT_APP_OPEN_WEATHER_KEY}`)
    .then(response => {
      console.log(response);
    });

  }, []);




  return (
    <div className="App">
      Hello World!
    </div>
  );
}

export default App;
