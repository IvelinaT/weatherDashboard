import axios from 'axios'
import { FORECAST_SUCCESS, FORECAST_ERROR } from '../types'
import config from '../config/config'

export const getForecast = () => dispatch => {
  const instance = axios.create({
    baseURL: config.BACKEND_HOST
  })

  instance.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.jwtToken
  instance.defaults.headers.common['Content-Type'] = 'application/json'
  

  instance.get('/api/forecast')
    .then(res => {
      const { forecast } = res.data
      dispatch(getWeatherForecast(forecast))
    })
    .catch(err => {
      dispatch({
        type: FORECAST_ERROR,
        payload: err
      })
    })
}

export const getWeatherForecast = forecast => {
  return {
    type: FORECAST_SUCCESS,
    payload: forecast
  }
}
