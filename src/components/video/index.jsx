import React from 'react';
import WineVideo from '../../assets/wine-slow-motion.mp4';
import './style.scss';

const video = (props) => {
  return (
    <div className="video-container">
      <video src={WineVideo} autoPlay loop muted hidden={!props.isHidden} width="1250" />
    </div>
  );
};

export default video;
