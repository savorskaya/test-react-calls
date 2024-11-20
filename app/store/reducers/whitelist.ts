import { callsSlice, whitelist as callsWhitelist } from '@/app/store/reducers/calls'

export const whitelist = {
  [callsSlice.name]: callsWhitelist
}
