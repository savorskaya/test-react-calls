import cn from 'classnames'
import styles from './styles.module.css'

export function IconArrow({ className }: { className?: string }) {
  return (
    <div className={cn(styles.iconWrapper, className)}>
      <svg
        width="18"
        height="21"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_1_866)">
          <path d="M12 8L6 14L7.41 15.41L12 10.83L16.59 15.41L18 14L12 8Z" fill="inherit" />
        </g>
        <defs>
          <clipPath id="clip0_1_866">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  )
}
