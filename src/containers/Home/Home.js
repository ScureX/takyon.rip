import React from 'react'
import './Home.css';
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='Home'>
      <div className='BlurBox'>
        <p className='WelcomeText'>Hello, World! I'm a Software Developer from Germany.</p>
        <p className='WelcomeText'>On this site you can find my latest Titanfall 2 modding projects!</p>

      </div>
    </div>
  )
}

export default Home
