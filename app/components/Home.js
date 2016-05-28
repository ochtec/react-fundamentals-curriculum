var React = require('react');

var divStyle = {
  backgroundSize: 'stretch',
  backgroundImage: 'url(app/images/pattern.svg)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  width: '100%'
}

function Test () {
    return (
    <div style={divStyle}>
      TEST World!
    </div>
  )
}

module.exports = Test;
