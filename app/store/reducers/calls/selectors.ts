import { AppState } from '@/app/store'
import { storeKey } from './slice'

export const selectedCallsState = (state: AppState) => state[storeKey]
export const selectedCallsList = (state: AppState) => state[storeKey].callsList
export const selectedSortType = (state: AppState) => state[storeKey].sortType
export const selectedSortDate = (state: AppState) => state[storeKey].sortDate
