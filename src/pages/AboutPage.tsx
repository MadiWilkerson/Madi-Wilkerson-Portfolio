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
        <ul className={styles.links}>
          <li>
            <a href="mailto:mrwilkerson937@gmail.com">mrwilkerson937@gmail.com</a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/madison-wilkerson-40299a272/"
              rel="noreferrer"
              target="_blank"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/madi.wilkerson.design/"
              rel="noreferrer"
              target="_blank"
            >
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
