import React, { lazy, Suspense } from "react";
import "./Videos.css";
const LazyIframe = lazy(() => import('../../components/LazyIFrame/LazyIFrame'));

const renderLoader = () => <p>Loading</p>;

const Videos = () => {
  return (
    <div className="Videos" id="contentBox">
      <h1>Latest Videos</h1>
      <Suspense fallback={renderLoader()}>
        <div className="VideoContent">
          <LazyIframe
            src="https://www.youtube.com/embed/VTa3wltqBUc"
            title="Breathe [4k] | Kraber 9k Clip Dump 3"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></LazyIframe>
          <LazyIframe
            src="https://www.youtube.com/embed/J2mGl7bsO7w"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></LazyIframe>
        </div>
      </Suspense>
    </div>
  );
};

export default Videos;
