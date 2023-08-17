'use client'

import React, { useState, useRef } from 'react';
import styles from '../../styles/multimedia.audio.module.css';
import { variables } from '@/config';


export const Audios = ({ audios }) => {
  const { url_content_audio } = variables;

  return (
    <div className={ styles.main }>
      <h2> Audios </h2>
      <div className={ styles.content }>
        { audios.map(
          (audio) => (
            <div
             key={audio}
             className={ styles.audio }
            >
              <p>{audio}</p>
              <audio controls controlsList="nodownload">
                <source src={`${url_content_audio}${audio}.mp3`} type="audio/mp3" />
              </audio>
            </div>
        ))}
      </div>
    </div>
  )
}
