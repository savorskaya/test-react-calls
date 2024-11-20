import styles from './styles.module.css'

export const Avatar = ({ imgUrl }: { imgUrl?: string; name?: string }) => {
  if (imgUrl) return <img alt="" src={imgUrl} className={styles.img} />

  return (
    <div className={styles.wrapperImage}>
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.00008 6.00008C7.47341 6.00008 8.66675 4.80675 8.66675 3.33341C8.66675 1.86008 7.47341 0.666748 6.00008 0.666748C4.52675 0.666748 3.33341 1.86008 3.33341 3.33341C3.33341 4.80675 4.52675 6.00008 6.00008 6.00008ZM6.00008 7.33342C4.22008 7.33342 0.666748 8.22675 0.666748 10.0001V11.3334H11.3334V10.0001C11.3334 8.22675 7.78008 7.33342 6.00008 7.33342Z"
          fill="#ADBFDF"
        />
      </svg>
    </div>
  )
}