import { figma } from '../figmaAssets'
import type { ProjectSlug } from '../data/projects'
import styles from './ProjectContent.module.css'

type Props = {
  slug: ProjectSlug
}

const WINDMILL_MOTION_GIF = '/images/postcards/windmill-motion.gif'

/** Optional stills: export from Figma to `public/images/glue/` with these filenames. */
const GLUE_OPTIONAL_STILLS: { file: string; alt: string }[] = [
  { file: 'explosion.jpg', alt: 'Clay stop motion frame' },
  { file: 'squiggle.jpg', alt: 'Glue lettering study' },
  { file: 'drip.jpg', alt: 'Glue bottle stop motion frame' },
]

const BACKSEAT_COVER = '/images/work/backseat-lovers-album-cover.png'
const MONSTER_ICONS = '/images/work/monster-icons.png'
const GAMER_AUDIENCE_PHOTO = '/images/work/gamer-audience-staged-photo.png'
const VAN_GOGH_CLOCK_MAIN = '/images/work/van-gogh-clock.png'
const MAGAZINE_SPREAD_HERO = '/images/work/magazine-spread.png'
const EDITORIAL_ILLUSTRATION = '/images/work/editorial-illustration.png'
const BODONI_SPECIMIN_POSTER = '/images/work/bodoni-type-specimin-poster.png'
const COLLAGE_PIECE = '/images/work/collage.png'

export function ProjectContent({ slug }: Props) {
  switch (slug) {
    case 'gamer-audience-staged-photo':
      return (
        <div className={styles.block}>
          <div className={styles.wide}>
            <img
              src={GAMER_AUDIENCE_PHOTO}
              alt="Staged photo: neon pink and green tabletop with Nintendo Switch, Joy-Cons, Amiibo figures, paint bottles, brushes, and splatter props"
              className={styles.contain}
            />
          </div>
        </div>
      )
    case 'monster-icons':
      return (
        <div className={styles.block}>
          <div className={styles.wide}>
            <img
              src={MONSTER_ICONS}
              alt="Four hand-drawn monster characters in outlined icon style with smaller matching marks"
              className={styles.contain}
            />
          </div>
        </div>
      )
    case 'backseat-lovers-album-cover':
      return (
        <div className={styles.block}>
          <div className={styles.wide}>
            <img
              src={BACKSEAT_COVER}
              alt="Backseat Lovers album cover collage: Hurry, with torn paper typography and vintage car"
              className={styles.contain}
            />
          </div>
        </div>
      )
    case 'van-gogh-clock':
      return (
        <div className={styles.block}>
          <div className={`${styles.wide} ${styles.clockHero}`}>
            <img
              src={VAN_GOGH_CLOCK_MAIN}
              alt="Wooden paint-palette clock with blue and yellow paint dollops and brush hands"
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
              src={MAGAZINE_SPREAD_HERO}
              alt="Magazine spread: Dog Days, The Essentials — pixel-art OS-style window with product grid and sidebar list"
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
    case 'editorial-illustration':
      return (
        <div className={styles.block}>
          <div className={styles.wide}>
            <img
              src={EDITORIAL_ILLUSTRATION}
              alt="Editorial illustration: takeout coffee cup with foil wrap and hand-drawn ingredient lettering on green"
              className={styles.contain}
            />
          </div>
        </div>
      )
    case 'bodoni-type-specimin-poster':
      return (
        <div className={styles.block}>
          <div className={styles.wide}>
            <img
              src={BODONI_SPECIMIN_POSTER}
              alt="Bodoni type specimen poster: coral and sage grid with character set, large letter studies, and historical text"
              className={styles.contain}
            />
          </div>
        </div>
      )
    case 'collage':
      return (
        <div className={styles.block}>
          <div className={styles.wide}>
            <img
              src={COLLAGE_PIECE}
              alt="Vertical collage on black: torn vertical letters M A D I, layered photos including couple, rose, picnic, pandas, orange VOLS letter signs"
              className={styles.contain}
            />
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
            {
              src: figma.postcards.windmillMotion,
              label: 'Windmills (motion study)',
              motionGif: true,
            },
          ].map((card, i) => (
            <figure key={i} className={styles.postcardCard}>
              {'motionGif' in card && card.motionGif ? (
                <img
                  src={WINDMILL_MOTION_GIF}
                  alt=""
                  className={styles.postcardImg}
                  loading="eager"
                  decoding="async"
                  onError={(e) => {
                    const el = e.currentTarget
                    el.src = card.src
                    el.onerror = null
                  }}
                />
              ) : (
                <img src={card.src} alt="" className={styles.postcardImg} />
              )}
              <figcaption className={styles.caption}>{card.label}</figcaption>
            </figure>
          ))}
        </div>
      )
    case 'elmers-glue-animation':
      return (
        <div className={styles.block}>
          <div className={styles.videoBox}>
            <video
              className={styles.video}
              controls
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
            >
              <source src="/glue-animation.mp4" type="video/mp4" />
            </video>
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
