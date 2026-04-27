import { Link } from 'react-router-dom'
import { figma } from '../figmaAssets'
import styles from './MenuOverlay.module.css'

type Props = {
  open: boolean
  onClose: () => void
}

export function MenuOverlay({ open, onClose }: Props) {
  if (!open) return null

  return (
    <div
      className={styles.backdrop}
      role="dialog"
      aria-modal="true"
      aria-label="Site menu"
    >
      <div className={styles.top}>
        <Link to="/" onClick={onClose} className={styles.brand} aria-label="Home">
          <img src={figma.logoHeader} alt="" className={styles.brandImg} width={301} height={148} />
        </Link>
      </div>
      <nav className={styles.nav} aria-label="Primary">
        <Link to="/about" className={`${styles.navLink} hover-underline-ltr`} onClick={onClose}>
          About
        </Link>
        <Link to="/" className={`${styles.navLink} hover-underline-ltr`} onClick={onClose}>
          Work
        </Link>
      </nav>
    </div>
  )
}
