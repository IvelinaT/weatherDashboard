import React, { Component } from 'react'
import DailyForecast from './DailyForecast'

const ForecastList = ({ weatherForecastList }) => (
  <div className="row">
    <div className="col">
      <div className="card-deck home-page-card-deck text-center" style={{ display: 'block' }}>
        {weatherForecastList.length && weatherForecastList.map((item, index) => (
          <DailyForecast key={index} dailyForecast={item}/>
        ))}
      </div>
    </div>
  </div>
)

export default ForecastList
