var React = require('react');
var weatherHelper = require('../utils/weatherHelper');

var ForecastContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState() {
    return {
      cityState: '',
      data: []
    }
  },
  onLocationChange(e) {
    this.setState({
      cityState: e.target.value
    });
  },
  getWeather(e) {
    console.log(this.state.cityState);
    //api key 9e1e091bb7f8a96ea12aee5ddf41fa6d
    weatherHelper.getWeather(this.state.cityState);
  },
  render() {
    return (
      <div>
        Forecast Component
      </div>
    )
  }
})

module.exports = ForecastContainer;
