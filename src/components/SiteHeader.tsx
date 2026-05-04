import { NavLink, Link } from 'react-router-dom'
import styles from './SiteHeader.module.css'

function navLinkClass(active: boolean) {
  return [styles.navLink, active ? styles.navLinkActive : ''].join(' ')
}

export function SiteHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.bar}>
        <Link to="/" className={styles.logoLink} aria-label="Madi Wilkerson home">
          <img src="/namelogo.svg" alt="" className={styles.logo} width={784} height={405} />
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
