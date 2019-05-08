import React from 'react';
import VideoItem from './VideoItem';

const VideoList =(props)=>{
    const renderedList=props.videosList.map(vid=>{
        return <VideoItem   video={vid} onVideoSelect={props.onVideoSelect}/>;
    })
    return <div className="ui relaxed divided list">{renderedList}</div>
};
export default VideoList;