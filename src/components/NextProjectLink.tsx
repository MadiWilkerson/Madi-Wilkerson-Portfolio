import { Link } from 'react-router-dom'
import type { ProjectSlug } from '../data/projects'
import styles from './NextProjectLink.module.css'

type Props = {
  to: ProjectSlug
  label: string
}

export function NextProjectLink({ to, label }: Props) {
  return (
    <div className={styles.wrap}>
      <Link to={`/project/${to}`} className={`${styles.link} hover-underline-ltr`}>
        {label}
        <span className={styles.arrow} aria-hidden>
          &nbsp;›
        </span>
      </Link>
    </div>
  )
}
