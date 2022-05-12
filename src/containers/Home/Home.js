import React from 'react'
import './Home.css';
import Particles from 'react-tsparticles';
import particlesOptions from "../../particles.json"
import { useCallback } from 'react';
import { loadFull } from "tsparticles";
import { isMobile } from "react-device-detect";
import { Kraber9K } from "../index";

const Home = () => {

  const particlesInit = useCallback(main => {
    if(!isMobile){
      loadFull(main);
    }
  }, [])

  function moreButton(){
    document.getElementById("MainText").classList.add('shrink');
    document.getElementById("morebutton").style.animationDelay=("0s")
    document.getElementById("morebutton").style.animationName=("title_fadeout")
    document.body.style.overflow="auto"
}


  return (
    <div className='All'>
      <div className='Home'>
        <Particles id='tsparticles' options={particlesOptions} init={particlesInit}/>
        
        <div className='MainText' scroll>
          <h1>Takyon</h1>
          <h2>/</h2>

          <div className='wallpaper'/>
          
          <div className="grid-titelbar">
            <div className="grid-item">
              <a href='https://github.com/ScureX' className="grid-item">
                <img src='github.svg' id='social'/>
              </a>
            </div>
            <div className="grid-item">
              <a href='https://www.youtube.com/channel/UCtCKptMaIFT7mgcMJEZGulA' className="grid-item">
                <img src='youtube.svg' id='social'/>
              </a>
            </div>
            <div className="grid-item">
              <a href='https://www.tiktok.com/@takyon_scure' className="grid-item">
                <img src='tiktok.svg' id='social'/>
              </a>
            </div>
            <div className="grid-item">
              <a href='instagram.com/chiggynunget69/' className="grid-item">
                <img src='instagram.svg' id='social'/>
              </a>
            </div>
          </div>
        </div>

        <a href='#Content' className='seeMore'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" id='seeMore' class="bi bi-chevron-compact-down" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"/>
          </svg>
        </a>
      </div>

      <div id='Content' className='Content'>
          <p id='underConstruction'>SITE UNDER CONSTRUCTION</p>
      </div>
    </div>
    
  )
}

export default Home
