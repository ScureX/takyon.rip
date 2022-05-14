import React from 'react'
import './Videos.css';

const Videos = () => {
  return (
    <div className='Videos' id='contentBox'>
      <h1>Latest Videos</h1>
      <div className='VideoContent'>
        <iframe src="https://www.youtube.com/embed/Lk9pPMT6UkU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe src="https://www.youtube.com/embed/J2mGl7bsO7w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
  )
}

export default Videos
