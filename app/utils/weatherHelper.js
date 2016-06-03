var axios = require('axios');
const APIKEY = '9e1e091bb7f8a96ea12aee5ddf41fa6d';

function getWeatherSummary(cityState) {
  return axios.get('http://api.openweathermap.org/data/2.5/weather?q=' + cityState + '&type=accurate&APPID=' + APIKEY);
}

function getWeatherDetail(cityState, day) {
  return axios.get('http://api.openweathermap.org/data/2.5/forecast/daily?q=' + cityState + 'CITY-NAME&type=accurate&APPID=' + APIKEY + '&cnt=5');
}

var helpers = {
  getWeather(cityState) {
    return getWeatherSummary(cityState)
      .then(function (info) {
        return info.data
      })
    .catch(function (err) {console.warn('Error in getWeather: ', err)})
  },
  getDetail(cityState, day) {
    return getWeatherDetail(cityState, day)
      .then(function (info) {
        console.log(info.data)
      })
      .catch(function (err) {console.warn('Error in getDetail: ', err)})
  }
}

module.exports = helpers;
