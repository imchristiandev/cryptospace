'use client'

import React, { Fragment } from 'react';
import styles from '../../styles/multimedia.audio.module.css';
import { useQuery, gql } from '@apollo/client';


const GET_GUMMI = gql`
  query($tokenId: Int!)  {
    getGummy(tokenId: $tokenId) {
      multi
    }
  }
`;

export const Audios = ({ id }) => { 
  const audioKey = '?sv=2022-11-02&ss=f&srt=sco&sp=r&se=2024-08-31T11:31:58Z&st=2023-09-01T03:31:58Z&spr=https&sig=FmAYmUEuASD%2F8vW%2BImxJtLf%2F3%2BpRtNDhYCTeEITfbRA%3D';
  let audios = ""; 
  const urlContent = process.env.URL_CONTENT_AUDIO;
  const { data } = useQuery(GET_GUMMI, {
    variables: {
      tokenId: parseInt(id),
    },
  });

  if( data !== undefined ) {
    const result = data.getGummy.multi;
    const arrayResult = result.split(',');
    audios = arrayResult; 
    console.info(audios);
  }

  return (
    <div id='Audios' className={ styles.main }>
      <h2> Audios </h2>
      <div className={ styles.content }>
        { audios === ""  ? <Fragment /> 
        : audios.map(
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
          ))
        }
      </div>
    </div>
  )
}
