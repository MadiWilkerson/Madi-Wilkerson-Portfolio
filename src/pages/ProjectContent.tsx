import { figma } from '../figmaAssets'
import type { ProjectSlug } from '../data/projects'
import styles from './ProjectContent.module.css'

type Props = {
  slug: ProjectSlug
}

export function ProjectContent({ slug }: Props) {
  switch (slug) {
    case 'van-gogh-clock':
      return (
        <div className={styles.block}>
          <div className={styles.wide}>
            <img
              src={figma.clock.hero}
              alt="Van Gogh themed clock built as a paint palette with paint dollops as numbers"
              className={styles.contain}
            />
          </div>
          <div className={styles.pair}>
            <figure className={styles.frame}>
              <img src={figma.clock.yellow} alt="Yellow paint texture detail" />
            </figure>
            <figure className={styles.frame}>
              <img src={figma.clock.blue} alt="Blue paint texture detail" />
            </figure>
          </div>
        </div>
      )
    case 'scribbld':
      return (
        <div className={styles.block}>
          <div className={styles.pair}>
            <div className={styles.placeholder} role="img" aria-label="App mockup placeholder" />
            <div className={styles.placeholder} role="img" aria-label="App mockup placeholder" />
          </div>
          <div className={styles.wideShort}>
            <div className={styles.placeholder} role="img" aria-label="App flow placeholder" />
          </div>
        </div>
      )
    case 'magazine-spread':
      return (
        <div className={styles.block}>
          <div className={styles.pair}>
            <figure className={styles.frame}>
              <img src={figma.magazine.b} alt="Magazine spread detail" />
            </figure>
            <figure className={styles.frame}>
              <img src={figma.magazine.a} alt="Magazine spread detail" />
            </figure>
          </div>
        </div>
      )
    case 'netherlands-postcards':
      return (
        <div className={styles.postcardsGrid}>
          {[
            { src: figma.postcards.amstel, label: 'Amstel River' },
            { src: figma.postcards.gingerbread, label: 'Gingerbread Houses' },
            { src: figma.postcards.vangogh, label: 'Van Gogh Museum' },
            { src: figma.postcards.tulips, label: 'Bollenstreek' },
            { src: figma.postcards.windmill, label: 'Windmills' },
            { src: figma.postcards.windmill, label: 'Windmills (motion study)' },
          ].map((card, i) => (
            <figure key={i} className={styles.postcardCard}>
              <img src={card.src} alt="" className={styles.postcardImg} />
              <figcaption className={styles.caption}>{card.label}</figcaption>
            </figure>
          ))}
        </div>
      )
    case 'elmers-glue-animation':
      return (
        <div className={styles.block}>
          <p className={styles.videoNote}>
            Add your exported video as <code>public/glue-animation.mp4</code> to embed it here, or
            drop in a YouTube or Vimeo link in the project files.
          </p>
          <div className={styles.videoBox}>
            <video className={styles.video} controls playsInline preload="metadata">
              <source src="/glue-animation.mp4" type="video/mp4" />
            </video>
            <p className={styles.fallbackText}>
              If the video does not play, add <code>glue-animation.mp4</code> to the{' '}
              <code>public</code> folder.
            </p>
          </div>
        </div>
      )
    case 'hot-sauce-bottles':
      return (
        <div className={styles.block}>
          <div className={styles.wideTall}>
            <img
              src={figma.hotSauce.labels1}
              alt="Los Muertos hot sauce label designs"
              className={styles.cover}
            />
          </div>
          <div className={styles.wideTall}>
            <img
              src={figma.hotSauce.bottle1}
              alt="Los Muertos hot sauce bottle"
              className={styles.cover}
            />
          </div>
          <div className={styles.wideTall}>
            <img
              src={figma.hotSauce.labels2}
              alt="What The Fish hot sauce label"
              className={styles.cover}
            />
          </div>
          <div className={styles.wideTall}>
            <img
              src={figma.hotSauce.bottle2}
              alt="What The Fish hot sauce bottle"
              className={styles.cover}
            />
          </div>
        </div>
      )
    default:
      return null
  }
}
