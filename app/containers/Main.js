var React = require('react');

var styles = {
  div: {
    height: '92%',
    width: '100%'
  },
    header :{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: 'orange',
    color: '#fff',
    padding: 5,
    margin: 0
  },
  form: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: 300,
    alignSelf: 'right'
  }
}
var HelloWorld = React.createClass({
  render() {
    return (
      <div style={styles.div}>
      <div style={styles.header}>
        <h2>Basic Weather App</h2>
        <form style={styles.form}>
          <input
            className='form-control'
            placeholder='City, State'
            type='text'
          />
        <button
          className='btn btn-block btn-success'
          type='submit'
        >
          Get Weather
        </button>
        </form>        
        </div>
        {this.props.children}
      </div>
    )
  }
})

module.exports = HelloWorld;
