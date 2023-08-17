import styles from '../../styles/home.video.module.css';

export const Video = () => {
  return (
    <div className={ styles.main }>
      <iframe
        className={ styles.video }
        src="https://www.youtube.com/embed/WDqbmgk5dHc"
        allow="
          accelerometer;
          autoplay;
          encrypted-media;
          gyroscope;
          picture-in-picture"
      />
    </div>
  )
}
