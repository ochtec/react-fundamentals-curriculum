var React = require('react');
var CityState = require('./CityState');

var styles = {
  page: {
    backgroundSize: 'stretch',
    backgroundImage: 'url(app/images/pattern.svg)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%'
  },
  para: {
    color: 'white',
    fontSize: '30px'
  }
}
function Home () {
    return (
    <div style={styles.page}>
      <p style={styles.para}>Enter a City and State</p>
      <CityState flexDirection='column' />
    </div>
  )
}

module.exports = Home;
