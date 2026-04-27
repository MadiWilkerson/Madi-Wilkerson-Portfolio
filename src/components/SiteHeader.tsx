import { Link } from 'react-router-dom'
import { figma } from '../figmaAssets'
import styles from './SiteHeader.module.css'

type Props = {
  variant: 'home' | 'inner'
  onOpenMenu: () => void
}

export function SiteHeader({ variant, onOpenMenu }: Props) {
  return (
    <header className={styles.header} data-variant={variant}>
      <div className={styles.inner}>
        <button type="button" className={styles.menuBtn} onClick={onOpenMenu} aria-label="Open menu">
          <span className={styles.menuLines} aria-hidden>
            <img src={figma.menuLines} alt="" width={73} height={6} className={styles.lineImg} />
            <img src={figma.menuLines} alt="" width={73} height={6} className={styles.lineImg} />
          </span>
        </button>
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
