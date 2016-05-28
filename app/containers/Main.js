var React = require('react');

var HelloWorld = React.createClass({
  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        {this.props.children}
      </div>
    )
  }
})

module.exports = HelloWorld;
