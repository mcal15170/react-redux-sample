import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import actions from '../../redux/appState/action'

class Home extends React.Component {
  render () {
    return (
      <div>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/login'>Login</Link>
          </li>
        </ul>

        <h1>This is home page</h1>
        <h4>counter : {this.props.counter}</h4>
        <button
          onClick={() => {
            this.props.addCounter(1)
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            this.props.removeCounter(1)
          }}
        >
          -
        </button>

        <hr />
        <button
          onClick={() => {
            this.props.history.push('/product')
          }}
        >
          go to product page
        </button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    counter: state.appStateReducer.counter
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      addCounter: actions.incrementCounter,
      removeCounter: actions.decrementCounter
    },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
