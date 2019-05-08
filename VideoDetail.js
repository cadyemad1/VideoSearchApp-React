import React from 'react';

const VideoDetail=(props)=>{
    if(!props.Video){ return <div>Loading</div>}
    const videoSrc=`https://www.youtube.com/embed/${props.Video.id.videoId}`
    return(
        <div>
        <div className="ui embed">
            <iframe title="video player" src={videoSrc}/>
        </div>
        <div className="ui segment">
            <p>{props.Video.snippet.title}</p>
            <h4 className="ui header">{props.Video.snippet.description}</h4>
        </div>
        </div>
    );
}
export default VideoDetail;