import React, { useEffect, useState } from 'react';
import './App.css';
import Video from './pages/Video';
import db from './config/firebase';
import { collection, getDocs } from 'firebase/firestore/lite';

function App() {

  const [videos, setVideos] = useState([]);

  async function getVideos(){
    const videosColection = collection(db, 'videos');
    const videosSnapshot = await getDocs(videosColection);
    const videosList = videosSnapshot.docs.map(doc => doc.data());

    setVideos(videosList);
  };

  useEffect(() => {
    getVideos();

  }, []);

  return (
    <div className="App">
      <div className='app__videos'>
        
        {
          videos.map((video) => {
            return(
              <Video 
                likes={video.likes}
                messages={video.messages}
                shares={video.shares}
                username={video.username}
                description={video.description}
                music={video.music}
                url={video.url}
              />
            )
          })
        }

      </div>
    </div>
  );
}

export default App;
