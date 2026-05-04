import { NavLink, Link } from 'react-router-dom'
import styles from './SiteHeader.module.css'
import { NameLogo } from './NameLogo'

function navLinkClass(active: boolean) {
  return [styles.navLink, active ? styles.navLinkActive : ''].join(' ')
}

export function SiteHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.bar}>
        <Link to="/" className={styles.logoLink} aria-label="Madi Wilkerson home">
          <NameLogo />
        </Link>
        <nav className={styles.nav} aria-label="Primary">
          <NavLink to="/" end className={({ isActive }) => navLinkClass(isActive)}>
            work
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => navLinkClass(isActive)}>
            about
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
