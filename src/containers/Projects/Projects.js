import React from 'react'
import './Projects.css';

const Projects = () => {
  return (
    <div className='Projects' id='contentBox'>
      <h1>Projects</h1>
      <div className='ProjectsContent'>

        <a className='Project' href='https://github.com/ScureX/Takyon.PlayerVote' target='_blank' rel="noreferrer">
          <img className='ProjectImage'  src='project_icon/playervoteIcon.png' alt='player vote'/>
        </a>

        <a className='Project' href='https://github.com/ScureX/NSModCreator' target='_blank' rel="noreferrer">
          <img className='ProjectImage' src='project_icon/nsmodcreatorIcon.png' alt='ns mod creator'/>
        </a>

        <a className='Project' href='https://github.com/ScureX/BadCalculator' target='_blank' rel="noreferrer">
          <img className='ProjectImage'  src='project_icon/badcalculatorIcon.png' alt='bad calculator'/>
        </a>

        <a className='Project' href='https://github.com/ScureX/Twitter_For' target='_blank' rel="noreferrer">
          <img className='ProjectImage'  src='project_icon/twitterforIcon.png' alt='twitter for'/>
        </a>

        <a className='Project' href='https://github.com/ScureX/AsciiTreeGenerator' target='_blank' rel="noreferrer">
          <img className='ProjectImage'  src='project_icon/treegenIcon.png'alt='tree generator'/>
        </a>

      </div>
    </div>
  )
}

export default Projects
