import { PropsWithChildren } from 'react'
import { ReactClickOutside } from '@coxy/react-click-outside'
import cn from 'classnames'
import styles from './styles.module.css'

export const Popover = ({
  children,
  onClose,
  isOpen,
  className
}: PropsWithChildren & {
  isOpen: boolean
  onClose: () => void
  className?: string
}) => {
  return (
    <ReactClickOutside onClose={onClose} visible={isOpen}>
      <div className={cn(styles.popover, className)}>{children}</div>
    </ReactClickOutside>
  )
}
