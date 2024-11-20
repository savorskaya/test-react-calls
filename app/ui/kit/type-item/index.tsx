import { Incoming } from '@/app/ui/kit/type-item/icons/Incoming'
import { NonCall } from '@/app/ui/kit/type-item/icons/NonCall'
import { Outgoing } from '@/app/ui/kit/type-item/icons/Outgoing'

export const TypeItem = ({ type, isIncoming }: { type: string; isIncoming?: boolean }) => {
  return (
    <div>
      {isIncoming && <Incoming />}
      {!isIncoming && type === 'Дозвонился' && <Outgoing />}
      {!isIncoming && type === 'Не дозвонился' && <NonCall />}
    </div>
  )
}
