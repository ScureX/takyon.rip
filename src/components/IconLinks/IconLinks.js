import React from 'react'
import './IconLinks.css'
import { isMobile } from "react-device-detect";

function IconLinks() {
  return (
    <div className={!isMobile ? "grid-titelbar" : "mobile_grid-titelbar"}>

      <a className="grid-item" href='https://github.com/ScureX' target='_blank' rel="noreferrer">
        <img src='social_icon/github.svg' id={!isMobile ? "social" : "mobile_social"}/>
      </a>
      <a className="grid-item" href='https://www.youtube.com/channel/UCtCKptMaIFT7mgcMJEZGulA' target='_blank' rel="noreferrer">
        <img src='social_icon/youtube.svg' id={!isMobile ? "social" : "mobile_social"}/>
      </a>
      <a className="grid-item" href='https://www.tiktok.com/@takyon_scure' target='_blank' rel="noreferrer" >
        <img src='social_icon/tiktok.svg' id={!isMobile ? "social" : "mobile_social"}/>
      </a>
      <a className="grid-item" href='https://instagram.com/chiggynunget69/' target='_blank' rel="noreferrer">
        <img src='social_icon/instagram.svg' id={!isMobile ? "social" : "mobile_social"}/>
      </a>

    </div>
  )
}

export default IconLinks
