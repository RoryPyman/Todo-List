import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

const Home = (props) => {

  return (
    <div className="mainContainer">
      <div className={'titleContainer'}>
        <div className="welcomeTitle">Welcome to ToDoList!</div>
        <div className="welcomeSubtitle">Your go-to app for staying organized</div>
        <div className="welcomeDescription">
          Manage your tasks effortlessly. Add, track, and complete your to-do items with ease.
        </div>
      </div>
      <div className={'buttonContainer'}>
        <Link
          className={'inputButton'}
          to={'/login'}>
          Login </Link>
      </div>
      <div className='registertext'>Or if you are new, register below</div>
      <div className={'buttonContainer'}>
        <Link
          className={'inputButton'}
          to={'/register'}>
          Register </Link>
      </div>
      <div className='registertext'>If you dont want to register you can use as a guest <Link to="/list">here </Link> </div>
    </div>
  )
}

export default Home