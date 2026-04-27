import styles from './MenuMorphButton.module.css'

type Props = {
  open: boolean
  onToggle: () => void
}

export function MenuMorphButton({ open, onToggle }: Props) {
  return (
    <button
      type="button"
      className={styles.trigger}
      onClick={onToggle}
      aria-label={open ? 'Close menu' : 'Open menu'}
      aria-expanded={open}
    >
      <span className={styles.stage} data-open={open || undefined}>
        <span className={`${styles.arm} ${styles.armTop}`}>
          <span className={styles.rotateTop}>
            <span className={styles.bar} />
          </span>
        </span>
        <span className={`${styles.arm} ${styles.armBottom}`}>
          <span className={styles.rotateBottom}>
            <span className={styles.bar} />
          </span>
        </span>
      </span>
    </button>
  )
}
