import { objectKeys } from '@coxy/utils'
import { Store } from '@reduxjs/toolkit'
import { APP_STORAGE_STORE } from '@/app/store/configs/common'
import { getString, setString } from '@/app/store/storage'

export const restoreStore = () => {
  try {
    return JSON.parse(getString(APP_STORAGE_STORE) || '{}')
  } catch (ignore) {
    return {}
  }
}

type WhitelistState = {
  [k: string]: string[] | string
}

export const watcher = (store: Store, whitelist: WhitelistState) => {
  store.subscribe(() => {
    const state = store.getState()
    const newState: ReturnType<typeof store.getState> = {}

    objectKeys(state).forEach((storeKey) => {
      newState[storeKey] = { ...state[storeKey] }

      const keys = objectKeys(newState[storeKey])
      keys.forEach((storeItem) => {
        if (whitelist[storeKey as string] !== 'all') {
          if (!whitelist[storeKey as string]?.includes(storeItem as string)) {
            delete newState[storeKey][storeItem]
          }
        }
      })
    })

    const newStateForSave = JSON.stringify(newState)
    if (newStateForSave !== getString(APP_STORAGE_STORE)) {
      setString(APP_STORAGE_STORE, newStateForSave)
    }
  })
}
