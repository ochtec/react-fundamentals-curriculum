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

var HelloWorld = React.createClass({
  render() {
    return (
      <div style={divStyle}>Hello World!</div>
    )
  }
})

module.exports = HelloWorld;
