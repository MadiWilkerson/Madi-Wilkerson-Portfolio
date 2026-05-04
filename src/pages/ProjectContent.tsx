import { figma } from '../figmaAssets'
import { netherlandsPostcardAssets, type ProjectSlug } from '../data/projects'
import styles from './ProjectContent.module.css'

type Props = {
  slug: ProjectSlug
}

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
const HOT_SAUCE_LOS_BOTTLE = '/images/work/hot-sauce-los-bottle.png'
const HOT_SAUCE_WTF_BOTTLE = '/images/work/hot-sauce-wtf-bottle.png'

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
          {netherlandsPostcardAssets.map((card) => (
            <figure key={card.src} className={styles.postcardCard}>
              <img src={card.src} alt="" className={styles.postcardImg} />
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
          <div className={styles.pair}>
            <figure className={styles.frame}>
              <img
                src={HOT_SAUCE_LOS_BOTTLE}
                alt="Los Muertos hot sauce bottle with papel picado–inspired label"
              />
            </figure>
            <figure className={styles.frame}>
              <img
                src={HOT_SAUCE_WTF_BOTTLE}
                alt="What The Fish hot sauce bottle with fish-themed label"
              />
            </figure>
          </div>
        </div>
      )
    case '8-bit-dog-webzine':
      return (
        <div className={styles.block}>
          <div className={styles.wide}>
            <video
              className={styles.contain}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              aria-label="8-bit Dog Webzine screen recording"
            >
              <source src="/video/8-bit-dog-webzine.mp4" type="video/mp4" />
              <source src="/video/8-bit-dog-webzine.mov" type="video/quicktime" />
            </video>
          </div>
        </div>
      )
    default:
      return null
  }
}
