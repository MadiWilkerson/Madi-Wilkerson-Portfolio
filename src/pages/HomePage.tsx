import { Link } from 'react-router-dom'
import { homeGrid } from '../data/projects'
import styles from './HomePage.module.css'

export function HomePage() {
  return (
    <div className={styles.page}>
      <section className={styles.quoteSection} aria-label="Quote">
        <blockquote className={styles.quote}>
          <p>“It’s through mistakes that you actually can grow.”</p>
          <cite>Paula Scher</cite>
        </blockquote>
      </section>
      <section className={styles.work} aria-label="Selected work">
        <ul className={styles.grid}>
          {homeGrid.map((item) => (
            <li key={item.slug}>
              <Link to={`/project/${item.slug}`} className={`${styles.card} home-project-card`}>
                <span className={`${styles.cardLabel} hover-underline-ltr`}>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
