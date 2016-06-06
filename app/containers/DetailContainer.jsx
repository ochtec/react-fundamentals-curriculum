var React = require('react');
var weatherHelper = require('../utils/weatherHelper');

function DetailContainer(props) {
  var state = props.location.state;
    return (
      <div>
        <h2>{props.params.city} !</h2>
        <div>
          Rain: {state.weather.weather[0].description}
        </div>
      </div>
    )
}


module.exports = DetailContainer;
