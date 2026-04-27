import { Link } from 'react-router-dom'
import { figma } from '../figmaAssets'
import styles from './SiteHeader.module.css'

type Props = {
  variant: 'home' | 'inner'
}

export function SiteHeader({ variant }: Props) {
  return (
    <header className={styles.header} data-variant={variant}>
      <div className={styles.inner}>
        {variant === 'home' ? (
          <div className={styles.logoHome} aria-hidden>
            <img
              src={figma.logoHome}
              alt=""
              className={styles.logoHomeImg}
              width={755}
              height={371}
            />
          </div>
        ) : (
          <Link to="/" className={styles.logoLink} aria-label="Madi Wilkerson home">
            <img
              src={figma.logoHeader}
              alt=""
              className={styles.logoHeaderImg}
              width={301}
              height={148}
            />
          </Link>
        )}
      </div>
    </header>
  )
}
