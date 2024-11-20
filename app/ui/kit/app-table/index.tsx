import React, { useCallback, useState } from 'react'
import { Call } from '@/app/store/reducers/calls/types'
import { TableHead } from '@/app/ui/kit/app-table/components/table-head'
import { TableRow } from '@/app/ui/kit/app-table/components/table-row'
import { Loader } from '@/app/ui/kit/loader'
import { SortDateTag } from '@/app/ui/kit/sort-date-tag'
import { SortTypeTag } from '@/app/ui/kit/sort-type-tag'
import styles from './styles.module.css'

export type SortType = 'ASC' | 'DESC'

export function AppTable({ calls }: { calls: Call[] }) {
  const [sortTime, setSortTime] = useState<SortType>('DESC')
  const [sortDuration, setDuration] = useState<SortType>('DESC')

  const handleSortList = useCallback(() => {
    const callsCopy = [...calls]
    if (sortTime === 'ASC') {
      callsCopy.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    }
    if (sortTime === 'DESC') {
      callsCopy.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    }

    if (sortDuration === 'ASC') {
      callsCopy.sort((a, b) => a.time - b.time)
    }
    if (sortDuration === 'DESC') {
      callsCopy.sort((a, b) => b.time - a.time)
    }
    return callsCopy
  }, [calls, sortTime, sortDuration])

  const sortedList = handleSortList()

  return (
    <div className={styles.columnTable}>
      <div className={styles.sortingRow}>
        <SortTypeTag />
        <SortDateTag />
      </div>
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <TableHead
            sortTime={sortTime}
            setSortTime={setSortTime}
            sortDuration={sortDuration}
            setDuration={setDuration}
          />
          {!sortedList && (
            <th className={styles.emptyRow} colSpan={8}>
              <div className={styles.centerCashFlow}>
                <Loader />
              </div>
            </th>
          )}
          {sortedList && (
            <tbody>{sortedList?.map((item) => <TableRow key={item.id} call={item} />)}</tbody>
          )}
        </table>
      </div>
    </div>
  )
}
