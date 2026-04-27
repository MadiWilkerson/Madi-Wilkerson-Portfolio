import { figma } from '../figmaAssets'
import styles from './AboutPage.module.css'

export function AboutPage() {
  return (
    <div className={styles.page}>
      <div className={styles.top}>
        <div className={styles.photoFrame}>
          <img
            src={figma.aboutPhoto}
            alt="Madi Wilkerson"
            className={styles.photo}
            width={602}
            height={602}
          />
        </div>
        <h1 className={styles.heading}>Hi — I’m Madi!</h1>
        <p className={styles.bio}>
          I am currently studying graphic design at the University of Tennessee. While my main goal
          is to work alongside wildlife conservation as a graphic designer, I also enjoy taking care
          of my pets and other forms of art such as ceramics, painting, and card making.
        </p>
      </div>
      <div className={styles.bottom}>
        <p className={styles.srConnect}>Connect</p>
        <ul className={styles.socialList}>
          <li>
            <a href="mailto:hello@example.com" className={styles.socialLink} aria-label="Email">
              <img src={figma.iconEmail} alt="" width={333} height={238} className={styles.icon} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/"
              className={styles.socialLink}
              rel="noreferrer"
              target="_blank"
              aria-label="LinkedIn"
            >
              <img
                src={figma.iconLinkedin}
                alt=""
                width={230}
                height={222}
                className={styles.icon}
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/"
              className={styles.socialLink}
              rel="noreferrer"
              target="_blank"
              aria-label="Instagram"
            >
              <img
                src={figma.iconInstagram}
                alt=""
                width={288}
                height={263}
                className={styles.icon}
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
