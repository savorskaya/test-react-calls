import { memo } from 'react'
import cn from 'classnames'
import styles from './styles.module.css'

export const ratingsArray = ['good', 'bad', 'great', 'none', 'none-script']

const RatingItem = memo(({ rating }: { rating: string }) => {
  const cl = cn(styles.wrapper, {
    [styles.good]: rating === 'good',
    [styles.bad]: rating === 'bad',
    [styles.great]: rating === 'great',
    [styles.noneScript]: rating === 'none-script'
  })

  if (rating === 'none') return null

  return (
    <div className={cl}>
      {rating === 'none-script' && <div>Скрипт не использован</div>}
      {rating === 'good' && <div>Хорошо</div>}
      {rating === 'bad' && <div>Плохо</div>}
      {rating === 'great' && <div>Отлично</div>}
    </div>
  )
})

RatingItem.displayName = 'RatingItem'

export default RatingItem
