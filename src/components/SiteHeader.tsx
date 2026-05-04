import { NavLink, Link } from 'react-router-dom'
import styles from './SiteHeader.module.css'

function navBtnClass(active: boolean) {
  return [styles.navBtn, active ? styles.navBtnActive : ''].join(' ')
}

export function SiteHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.bar}>
        <Link to="/" className={styles.logoLink} aria-label="Madi Wilkerson home">
          <img src="/namelogo.svg" alt="" className={styles.logo} width={784} height={405} />
        </Link>
        <nav className={styles.nav} aria-label="Primary">
          <NavLink to="/" end className={({ isActive }) => navBtnClass(isActive)}>
            Work
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => navBtnClass(isActive)}>
            About
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
