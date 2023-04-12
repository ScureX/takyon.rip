import React from "react";
import "./Wallpaper.css";
import { isMobile } from "react-device-detect";

const Wallpaper = () => {
  return (
    <div className={!isMobile ? "wallpaper animated" : "wallpaper still"} />
  );
};

export default Wallpaper;
