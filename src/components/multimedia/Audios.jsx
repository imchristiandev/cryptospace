'use client'

import React from 'react';
import styles from '../../styles/multimedia.audio.module.css';

export const Audios = ({ audios }) => {
  const urlContent = process.env.URL_CONTENT_AUDIO;

  return (
    <div id='Audios' className={ styles.main }>
      <h2> Audios </h2>
      <div className={ styles.content }>
        { audios.map(
          (audio) => (
            <div
             key={audio}
             className={ styles.audio }
            >
              <p>{audio}</p>
              <audio
                className={ styles.control }
                controls
                controlsList="nodownload"
              >
                <source src={`${urlContent}${audio}.mp3`} type="audio/mp3" />
              </audio>
            </div>
        ))}
      </div>
    </div>
  )
}
