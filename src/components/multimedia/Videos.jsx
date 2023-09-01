'use client'

import React, { useState, useRef } from 'react';
import styles from '../../styles/multimedia.video.module.css';
import { variables } from '@/config';


export const Videos = ({ videos }) => {
  const { url_content_video } = variables;
  const videoKey = '?sv=2023-01-03&st=2023-09-01T13%3A29%3A58Z&se=2023-09-02T13%3A44%3A58Z&sr=s&sp=r&sig=%2Bil0qZreV41VSy3qOd7JLWwWl2oVMVX9kQCMV0Hh4PY%3D';
  
  const [videoRender, setVideoRender] = useState();
  const videoRef = useRef(null);

  const multimedia = (name) => {
    const urlVideo = `${url_content_video}${name}.mp4${videoKey}`;
    
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.load();
    }
    
    setVideoRender(urlVideo);
  }

  return (
    <div className={ styles.main }>
      <h2> Videos </h2>
      <div className={ styles.content }>
        <div className={ styles.list }>
          <p> Content list </p>
          { videos.map(
            (video) => (
              <a
                key={video}
                onClick={(e) => multimedia(e.target.innerText)}
              >
                {video}
              </a>
          ))}
        </div>
        <div className={ styles.multimediaContent }>
          <video ref={videoRef} controls width="100%" controlsList="nodownload">
            <source src={videoRender} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  )
}
