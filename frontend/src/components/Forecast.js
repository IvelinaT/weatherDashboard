import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getForecast } from '../actions/forecast'
import { withRouter } from 'react-router-dom'

class Forecast extends Component {
  componentDidMount () {
    this.props.getForecast()
  }

  render () {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                   xxxxxxxx
        </div>
      </nav>
    )
  }
}
Forecast.propTypes = {
  getForecast: PropTypes.func.isRequired,
  forecast: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  forecast: state.forecast
})

export default connect(mapStateToProps, { getForecast })(withRouter(Forecast))
