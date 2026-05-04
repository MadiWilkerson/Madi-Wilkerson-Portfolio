import { figma } from '../figmaAssets'
import detailStyles from './ProjectContent.module.css'
import styles from './AboutPage.module.css'

const WEBZINE_VIDEO_MP4 = '/video/8-bit-dog-webzine.mp4'
const WEBZINE_VIDEO_MOV = '/video/8-bit-dog-webzine.mov'
const FINVENTORY_VIDEO_MP4 = '/video/finventory-recording.mp4'
const FINVENTORY_VIDEO_MOV = '/video/finventory-recording.mov'

export function AboutPage() {
  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        <div className={styles.photoFrame}>
          <img
            src={figma.aboutPhoto}
            alt="Madi Wilkerson"
            className={styles.photo}
            width={420}
            height={420}
          />
        </div>
        <h1 className={styles.heading}>Hi - I’m Madi!</h1>
        <p className={styles.bio}>
          I am currently studying graphic design at the University of Tennessee. While my main goal
          is to work alongside wildlife conservation as a graphic designer, I also enjoy taking care
          of my pets and other forms of art such as ceramics, painting, and card making.
        </p>
        <div className={styles.contacts}>
          <a
            href="mailto:mrwilkerson937@gmail.com"
            className={`hover-underline-ltr ${styles.contact}`}
          >
            mrwilkerson937@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/madison-wilkerson-40299a272/"
            className={`hover-underline-ltr ${styles.contact}`}
            rel="noreferrer"
            target="_blank"
          >
            LinkedIn
          </a>
          <a
            href="https://www.instagram.com/madi.wilkerson.design/"
            className={`hover-underline-ltr ${styles.contact}`}
            rel="noreferrer"
            target="_blank"
          >
            Instagram
          </a>
        </div>
        <section className={styles.webzine} aria-labelledby="about-webzine-heading">
          <h2 id="about-webzine-heading" className={styles.webzineTitle}>
            8-bit Dog Webzine
          </h2>
          <div className={detailStyles.wide}>
            <video
              className={detailStyles.contain}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              aria-label="8-bit Dog Webzine screen recording"
            >
              <source src={WEBZINE_VIDEO_MP4} type="video/mp4" />
              <source src={WEBZINE_VIDEO_MOV} type="video/quicktime" />
            </video>
          </div>
        </section>
        <section className={styles.webzine} aria-labelledby="about-finventory-heading">
          <h2 id="about-finventory-heading" className={styles.webzineTitle}>
            Finventory
          </h2>
          <div className={detailStyles.wide}>
            <video
              className={detailStyles.contain}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              aria-label="Finventory app screen recording"
            >
              <source src={FINVENTORY_VIDEO_MP4} type="video/mp4" />
              <source src={FINVENTORY_VIDEO_MOV} type="video/quicktime" />
            </video>
          </div>
        </section>
      </div>
    </div>
  )
}
