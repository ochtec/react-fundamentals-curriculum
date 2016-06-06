import React from 'react';
import * as helpers from '../utils/weatherHelper.js';
import { Link } from 'react-router';

var styles = {
  dayContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    margin: 35
  },
  subheader: {
    fontSize: 30,
    color: '#333',
    fontWeight: 100
  }
}

function Forecast(props) {
  console.log(props)
  return (
  <div style={styles.dayContainer} onClick={props.handleClick.bind(null, props.day)}>
    <img src={'/app/images/weather-icons/' + props.day.weather[0].icon + '.svg'} />
    <h2 style={styles.subheader}>{helpers.getDayOfWeek(props.day.dt)} </h2>
    {helpers.convertKelvin(props.day.temp.day)}°
  </div>
  )
}

module.exports = Forecast;
