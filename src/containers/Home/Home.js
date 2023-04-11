import React from 'react'
import './Home.css';
import Prtcl from './Prtcl';
import Wallpaper from './Wallpaper';
import About from '../About/About';
import Videos from '../Videos/Videos';
import Projects from '../Projects/Projects';

const Home = () => {

  function goToByScroll(id){
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    return false;
  }

  return (
    <div className='All'>
      <div className='Home'>

        <Prtcl/>

        <div className='MainText'>
          <h1 id='name'>Takyon</h1>
          <h2>/</h2>

          <Wallpaper/>
          
          <div className="grid-titelbar">
            <div className="grid-item">
              <a href='https://github.com/ScureX' target='_blank' rel="noreferrer" className="grid-item">
                <img src='github.svg' id='social'/>
              </a>
            </div>
            <div className="grid-item">
              <a href='https://www.youtube.com/channel/UCtCKptMaIFT7mgcMJEZGulA' target='_blank' rel="noreferrer" className="grid-item">
                <img src='youtube.svg' id='social'/>
              </a>
            </div>
            <div className="grid-item">
              <a href='https://www.tiktok.com/@takyon_scure' target='_blank' rel="noreferrer" className="grid-item">
                <img src='tiktok.svg' id='social'/>
              </a>
            </div>
            <div className="grid-item">
              <a href='https://instagram.com/chiggynunget69/' target='_blank' rel="noreferrer" className="grid-item">
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
          {/* <p id='underConstruction'>SITE UNDER CONSTRUCTION</p> */}
          <About/>
          <Projects/>
          <Videos/>
      </div>
    </div>
  );
}

export default Home;