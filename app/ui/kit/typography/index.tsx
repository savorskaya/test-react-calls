import type { ReactElement, PropsWithChildren } from 'react'
import React from 'react'
import cn from 'classnames'
import styles from './styles.module.css'

type TitleProps = PropsWithChildren & {
  theme: 'table-head' | 'table-row' | 'table-row-secondary'
  className?: string
}

export function Text(props: TitleProps): ReactElement {
  const { theme, className } = props

  const cl = cn(
    styles.text,
    {
      [styles.tableHead]: theme === 'table-head',
      [styles.tableRow]: theme === 'table-row',
      [styles.tableRowSecondary]: theme === 'table-row-secondary'
    },
    className
  )

  return <div className={cl}>{props.children}</div>
}
