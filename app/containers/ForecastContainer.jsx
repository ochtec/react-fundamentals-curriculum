var React = require('react');
var weatherHelper = require('../utils/weatherHelper');

var ForecastContainer = React.createClass({
  getInitialState() {
    return {
      isLoading: true,
      data: []
    }
  },
  componentDidMount() {
    weatherHelper.getWeather(this.props.location.state.city)
      .then(function(weather) {
        this.setState({
          data: weather,
          isLoading: false
        })
      }.bind(this))
  },
  render() {
    return (
      this.state.isLoading === true ?
      <div>Loading</div> :
      <div>
        {this.state.data.name}
      </div>
    )
  }
})

module.exports = ForecastContainer;
