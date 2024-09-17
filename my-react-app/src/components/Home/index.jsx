import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

const Home = (props) => {

  return (
    <div className="mainContainer">
      <div className={'titleContainer'}>
        <div>Welcome!</div>
      </div>
      <div className={'buttonContainer'}>
        <Link
          className={'inputButton'}
          to={'/login'}>
          Login </Link>
      </div>
      <div className='registertext'>Or if you are new, register below</div>
    </div>
  )
}

export default Home