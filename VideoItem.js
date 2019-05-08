import React from 'react';
import './VideoItem.css';

const VideoItem =({video,onVideoSelect})=>{
    return(
        <div onClick={()=>onVideoSelect(video)} className="item" className="video-item">
          <img alt={video.snippet.title} className="ui image"  style={{maxWidth:'180px'}} src={video.snippet.thumbnails.medium.url}/>
          <div className="content">
            <div className="header"> {video.snippet.title}</div>
        </div>
        </div>
    );
};
export default VideoItem;