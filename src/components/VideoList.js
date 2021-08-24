import React from 'react';
import VideoItem from './VideoItem';

//class VideoList extends React.Component {
const VideoList = ({ videos, selectVideo }) => {
  const renderedList = videos.map( video => {
    return (
      <VideoItem 
        onVideoSelect={selectVideo} 
        video={video}
        key={video.id.videoId}
      />
    )
  })

  //render() {}
    return (
      <div className="ui relaxed divided list">
        {renderedList}
      </div>
    );

}

export default VideoList;