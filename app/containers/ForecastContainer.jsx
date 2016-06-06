var React = require('react');
var weatherHelper = require('../utils/weatherHelper');
var Forecast = require('../components/Forecast');
import { Link } from 'react-router'

var styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    maxWidth: 1200,
    margin: '50px auto'
  },
  header: {
    fontSize: 65,
    color: '#333',
    fontWeight: 100,
    textAlign: 'center'
  }
}

var ForecastContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
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
  handleClick(weather) {
    console.log(weather)
    this.context.router.push({
      pathname: '/detail/' + this.state.data.name,
      state: {
        weather: weather
      }
    })
  },
  render() {
    return (
      this.state.isLoading === true ?
      <div>Loading</div> :
      <div>
        <h1 style={styles.header}>{this.state.data.name} </h1>
        <div style={styles.container}>
          {this.state.data.list.map(result => {
            return (
              <Forecast
                key={result.dt}
                day={result}
                city={this.state.data.name}
                handleClick={this.handleClick}
              />
            )
          })}
        </div>
      </div>
    )
  }
})

module.exports = ForecastContainer;
