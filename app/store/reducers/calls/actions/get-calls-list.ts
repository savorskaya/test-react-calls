import { format, subDays } from 'date-fns'
import { apiChat } from '@/app/store/apis/main'
import { selectedSortDate } from '@/app/store/reducers/calls'
import { patchCallsState } from '@/app/store/reducers/calls/slice'
import { CallsListResponse, DefaultApiResponse } from '@/app/store/reducers/types'
import { createAsyncThunk } from '@/app/store/utils'

export const getCallsList = createAsyncThunk(
  'calls/get-list',
  async (
    payload: { dateStart?: string; dateEnd?: string; in_out: string },
    thunkAPI
  ): Promise<CallsListResponse | DefaultApiResponse | null> => {
    const state = thunkAPI.getState()
    const activeDateType = selectedSortDate(state)
    const countDays = activeDateType === 'week' ? 7 : 3

    const dateStart =
      payload?.dateStart || format(new Date(subDays(new Date(), countDays)), 'yyyy-MM-dd')
    const dateEnd = payload?.dateEnd || format(new Date(), 'yyyy-MM-dd')
    const { data } = await apiChat.post(
      `/mango/getList?in_out=${payload.in_out}&date_start=${dateStart}&date_end=${dateEnd}`
    )
    await thunkAPI.dispatch(
      patchCallsState({
        callsList: data.results,
        total: data.total_rows
      })
    )
    return data
  }
)
