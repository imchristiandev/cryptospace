'use client'

import React, { useState, useRef } from 'react';
import styles from '../../styles/multimedia.audio.module.css';
import { variables } from '@/config';

export const Audios = ({ audios }) => {
  const audioKey = '?sv=2022-11-02&ss=f&srt=sco&sp=r&se=2024-08-31T11:31:58Z&st=2023-09-01T03:31:58Z&spr=https&sig=FmAYmUEuASD%2F8vW%2BImxJtLf%2F3%2BpRtNDhYCTeEITfbRA%3D';
  const { url_content_audio } = variables;

  return (
    (!error && !loading) &&
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
                <source src={`${url_content_audio}${audio}.mp3${audioKey}`} type="audio/mp3" />
              </audio>
            </div>
        ))}
      </div>
    </div>
  )
}
