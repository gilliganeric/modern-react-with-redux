import React from 'react';
import './VideoItem.css';

const VideoItem = ({ video, onVideoSelect }) => {
  const title = video.snippet.title;
  const thumbnail = video.snippet.thumbnails.medium.url;

  return (
    <div className="video-item item" onClick={() => onVideoSelect(video)}>
      <img 
        className="ui image"
        src={thumbnail}
        alt={title}>
      </img>
      <div className="content">
        <div className="header">{title}</div>
      </div>
    </div>
  );
}

export default VideoItem;