import { apiChat } from '@/app/store/apis/main'
import { DefaultApiResponse } from '@/app/store/reducers/types'
import { createAsyncThunk } from '@/app/store/utils'

export const getRecord = createAsyncThunk(
  'calls/get-record',
  async (payload: {
    recordId: string
    partnership_id: string
  }): Promise<{ src: string } | DefaultApiResponse | null> => {
    const { data } = await apiChat.post(
      `/mango/getRecord?record=${payload.recordId}&partnership_id=${payload.partnership_id}`,
      {
        headers: {
          'Content-Type': 'audio/mpeg, audio/x-mpeg, audio/x-mpeg-3, audio/mpeg3',
          'Content-Transfer-Encoding': 'binary',
          'Content-Disposition': 'filename=record.mp3'
        }
      }
    )

    return data
  }
)
