import React from 'react';
import bannerVid from '../../../../assets/banner.mp4';
import './video1.scss'
// import 'video-react/dist/video-react.full'; 

const VideoPlayer = () => {
  return (
    <div className="mainC">
    <div className='video'>
        <video src={bannerVid} autoPlay loop muted style={{width: '90%'}}/>
    </div>
    </div>
  )
}

export default VideoPlayer