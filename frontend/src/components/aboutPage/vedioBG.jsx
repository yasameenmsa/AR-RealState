import React from 'react';

const VideoBackground = () => {
    const videoBackgroundStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1, // Set the z-index here
      };
  return (
    <div className="video-background">
      <iframe
        width="1280"
        height="720"
        src="https://www.youtube.com/watch?v=tyK7dzCPhQQ"
        title="YouTube Video"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
