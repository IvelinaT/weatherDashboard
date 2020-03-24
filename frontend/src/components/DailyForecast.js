import React from 'react'

const DailyForecast = ({ dailyForecast }) => (
  <div className="card mb-4 mb-lg-0" style={{ display: 'block' }}>
    <h5 class="card-header">{dailyForecast.dt_txt}</h5>
    <div className="card-body p-4">
      <div className="card-title">{dailyForecast.weather[0].main} <small class="text-muted">({dailyForecast.weather[0].description})<span>&deg;C</span></small></div>
      <div className="card-text">Current temperature: {dailyForecast.main.temp}<span>&deg;C</span>, feels like {dailyForecast.main.feels_like}<span>&deg;C</span></div>
      <div className="card-text">Min Temp: {dailyForecast.main.temp_min}<span>&deg;C</span></div>
      <div className="card-text">Max Temp: {dailyForecast.main.temp_max}<span>&deg;C</span></div>
      <div className="card-text">Humidity: {dailyForecast.main.humidity}</div>
    </div>
  </div>
)
export default DailyForecast
