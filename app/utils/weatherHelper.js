var axios = require('axios');
const APIKEY = '9e1e091bb7f8a96ea12aee5ddf41fa6d';

function getWeatherDetail(cityState) {
  return axios.get('http://api.openweathermap.org/data/2.5/weather?q=' + cityState + '&type=accurate&APPID=' + APIKEY);
}

function getWeatherSummary(cityState, day) {
  return axios.get('http://api.openweathermap.org/data/2.5/forecast/daily?q=' + cityState + 'CITY-NAME&type=accurate&APPID=' + APIKEY + '&cnt=5');
}

var helpers = {
  getWeather(cityState) {
    return getWeatherSummary(cityState)
      .then(function (info) {
        console.log(JSON.stringify(info.data))
        return {
          name: info.data.city.name,
          list: info.data.list
        }
      })
    .catch(function (err) {console.warn('Error in getWeather: ', err)})
  },
  getDetail(cityState, day) {
    return getWeatherDetail(cityState, day)
      .then(function (info) {
        console.log(info.data)
      })
      .catch(function (err) {console.warn('Error in getDetail: ', err)})
  },
  convertKelvin(degrees) {
    return (degrees * (9 / 5) - 459.67).toFixed(2)
  },
  getDayOfWeek(dt) {
    var date = new Date()
    date.setTime(dt * 1000)
    var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    return days[date.getDay()]
  }
}

module.exports = helpers;
