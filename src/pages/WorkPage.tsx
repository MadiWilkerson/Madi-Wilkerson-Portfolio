import { Link } from 'react-router-dom'
import { homeGrid } from '../data/projects'
import styles from './WorkPage.module.css'

export function WorkPage() {
  return (
    <div className={styles.page}>
      <section className={styles.section} aria-labelledby="work-heading">
        <h1 id="work-heading" className={styles.title}>
          Work
        </h1>
        <ul className={styles.grid}>
          {homeGrid.map((item) => (
            <li key={item.slug}>
              <Link to={`/project/${item.slug}`} className={styles.tile}>
                <span className={styles.placeholder} aria-hidden />
                <span className={styles.label}>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
