var React = require('react');
var ReactDOM = require('react-dom');
//var routes = require('./config/routes');

var HelloWorld = React.createClass({
  render() {
    return (
      <div>Hello World!</div>
    )
  }
})

ReactDOM.render(
  <HelloWorld />,
  document.getElementById('app')
)
