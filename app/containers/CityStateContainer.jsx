var React = require('react');
var CityState = require('../components/CityState');
var weatherHelper = require('../utils/weatherHelper');

var CityStateContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState() {
    return {
      cityState: ''
    }
  },
  onLocationChange(e) {
    this.setState({
      cityState: e.target.value
    });
  },
  getWeather(e) {
    this.context.router.push({
      pathname: '/forecast/' + this.state.cityState
    })
  },
  render() {
    return (
      <CityState
        flexDirection={this.props.flexDirection}
        cityState={this.state.cityState}
        onLocationChange={this.onLocationChange}
        getWeather={this.getWeather}
      />
    )
  }
})

module.exports = CityStateContainer;
