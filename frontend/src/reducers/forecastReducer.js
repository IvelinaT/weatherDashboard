import { FORECAST_SUCCESS, FORECAST_ERROR } from '../types'

const initialState = {
  forecast: {}
}

export default function (state = initialState, action) {
  switch (action.type) {
    case FORECAST_SUCCESS:
      return {
        ...state,
        forecast: action.payload
      }
    case FORECAST_ERROR:
      return {
        ...state,
        error: true,
        loading: false
      }
    default:
      return state
  }
}
