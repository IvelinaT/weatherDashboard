import React, { Component } from 'react'
import DailyForecast from './DailyForecast'

const ForecastList = ({ weatherForecastList }) => (
  <div class="row">
    <div class="col">
      <div class="card-deck home-page-card-deck text-center" style={{ display: 'block' }}>
        {weatherForecastList.length && weatherForecastList.map((item, index) => (
          <DailyForecast key={index} dailyForecast={item}/>
        ))}
      </div>
    </div>
  </div>
)

export default ForecastList
