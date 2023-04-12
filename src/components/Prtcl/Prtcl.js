import React from "react";
import "./Prtcl.css";
import Particles from "react-tsparticles";
import particlesOptions from "../../particles.json";
import { useCallback } from "react";
import { loadFull } from "tsparticles";

const Prtcl = () => {
  const particlesInit = useCallback((main) => {
    loadFull(main);
  }, []);

  return (
    <Particles
      id="tsparticles"
      options={particlesOptions}
      init={particlesInit}
    />
  );
};

export default Prtcl;
