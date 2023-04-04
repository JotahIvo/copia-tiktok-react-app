import React, { useRef, useState } from 'react';
import VideoFooter from './components/footer/VideoFooter';
import VideoSidebar from './components/sideBar/VideoSidebar';
import './video.css';

function Video({likes, messages, shares, username, description, music, url}) {

    const videoRef = useRef(null);
    const [play, setPlay]  = useState(false);

    function handdleStart(){
        if(!play){
            videoRef.current.play();
            setPlay(true);
        } else {
            videoRef.current.pause();
            setPlay(false);
        };
    };

  return (
    <div className='video'>
        <video className='video__player' 
            src={url}
            ref={videoRef}
            onClick={handdleStart}
            loop >
        </video>

        <VideoSidebar
            likes={likes}
            messages={messages}
            shares={shares}
        />
        <VideoFooter 
            username={username}
            description={description}
            music={music}
        />
    </div>
  )
}

export default Video