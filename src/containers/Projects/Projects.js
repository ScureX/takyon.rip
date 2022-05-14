import React from 'react'
import './Projects.css';

const Projects = () => {
  return (
    <div className='Projects' id='contentBox'>
      <h1>Projects</h1>
      <div className='ProjectsContent'>

        <a className='Project' href='https://github.com/ScureX/Takyon.PlayerVote' target='_blank' rel="noreferrer">
          <img className='ProjectImage'  src='playervoteIcon.png'/>
        </a>

        <a className='Project' href='https://github.com/ScureX/NSModCreator' target='_blank' rel="noreferrer">
          <img className='ProjectImage' src='nsmodcreatorIcon.png'/>
        </a>

        <a className='Project' href='https://github.com/ScureX/BadCalculator' target='_blank' rel="noreferrer">
          <img className='ProjectImage'  src='badcalculatorIcon.png'/>
        </a>

        <a className='Project' href='https://github.com/ScureX/Twitter_For' target='_blank' rel="noreferrer">
          <img className='ProjectImage'  src='twitterforIcon.png'/>
        </a>

      </div>
    </div>
  )
}

export default Projects
