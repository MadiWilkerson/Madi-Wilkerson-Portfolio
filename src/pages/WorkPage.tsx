import { useEffect, useState, type ReactNode } from 'react'
import { projects } from '../data/projects'
import styles from './WorkPage.module.css'

const DEFAULT_SLIDE_MS = 10_000

function RotatingCoverSlides({
  slides,
  intervalMs,
}: {
  slides: string[]
  intervalMs: number
}) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    slides.forEach((src) => {
      const img = new Image()
      img.src = src
    })
  }, [slides])

  useEffect(() => {
    if (slides.length <= 1) return

    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    let id: ReturnType<typeof setInterval> | undefined

    const start = () => {
      id = setInterval(() => {
        setIndex((i) => (i + 1) % slides.length)
      }, Math.max(2000, intervalMs))
    }

    if (!mq.matches) start()

    const onChange = () => {
      if (id) clearInterval(id)
      if (!mq.matches) start()
    }
    mq.addEventListener('change', onChange)

    return () => {
      if (id) clearInterval(id)
      mq.removeEventListener('change', onChange)
    }
  }, [slides, intervalMs])

  return (
    <div className={styles.thumbRotator}>
      {slides.map((src, i) => (
        <img
          key={src}
          src={src}
          alt=""
          className={`${styles.thumbSlide} ${i === index ? styles.thumbSlideActive : ''}`}
        />
      ))}
    </div>
  )
}

export function WorkPage() {
  return (
    <div className={styles.page}>
      <section className={styles.section} aria-label="Selected work">
        <ul className={styles.grid}>
          {projects.map((project) => {
            const slideList = project.coverSlides?.filter(Boolean) ?? []

            let thumbInner: ReactNode
            if (project.coverVideo) {
              thumbInner = (
                <video
                  className={styles.thumb}
                  muted
                  autoPlay
                  loop
                  playsInline
                  preload="auto"
                >
                  <source src={project.coverVideo} type="video/mp4" />
                </video>
              )
            } else if (slideList.length > 0) {
              thumbInner = (
                <RotatingCoverSlides
                  slides={slideList}
                  intervalMs={project.slideIntervalMs ?? DEFAULT_SLIDE_MS}
                />
              )
            } else if (project.coverImage) {
              thumbInner = <img src={project.coverImage} alt="" className={styles.thumb} />
            } else {
              thumbInner = <span className={styles.placeholder} aria-hidden />
            }

            return (
              <li key={project.slug} className={styles.item}>
                <div className={styles.card} tabIndex={0}>
                  <div className={styles.thumbWrap}>
                    <div className={styles.thumbMedia}>
                      {thumbInner}
                      <div className={styles.popover} role="tooltip">
                        <div className={styles.popoverBody}>{project.intro}</div>
                      </div>
                    </div>
                  </div>
                  <p className={styles.label}>
                    <span className={styles.titleMark}>{project.title}</span>
                  </p>
                </div>
              </li>
            )
          })}
        </ul>
      </section>
    </div>
  )
}
