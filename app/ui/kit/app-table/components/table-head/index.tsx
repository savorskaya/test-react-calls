import React from 'react'
import cn from 'classnames'
import { SortType } from '@/app/ui/kit/app-table'
import { IconArrow } from '@/app/ui/kit/icons/Arrow'
import { Text } from '@/app/ui/kit/typography'
import styles from './styles.module.css'

export function TableHead({
  sortTime,
  setSortTime,
  sortDuration,
  setDuration
}: {
  sortTime: SortType
  setSortTime: (type: SortType) => void
  sortDuration: SortType
  setDuration: (type: SortType) => void
}) {
  return (
    <thead>
      <tr>
        <td style={{ width: 30 }} />
        <td style={{ width: 54 }}>
          <div className={styles.row}>
            <Text theme="table-head">Тип</Text>
          </div>
        </td>
        <td
          style={{ width: 88 }}
          onClick={() => {
            if (sortTime === 'ASC') {
              setSortTime('DESC')
              return
            }
            setSortTime('ASC')
          }}
        >
          <div className={styles.row}>
            <Text theme="table-head">Время</Text>
            <IconArrow className={sortTime === 'DESC' ? styles.arrowDown : styles.arrow} />
          </div>
        </td>
        <td style={{ width: 129 }}>
          <div className={styles.row}>
            <Text theme="table-head">Сотрудник</Text>
          </div>
        </td>
        <td style={{ width: 225 }}>
          <div className={styles.row}>
            <Text theme="table-head">Звонок</Text>
          </div>
        </td>
        <td style={{ width: 214 }}>
          <div className={styles.row}>
            <Text theme="table-head">Источник</Text>
          </div>
        </td>
        <td style={{ width: 200 }}>
          <div className={styles.row}>
            <Text theme="table-head">Оценка</Text>
          </div>
        </td>
        <td
          style={{ width: 390 }}
          onClick={() => {
            if (sortDuration === 'ASC') {
              setDuration('DESC')
              return
            }
            setDuration('ASC')
          }}
        >
          <div className={cn(styles.row, styles.end)}>
            <Text theme="table-head">Длительность</Text>
            <IconArrow className={sortDuration === 'DESC' ? styles.arrowDown : styles.arrow} />
          </div>
        </td>
      </tr>
    </thead>
  )
}
