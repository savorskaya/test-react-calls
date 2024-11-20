import {
  AsyncThunk,
  AsyncThunkPayloadCreator,
  createAsyncThunk as createInternalAsyncThunk
} from '@reduxjs/toolkit'
import { AppDispatch, AppState, listenerMiddleware } from '@/app/store/index'

type ThunkConfigured = {
  state: AppState
  dispatch: AppDispatch
}

export const createAsyncThunk = createInternalAsyncThunk.withTypes<ThunkConfigured>()
export const startAppListening = listenerMiddleware.startListening.withTypes<
  AppState,
  AppDispatch
>()

type TimeoutId = ReturnType<typeof setTimeout> | number

type DebounceSettings = {
  wait: number
  maxWait?: number
  leading?: boolean
}

export const createDebouncedAsyncThunk = <Returned, ThunkArg = void>(
  typePrefix: string,
  options: DebounceSettings,
  payloadCreator: AsyncThunkPayloadCreator<Returned, ThunkArg, ThunkConfigured>
): AsyncThunk<Returned, ThunkArg, object> => {
  const { maxWait = 0, leading = false } = options ?? {}
  let timer: TimeoutId = 0
  let maxTimer: TimeoutId = 0
  let res: ((value: boolean) => void) | undefined
  const invoke = (): void => {
    clearTimeout(maxTimer)
    maxTimer = 0

    if (res) {
      res(true)
      res = undefined
    }
  }
  const cancel = (): void => {
    if (res) {
      res(false)
      res = undefined
    }
  }

  return createAsyncThunk(typePrefix, payloadCreator as never, {
    condition() {
      const immediate = leading && !timer
      clearTimeout(timer)
      timer = setTimeout(() => {
        invoke()
        timer = 0
      }, options.wait)

      if (immediate) return true

      cancel()

      if (maxWait && !maxTimer) maxTimer = setTimeout(invoke, maxWait)

      return new Promise<boolean>((resolve) => {
        res = resolve
      })
    }
  })
}
