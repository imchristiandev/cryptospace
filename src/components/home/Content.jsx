
import Image from 'next/image';
import styles from '../../styles/home.content.module.css';
import global from '../../styles/globals.module.css';
import gummy from '@/images/gummy-blue.png';
import backgroundBlue from '@/images/fondoAzul.png';

export const Content = () => {
  return (
    <div className={ styles.main }>
      <div className={ styles.background }>
        <Image
          src={ backgroundBlue }
          alt='Background blue'
          className = {styles.image}
        />
      </div>
      <div className={ styles.grid }>
        <div>
          <Image 
            src={ gummy }
            alt='Gummy blue'
            className={ styles.gummy }
          />
        </div>
        <div className={ styles.container }>
          <div className={ styles.content }>
            <div className={ styles.title }>
              Unlock the full story of happyland gummy bears
            </div>
            <a
              className={ global.btn }
              href='/multimedia'
            >
              <span>Unlock Content</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
