import React from "react";
import "./LazyIFrame.css";
import { isMobile } from "react-device-detect";

const LazyIFrame = ({ src, title, frameborder, allow}) => {
  return (
    <iframe className={!isMobile ? "YtIFrame" : "mobile_YtIFrame"} src={src} title={title} frameborder={frameborder} allow={allow} allowfullscreen></iframe>
  );
}

export default LazyIFrame;
