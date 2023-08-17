'use client'
import React, { useState, useEffect } from 'react';
import styles from '../../styles/multimedia.countdown.module.css';

function display(title, number) {
  let numberString = String(number);
  return (
    <div className={ styles.display }>
      <p>{ title }</p>
      <span>{ numberString.padStart(2,"0") }</span>
    </div>
  )
}

export const Countdown = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);

  useEffect(() => {
    const updateCounter = () => {
      const now = new Date();
      const timeLeft = new Date(process.env.TARGET_DATE) - now;

      const newDays = Math.floor(timeLeft / (24 * 60 * 60 * 1000));
      const newHours = Math.floor((timeLeft % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
      const newMinutes = Math.floor((timeLeft % (60 * 60 * 1000)) / (60 * 1000));

      setDays(newDays);
      setHours(newHours);
      setMinutes(newMinutes);
    };

    updateCounter();
    const interval = setInterval(updateCounter, 30000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={ styles.main }>
      <p>Time for content reveal</p>
      <div className={ styles.displayContent }>
        {display('Days',days)}
        <p>:</p>
        {display('Hours',hours)}
        <p>:</p>
        {display('Minutes',minutes)}
      </div>
    </div>
  );
};