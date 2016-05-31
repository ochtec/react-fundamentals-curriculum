var React = require('react')

function getStyles(props) {
  return {
    display: 'flex',
    flexDirection: props.flexDirection || 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
}

function CityState(props) {
  return (
  <div style={getStyles(props)}>
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
  </div>
  )
}

module.exports = CityState;
