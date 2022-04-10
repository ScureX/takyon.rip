import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <div className='Navbar'>

      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Kraber9K">Kraber9K</Link></li>
          <li><Link to="/mods">Mods</Link></li>
          <li><a href='https://github.com/ScureX' target="_blank">Github</a></li>
          <li><a href='https://www.youtube.com/channel/UCtCKptMaIFT7mgcMJEZGulA' target="_blank">YouTube</a></li>
          <li><a href='https://www.tiktok.com/@takyon_scure' target="_blank">TikTok</a></li>
        </ul>
      </nav>

    </div>
  )
}

export default Navbar
