//Functions used for netlify to hide api key on build (https://www.youtube.com/watch?v=m2Dr4L_Ab14)

// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const axios = require('axios');

const handler = async (event) => {

  const { cityId } = event.queryStringParameters;
  const open_weather_key = process.env.REACT_APP_OPEN_WEATHER_KEY;

  try {

    const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${open_weather_key}`)
    return {
      statusCode: 200,
      body: JSON.stringify(data)
    }
  } catch (error) {
    const { status, statusText, headers, data } = error.response
    return {
      statusCode: status,
      body: JSON.stringify({status, statusText, headers, data})
    }
  }


}

module.exports = { handler }
