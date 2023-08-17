
import Image from 'next/image';
import styles from '../../styles/home.discover.module.css';
import gummy from '@/images/gummy-black.png';
import global from '../../styles/globals.module.css';
import backgroundColors from '@/images/background-colors.png';

export const Discover = () => {
  return (
    <div className={ styles.main }>
      <div className={ styles.background }>
        <Image
          src={ backgroundColors }
          alt='Background blue'
          style={{ height: "100%", width: "100%" }}
        />
      </div>
      <div className={ styles.grid }>
        <div className={ styles.container }>
          <div className={ styles.content }>
            <div className={ styles.title }>
              Unlock de full story of happyland gummy bears
            </div>
            <a
              className={ global.btn }
              href='/multimedia'
            >
              <span>Unlock Content</span>
            </a>
          </div>
        </div>
        <div>
          <Image 
            src={ gummy }
            alt='Gummy blue'
            className={ styles.gummy }
          />
        </div>
      </div>
    </div>
  )
}
