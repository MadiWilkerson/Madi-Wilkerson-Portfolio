import { useCallback, useEffect, useRef, useState, type ReactNode, type TransitionEvent } from 'react'
import { Link } from 'react-router-dom'
import { NameLogo } from '../components/NameLogo'
import { projects, type ProjectMeta } from '../data/projects'
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

function ProjectGallery({ project }: { project: ProjectMeta }) {
  if (project.coverVideo) {
    return (
      <div className={styles.panelGallery}>
        <video className={styles.panelMedia} muted autoPlay loop playsInline controls preload="auto">
          <source src={project.coverVideo} type="video/mp4" />
        </video>
      </div>
    )
  }

  const slides = project.coverSlides?.filter(Boolean) ?? []
  if (slides.length > 0) {
    return (
      <div className={styles.panelGallery}>
        {slides.map((src) => (
          <img key={src} src={src} alt="" className={styles.panelMedia} />
        ))}
      </div>
    )
  }

  if (project.coverImage) {
    return (
      <div className={styles.panelGallery}>
        <img src={project.coverImage} alt="" className={styles.panelMedia} />
      </div>
    )
  }

  return null
}

const PANEL_TITLE_ID = 'work-project-panel-title'

export function WorkPage() {
  const [detailIndex, setDetailIndex] = useState<number | null>(null)
  const [panelEntered, setPanelEntered] = useState(false)
  const closeBtnRef = useRef<HTMLButtonElement>(null)
  const prevDetailIndexRef = useRef<number | null>(null)

  const reduceMotion =
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  useEffect(() => {
    if (detailIndex === null) {
      setPanelEntered(false)
      prevDetailIndexRef.current = null
      return
    }

    const openingFromClosed = prevDetailIndexRef.current === null
    prevDetailIndexRef.current = detailIndex

    if (!openingFromClosed) {
      setPanelEntered(true)
      return
    }

    if (reduceMotion) {
      setPanelEntered(true)
      return
    }

    setPanelEntered(false)
    const id = requestAnimationFrame(() => setPanelEntered(true))
    return () => cancelAnimationFrame(id)
  }, [detailIndex, reduceMotion])

  useEffect(() => {
    if (detailIndex === null || !panelEntered) return
    closeBtnRef.current?.focus()
  }, [detailIndex, panelEntered])

  const closePanel = useCallback(() => {
    if (reduceMotion) {
      setDetailIndex(null)
      setPanelEntered(false)
      return
    }
    setPanelEntered(false)
  }, [reduceMotion])

  useEffect(() => {
    if (detailIndex === null) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closePanel()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [detailIndex, closePanel])

  useEffect(() => {
    if (detailIndex === null) return
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prevOverflow
    }
  }, [detailIndex])

  function openPanel(index: number) {
    setDetailIndex(index)
  }

  function onPanelTransitionEnd(e: TransitionEvent<HTMLDivElement>) {
    if (e.propertyName !== 'transform') return
    if (!panelEntered) setDetailIndex(null)
  }

  function goPrev() {
    setDetailIndex((i) =>
      i === null ? null : (i + projects.length - 1) % projects.length
    )
  }

  function goNext() {
    setDetailIndex((i) => (i === null ? null : (i + 1) % projects.length))
  }

  const activeProject = detailIndex !== null ? projects[detailIndex] : null

  return (
    <>
      <div className={styles.page}>
        <section className={styles.section} aria-label="Selected work">
          <ul className={styles.grid}>
            {projects.map((project, index) => {
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
                  <button
                    type="button"
                    className={styles.card}
                    onClick={() => openPanel(index)}
                    aria-expanded={detailIndex === index}
                    aria-label={`Open details: ${project.title}`}
                  >
                    <div className={styles.thumbWrap}>
                      <div className={styles.thumbMedia}>{thumbInner}</div>
                    </div>
                    <p className={styles.label}>
                      <span className={styles.titleMark}>{project.title}</span>
                    </p>
                  </button>
                </li>
              )
            })}
          </ul>
        </section>
      </div>

      {activeProject !== null && (
        <div
          className={`${styles.dropPanel} ${panelEntered ? styles.dropPanelOpen : ''}`}
          role="dialog"
          aria-modal="true"
          aria-labelledby={PANEL_TITLE_ID}
          onTransitionEnd={onPanelTransitionEnd}
        >
          <div className={styles.panelTopBar}>
            <Link to="/" className={styles.panelLogoLink} aria-label="Madi Wilkerson home">
              <NameLogo />
            </Link>
            <button
              ref={closeBtnRef}
              type="button"
              className={styles.panelClose}
              onClick={closePanel}
              aria-label="Close project details"
            >
              ×
            </button>
          </div>

          <div className={styles.panelScroll}>
            <h2 id={PANEL_TITLE_ID} className={styles.panelTitle}>
              {activeProject.title}
            </h2>
            <div className={styles.panelIntro}>{activeProject.intro}</div>
            <ProjectGallery project={activeProject} />
          </div>

          <div className={styles.panelCornerNav}>
            <button
              type="button"
              className={styles.panelNavBtn}
              onClick={goPrev}
              aria-label="Previous project"
            >
              &lt;
            </button>
            <button
              type="button"
              className={styles.panelNavBtn}
              onClick={goNext}
              aria-label="Next project"
            >
              &gt;
            </button>
          </div>
        </div>
      )}
    </>
  )
}
