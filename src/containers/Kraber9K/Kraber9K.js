import React from 'react'
import './Kraber9K.css';

const Kraber9K = () => {
  return (
    <div className='Kraber9K'>
      <div className='Trivia'>
        <div className='BlurBox'>
          <p>
            Kraber9K is a highly movement focussed gamemode for Titanfall 2, available only with the <a href='https://northstar.tf' target="_blank">Northstar Client</a><br/>
            It's comparable to AWP Bhop and Combat Surf in CS:GO
          </p>
        </div>
      </div>
      
      <div className='Wrapper'>
        <div className='Videos BlurBox'>
          <h1>CONTENT</h1>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/Lk9pPMT6UkU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <br/>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/J2mGl7bsO7w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>

        <div className='Community BlurBox'>
          <h1>COMMUNITY</h1>
          <p>Our Community is small, we're glad for every Movement-Chad that joins!</p>
          <p>We mainly play on a server by <a href='https://karma-gaming.net' target='_blank'>Karma-Gaming</a>.</p><br/>

          <div className='Discord'>
            <img src='Discord-Logo-Color.svg'className='Logo' width='50' height='50'/>
            <a href='http://karma-gaming.net/go/kraber9k' target='_blank'><p className='Join' >Join the 9K-Community</p></a>
          </div>
          <br/>
          <div className='Discord'>
            <img src='Discord-Logo-Color.svg'className='Logo' width='50' height='50'/>
            <a href='http://karma-gaming.net/go/discord' target='_blank'><p className='Join' >Join the Karma-Community</p></a>
          </div>
          
        </div>
      </div>
      
    </div>
  )
}

export default Kraber9K
