import { useToggle } from '@coxy/utils/dist/use/use-toggle'
import cn from 'classnames'
import { useAppDispatch, useAppSelector } from '@/app/store/hooks'
import { selectedSortDate, setDateType } from '@/app/store/reducers/calls'
import { SortTypeByDate } from '@/app/store/reducers/calls/types'
import { IconArrow } from '@/app/ui/kit/icons/Arrow'
import { IconCalendar } from '@/app/ui/kit/icons/Calendar'
import { Popover } from '@/app/ui/kit/popover'
import styles from './styles.module.css'

export const SortDateTag = () => {
  const [isOpen, , onClose, toggle] = useToggle(false)
  const activeDateType = useAppSelector(selectedSortDate)
  const activeDateTypeThreeDays = activeDateType === 'three-days'
  const activeDateTypeThreeWeek = activeDateType === 'week'
  const dispatch = useAppDispatch()

  const handleChangeType = (type: SortTypeByDate) => {
    dispatch(setDateType(type))
    onClose()
  }

  return (
    <div className="relative">
      <div className={cn(styles.wrapper, { [styles.wrapperOpen]: isOpen })} onClick={toggle}>
        <IconArrow className={styles.arrowLeft} />
        <IconCalendar className={styles.iconCalendar} />
        {activeDateTypeThreeDays && '3 дня'}
        {activeDateTypeThreeWeek && 'Неделя'}

        <IconArrow className={styles.arrowRight} />
      </div>

      <Popover className={styles.popover} isOpen={isOpen} onClose={onClose}>
        <div
          onClick={() => handleChangeType('three-days')}
          className={activeDateTypeThreeDays ? styles.active : ''}
        >
          3 дня
        </div>
        <div
          onClick={() => handleChangeType('week')}
          className={activeDateTypeThreeWeek ? styles.active : ''}
        >
          Неделя
        </div>
        <div className={styles.disabled}>Месяц</div>
        <div className={styles.disabled}>Год</div>
        <div className={cn(styles.disabled, styles.column)}>
          <div>Указать даты</div>
          <div className={styles.row}>
            <span>__.__.__-__.__.__</span> <IconCalendar />
          </div>
        </div>
      </Popover>
    </div>
  )
}
