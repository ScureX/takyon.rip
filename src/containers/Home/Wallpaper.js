import React from 'react'
import './Home.css';
import { isMobile } from "react-device-detect";

const Wallpaper = () => {

  if(!isMobile){
    return (<div className='wallpaper animated'/>);
  }

  return (<div className='wallpaper still'/>);
}

export default Wallpaper
