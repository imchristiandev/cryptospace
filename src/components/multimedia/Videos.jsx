'use client'

import React, { Fragment, useState, useRef } from 'react';
import styles from '../../styles/multimedia.video.module.css';
import { useQuery, gql } from '@apollo/client';

const GET_GUMMI = gql`
  query($tokenId: Int!)  {
    getGummy(tokenId: $tokenId) {
      multi
    }
  }
`;

export const Videos = ({ id }) => {
  const videoKey = '?sv=2023-01-03&st=2023-09-01T13%3A29%3A58Z&se=2023-09-02T13%3A44%3A58Z&sr=s&sp=r&sig=%2Bil0qZreV41VSy3qOd7JLWwWl2oVMVX9kQCMV0Hh4PY%3D';
  const urlContent = process.env.URL_CONTENT_VIDEO;
  const [videoRender, setVideoRender] = useState();
  const videoRef = useRef(null);

  let videos = ""; 
  const { data } = useQuery(GET_GUMMI, {
    variables: {
      tokenId: parseInt(id),
    },
  });

  if( data !== undefined ) {
    const result = data.getGummy.multi;
    const arrayResult = result.split(',');
    videos = arrayResult; 
  }

  const multimedia = (name) => {
    const urlVideo = `${urlContent}${name}.mp4`;
    
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
          { videos === ""  ? 
              <Fragment /> 
            : videos.map(
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
