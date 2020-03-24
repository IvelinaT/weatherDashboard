const weather = module.exports = {}
const axios = require('axios')
const config = require('../../config/config.js')
const { weatherApi: { host, version, apiKey } } = config

weather.getForecast = async () => {
  try {
    const url = `http://${host}/data/${version}/forecast?q=Sofia&mode=json&units=metric&cnt=7&APPID=${apiKey}`
    const weatherInstance = await axios.get(url)
    return weatherInstance.data
  } catch (error) {
    console.log(error, 'Failed to get weather')
    throw error
  }
}
