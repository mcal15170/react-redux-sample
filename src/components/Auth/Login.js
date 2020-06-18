import React from 'react'
import { Link } from 'react-router-dom'

class Login extends React.Component {
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
        <h1>This is login page</h1>
      </div>
    )
  }
}

export default Login
