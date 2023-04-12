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
            <div id='tab'>
              main-languages: <br/>
              &#123;
              <div id='code'>
                <p id='darkBlue'>C#,</p>
                <p id='lightBlue'>Python,</p>
                <p id='red'>Java,</p>
                <p id='yellow'>Squirrel</p>
              </div>
              &#125;<br/><br/>
            </div>

            <div id='tab'>
              side-projects: <br/>
              &#123;
              <div id='code'>
                <p id='darkBlue'>C++,</p>
                <p id='lightBlue'>ReactJS,</p>
                <p id='lightGreen'>RaspberryPi/Arduino</p>
              </div>
              &#125;<br/>
            </div>

          </div>
          &#125;
      </p>
    </div>
  )
}

export default About
