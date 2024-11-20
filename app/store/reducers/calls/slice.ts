import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Call, SortTypeByDate, SortTypeByType } from '@/app/store/reducers/calls/types'
import patchStateReducer from '@/app/store/utils/patch-state'

export const storeKey = '@redux/calls'

export interface CallsState {
  callsList: Call[]
  total: number
  sortType: SortTypeByType
  sortDate: SortTypeByDate
}

const initialState: CallsState = {
  callsList: [],
  total: 0,
  sortType: '',
  sortDate: 'three-days'
}

export const whitelist = ['callsList']

export const callsSlice = createSlice({
  name: storeKey,
  initialState,
  reducers: {
    patchCallsState: (state, action: PayloadAction<Partial<CallsState>>) => {
      patchStateReducer(state, action)
    },
    setSortType: (state: CallsState, action: PayloadAction<SortTypeByType>) => {
      state.sortType = action.payload
    },
    setDateType: (state: CallsState, action: PayloadAction<SortTypeByDate>) => {
      state.sortDate = action.payload
    }
  }
})

export const { patchCallsState, setSortType, setDateType } = callsSlice.actions
