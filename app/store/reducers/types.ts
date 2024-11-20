import { Call } from '@/app/store/reducers/calls/types'

export type DefaultApiResponse = {
  message: string
  error: boolean
  statusCode: number
}

export type CallsListResponse = {
  total_rows: string
  results: Call[]
}
