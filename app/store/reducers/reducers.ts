import { callsSlice } from '@/app/store/reducers/calls'

export const reducers = {
  [callsSlice.name]: callsSlice.reducer
}

export const slices = {
  [callsSlice.name]: callsSlice
}
