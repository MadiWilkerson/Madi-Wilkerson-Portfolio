import { projects } from '../data/projects'
import styles from './WorkPage.module.css'

export function WorkPage() {
  return (
    <div className={styles.page}>
      <section className={styles.section} aria-label="Selected work">
        <ul className={styles.grid}>
          {projects.map((project) => (
            <li key={project.slug} className={styles.item}>
              <div className={styles.card} tabIndex={0}>
                <div className={styles.thumbWrap}>
                  {project.coverImage ? (
                    <img src={project.coverImage} alt="" className={styles.thumb} />
                  ) : (
                    <span className={styles.placeholder} aria-hidden />
                  )}
                  <div className={styles.popover} role="tooltip">
                    <div className={styles.popoverBody}>{project.intro}</div>
                  </div>
                </div>
                <p className={styles.label}>
                  <span className={styles.titleMark}>{project.title}</span>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
