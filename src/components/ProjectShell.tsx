import { Link } from 'react-router-dom'
import type { ProjectMeta } from '../data/projects'
import { NextProjectLink } from './NextProjectLink'
import styles from './ProjectShell.module.css'

type Props = {
  project: ProjectMeta
  children: React.ReactNode
}

export function ProjectShell({ project, children }: Props) {
  return (
    <article>
      <div className={styles.prose}>
        <h1 className={styles.title}>{project.title}</h1>
        <div className={styles.intro}>{project.intro}</div>
      </div>
      {children}
      <NextProjectLink to={project.next.slug} label={project.next.label} />
      <p className={styles.back}>
        <Link to="/">← All work</Link>
      </p>
    </article>
  )
}
