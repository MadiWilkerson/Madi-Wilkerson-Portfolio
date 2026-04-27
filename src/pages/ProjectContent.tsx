import { figma } from '../figmaAssets'
import type { ProjectSlug } from '../data/projects'
import styles from './ProjectContent.module.css'

type Props = {
  slug: ProjectSlug
}

const POSTCARD_BACKS: { src: string; label: string }[] = [
  { src: figma.postcards.backs.pb1, label: 'Postcard label detail' },
  { src: figma.postcards.backs.pb2, label: 'Postcard back' },
  { src: figma.postcards.backs.pb3, label: 'Postcard back typography' },
  { src: figma.postcards.backs.pb4, label: 'Postcard back' },
  { src: figma.postcards.backs.back, label: 'Address side' },
]

/** Optional stills: export from Figma to `public/images/glue/` with these filenames. */
const GLUE_OPTIONAL_STILLS: { file: string; alt: string }[] = [
  { file: 'explosion.jpg', alt: 'Clay stop motion frame' },
  { file: 'squiggle.jpg', alt: 'Glue lettering study' },
  { file: 'drip.jpg', alt: 'Glue bottle stop motion frame' },
]

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
          <p className={styles.placeholderNote}>
            SCRIBBLD mockups in Figma are still placeholder frames—add exported screens to{' '}
            <code>public/images/scribbld/</code> (e.g. <code>screen-a.png</code>,{' '}
            <code>screen-b.png</code>, <code>flow.png</code>) when you have final art.
          </p>
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
          <div className={styles.wide}>
            <img
              src={figma.magazine.hero}
              alt="Magazine spread: Dog Days, The Essentials — full spread layout"
              className={styles.contain}
            />
          </div>
          <div className={styles.pair}>
            <figure className={styles.frame}>
              <img src={figma.magazine.detailLeft} alt="Magazine spread pixel art product detail" />
            </figure>
            <figure className={styles.frame}>
              <img src={figma.magazine.detailRight} alt="Magazine spread pixel art product detail" />
            </figure>
          </div>
        </div>
      )
    case 'netherlands-postcards':
      return (
        <>
          <div className={styles.postcardsGrid}>
            {[
              { src: figma.postcards.amstel, label: 'Amstel River' },
              { src: figma.postcards.gingerbread, label: 'Gingerbread Houses' },
              { src: figma.postcards.vangogh, label: 'Van Gogh Museum' },
              { src: figma.postcards.tulips, label: 'Bollenstreek' },
              { src: figma.postcards.windmill, label: 'Windmills' },
              { src: figma.postcards.windmillMotion, label: 'Windmills (motion study)' },
            ].map((card, i) => (
              <figure key={i} className={styles.postcardCard}>
                <img src={card.src} alt="" className={styles.postcardImg} />
                <figcaption className={styles.caption}>{card.label}</figcaption>
              </figure>
            ))}
          </div>
          <div className={styles.backsSection}>
            <p className={styles.backsLead}>Postcard backs and printed details</p>
            <ul className={styles.backsList}>
              {POSTCARD_BACKS.map((item) => (
                <li key={item.src} className={styles.backsItem}>
                  <figure className={styles.backsFigure}>
                    <img src={item.src} alt="" className={styles.backsImg} />
                    <figcaption className={styles.backsCaption}>{item.label}</figcaption>
                  </figure>
                </li>
              ))}
            </ul>
          </div>
        </>
      )
    case 'elmers-glue-animation':
      return (
        <div className={styles.block}>
          <p className={styles.videoNote}>
            Add your exported video as <code>public/glue-animation.mp4</code>. Optional poster:{' '}
            <code>public/glue-animation-poster.jpg</code> (shown before the video loads). Optional
            stills below: <code>public/images/glue/explosion.jpg</code>,{' '}
            <code>squiggle.jpg</code>, <code>drip.jpg</code>.
          </p>
          <div className={styles.videoBox}>
            <video
              className={styles.video}
              controls
              playsInline
              preload="metadata"
              poster="/glue-animation-poster.jpg"
            >
              <source src="/glue-animation.mp4" type="video/mp4" />
            </video>
            <p className={styles.fallbackText}>
              If the video does not play, add <code>glue-animation.mp4</code> to the{' '}
              <code>public</code> folder.
            </p>
          </div>
          <div className={styles.glueStills}>
            {GLUE_OPTIONAL_STILLS.map(({ file, alt }) => (
              <figure key={file} className={styles.glueStill}>
                <img
                  src={`/images/glue/${file}`}
                  alt={alt}
                  className={styles.glueStillImg}
                  loading="lazy"
                  onError={(e) => {
                    const fig = e.currentTarget.closest('figure')
                    if (fig) fig.style.display = 'none'
                  }}
                />
              </figure>
            ))}
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
