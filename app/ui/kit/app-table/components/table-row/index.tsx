import React, { useMemo, useState } from 'react'
import { randomFromArray } from '@coxy/utils'
import { format } from 'date-fns'
import { useAppDispatch } from '@/app/store/hooks'
import { getRecord } from '@/app/store/reducers/calls/actions/get-record'
import { Call } from '@/app/store/reducers/calls/types'
import { AudioPlayer } from '@/app/ui/kit/audio-player'
import { Avatar } from '@/app/ui/kit/avatar'
import { RatingItem, ratingsArray } from '@/app/ui/kit/rating-item'
import { TypeItem } from '@/app/ui/kit/type-item'
import { Text } from '@/app/ui/kit/typography'
import { stringToNumber } from '@/utils/strings'
import { secondsToMinutes } from '@/utils/time'
import styles from './styles.module.css'

export function TableRow({ call }: { call: Call }) {
  const [isOpen, setIsOpen] = useState(false)
  const rating = useMemo(() => randomFromArray(ratingsArray), [call])
  const dispatch = useAppDispatch()

  const handleOpenAudio = async () => {
    if (!call.record || !call.partnership_id) return

    const res = await dispatch(
      getRecord({ recordId: call.record, partnership_id: call.partnership_id })
    ).unwrap()

    if (res && !isOpen) {
      setIsOpen(true)
    }
  }

  return (
    <tr className={styles.tableRow} onClick={handleOpenAudio}>
      <td />
      <td>
        <TypeItem type={call.status} isIncoming={call.in_out === 1} />
      </td>
      <td>
        <Text theme="table-row">{format(new Date(call.date), 'HH:mm')}</Text>
      </td>
      <td>
        <Avatar
          imgUrl={call?.person_avatar}
          name={`${call?.person_name} ${call?.person_surname}`}
        />
      </td>
      <td>
        <Text theme="table-row">{stringToNumber(call?.partner_data?.phone)}</Text>
      </td>
      <td>
        <Text theme="table-row-secondary">{call?.partner_data?.name}</Text>
      </td>
      <td>
        <RatingItem rating={rating} />
      </td>
      <td align="right">
        {isOpen ? (
          <AudioPlayer onClose={() => setIsOpen(false)} src="/sample-6s.mp3" />
        ) : (
          <>{call.time > 0 && <Text theme="table-row">{secondsToMinutes(call.time)}</Text>}</>
        )}
      </td>
    </tr>
  )
}
