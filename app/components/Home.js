var React = require('react');

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
function Test () {
    return (
    <div style={styles.page}>
      <p style={styles.para}>Enter a City and State</p>
      <form>
        <div>
        <input
          className='form-control'
          placeholder='City, State'
          type='text'
        />
        </div>
        <div>
        <button
          className='btn btn-block btn-success'
          type='submit'
        >
          Get Weather
        </button>
        </div>
      </form>
    </div>
  )
}

module.exports = Test;
