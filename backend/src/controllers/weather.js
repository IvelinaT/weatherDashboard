const weather = module.exports = {}
const axios = require('axios')
const config = require('../../config/config.js')
const { weatherApi: { host, version, apiKey } } = config

weather.getForecast = async () => {
  try {
    // http://api.openweathermap.org/data/2.5/forecast?q=London&mode=json&units=metric&cnt=7&APPID=6760c671ea648820075ff935c580c8d8
    // http://${host}/data/${version}/forecast?q=Sofia&units=metric&APPID=${apiKey}&mode=json&units=metric&cnt=7
    const url = `http://${host}/data/${version}/forecast?q=Sofia&mode=json&units=metric&cnt=7&APPID=${apiKey}`
    const weatherInstance = await axios.get(url)
    return weatherInstance.data
  } catch (error) {
    console.log(error, 'Failed to get weather')
    throw error
  }
}
