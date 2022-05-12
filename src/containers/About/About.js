import React from 'react'
import './About.css';

const About = () => {
  return (
    <div className='About' id='contentBox'>
      <h1>About</h1>
      <p id='codeBlock'>
          Hello, World! <br/><br/>
          I'm a software developer from Germany. <br/><br/>

          skillset: <br/>
          &#123;<br/>

          <div id='code-smaller-inline'>

            &emsp;main-languages: <br/>
            &emsp;&#123;
            <div id='code'>
              <p id='darkBlue'>&emsp;C#,</p>
              <p id='red'>&emsp;Java,</p>
              <p id='lightBlue'>&emsp;Python,</p>
              <p id='yellow'>&emsp;Squirrel</p>
            </div>
            &emsp;&#125;<br/><br/>

            &emsp;side-projects: <br/>
            &emsp;&#123;
            <div id='code'>
              <p id='darkBlue'>&emsp;C++,</p>
              <p id='lightBlue'>&emsp;ReactJS,</p>
              <p id='lightGreen'>&emsp;RaspberryPi/Arduino</p>
            </div>
            &emsp;&#125;<br/>

          </div>
          &#125;<br/><br/>

          
      </p>
    </div>
  )
}

export default About
