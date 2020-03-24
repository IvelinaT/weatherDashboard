const weather = module.exports = {}
const axios = require('axios')
const config = require('../../config/config.js')
const { weatherApi: { host, version, apiKey } } = config

weather.getForecast = async () => {
  try {
    /*
    * You can search 16 day weather forecast with daily average parameters by city name
    * api.openweathermap.org/data/2.5/forecast/daily?q={city name},{state},{country code}&cnt={cnt}&appid={your api key}
    * but not with a FREE subscription.
    * Please see http://openweathermap.org/faq#error401 for more info.
    */
    const url = `http://${host}/data/${version}/forecast?q=Sofia&mode=json&units=metric&cnt=7&APPID=${apiKey}`
    const weatherInstance = await axios.get(url)
    return weatherInstance.data
  } catch (error) {
    console.log(error, 'Failed to get weather')
    throw error
  }
}
