import React from 'react'
import './Home.css';
import Particles from 'react-tsparticles';
import particlesOptions from "../../particles.json"
import { useCallback } from 'react';
import { loadFull } from "tsparticles";
const Home = () => {

  const particlesInit = useCallback(main => {
    loadFull(main);
  }, [])

  return (
    <div className='Home'>
      <Particles id='tsparticles' options={particlesOptions} init={particlesInit}/>
      
      <div className='MainText'>
        <h1>Takyon</h1>
        <h2>/</h2>

        <div className='wallpaper'/>
        
        <div className="grid-titelbar">
          <div className="grid-item">
            <a href='https://github.com/ScureX' className="grid-item">
              <img src='github.svg'/>
            </a>
          </div>
          <div className="grid-item">
            <a href='https://www.youtube.com/channel/UCtCKptMaIFT7mgcMJEZGulA' className="grid-item">
              <img src='youtube.svg'/>
            </a>
          </div>
          <div className="grid-item">
            <a href='https://www.tiktok.com/@takyon_scure' className="grid-item">
              <img src='tiktok.svg'/>
            </a>
          </div>
          <div className="grid-item">
            <a href='instagram.com/chiggynunget69/' className="grid-item">
              <img src='instagram.svg'/>
            </a>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Home
