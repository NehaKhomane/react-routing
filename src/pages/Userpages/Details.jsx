import { useState, useRef, useEffect } from 'react';
import './Details.css'
function VideoPlayer({ src, isPlaying }) {
  const ref = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  }, [isPlaying]);

  return <video ref={ref} src={src} loop playsInfinite width='100%' height='650px'  />;
}

export default function Details() {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <>
     
      <VideoPlayer
        isPlaying={isPlaying}
        src="https://videos.pexels.com/video-files/4916813/4916813-hd_1920_1080_30fps.mp4"
      />
       <button  onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
      
      
      <VideoPlayer
        isPlaying={isPlaying}
        src="https://videos.pexels.com/video-files/4916733/4916733-hd_1920_1080_30fps.mp4"
      />
      <button  onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
      <VideoPlayer
        isPlaying={isPlaying}
        src="https://videos.pexels.com/video-files/2928284/2928284-sd_640_360_30fps.mp4"
      />
      <button  onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
      
    </>
  );
}
