import { figma } from '../figmaAssets'
import styles from './AboutPage.module.css'

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
          <a href="mailto:mrwilkerson937@gmail.com" className={styles.contact}>
            mrwilkerson937@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/madison-wilkerson-40299a272/"
            className={styles.contact}
            rel="noreferrer"
            target="_blank"
          >
            LinkedIn
          </a>
          <a
            href="https://www.instagram.com/madi.wilkerson.design/"
            className={styles.contact}
            rel="noreferrer"
            target="_blank"
          >
            Instagram
          </a>
        </div>
      </div>
    </div>
  )
}
