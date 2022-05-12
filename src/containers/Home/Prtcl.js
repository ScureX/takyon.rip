import React from 'react'
import './Home.css';
import Particles from 'react-tsparticles';
import particlesOptions from "../../particles.json"
import { useCallback } from 'react';
import { loadFull } from "tsparticles";
import { isMobile } from "react-device-detect";

const Prtcl = () => {

  const particlesInit = useCallback(main => {
    loadFull(main);
  }, []);

  if(!isMobile){
    return (<Particles id='tsparticles' options={particlesOptions} init={particlesInit}/>);
  }

  return (null);
}

export default Prtcl
