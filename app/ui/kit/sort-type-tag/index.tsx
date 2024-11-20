import { useToggle } from '@coxy/utils/dist/use/use-toggle'
import cn from 'classnames'
import { useAppDispatch, useAppSelector } from '@/app/store/hooks'
import { selectedSortType, setSortType } from '@/app/store/reducers/calls'
import { SortTypeByType } from '@/app/store/reducers/calls/types'
import { IconArrow } from '@/app/ui/kit/icons/Arrow'
import { Popover } from '@/app/ui/kit/popover'
import styles from './styles.module.css'

export const SortTypeTag = () => {
  const [isOpen, , onClose, toggle] = useToggle(false)
  const activeType = useAppSelector(selectedSortType)
  const activeTypeAll = !activeType
  const activeTypeIn = activeType === '1'
  const activeTypeOut = activeType === '0'
  const dispatch = useAppDispatch()

  const handleChangeType = (type: SortTypeByType) => {
    dispatch(setSortType(type))
    onClose()
  }

  return (
    <div className="relative">
      <div className={cn(styles.wrapper, { [styles.wrapperOpen]: isOpen })} onClick={toggle}>
        {activeTypeAll && 'Все типы'}
        {activeTypeIn && 'Входящие'}
        {activeTypeOut && 'Исходящие'}

        <IconArrow className={styles.arrow} />
      </div>

      <Popover isOpen={isOpen} onClose={onClose}>
        <div onClick={() => handleChangeType('')} className={activeTypeAll ? styles.active : ''}>
          Все типы
        </div>
        <div onClick={() => handleChangeType('1')} className={activeTypeIn ? styles.active : ''}>
          Входящие
        </div>
        <div onClick={() => handleChangeType('0')} className={activeTypeOut ? styles.active : ''}>
          Исходящие
        </div>
      </Popover>
    </div>
  )
}
