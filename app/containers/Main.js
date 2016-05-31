var React = require('react');
var CityStateContainer = require('./CityStateContainer');

var styles = {
  div: {
    height: '92%',
    width: '100%'
  },
    header :{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: 'orange',
    color: '#fff',
    padding: 5,
    margin: 0
  }
}
var WeatherNav = React.createClass({
  render() {
    return (
      <div style={styles.div}>
      <div style={styles.header}>
        <h2>Basic Weather App</h2>
          <CityStateContainer flexDirection='row' />
        </div>
        {this.props.children}
      </div>
    )
  }
})

module.exports = WeatherNav;
