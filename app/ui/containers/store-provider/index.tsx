'use client'
import { useRef, type ReactNode } from 'react'
import { Provider } from 'react-redux'
import { AppStore, createStore } from '@/app/store'
import { __setApiStore } from '@/app/store/apis/main'
import { whitelist } from '@/app/store/reducers/whitelist'
import { restoreStore, watcher } from '@/app/store/store/persist'

interface Props {
  readonly children: ReactNode
}

export function StoreProvider({ children }: Props) {
  const storeRef = useRef<AppStore | null>(null)

  if (!storeRef.current) {
    storeRef.current = createStore(restoreStore())
    watcher(storeRef.current, whitelist)
    __setApiStore(storeRef.current)
  }

  return <Provider store={storeRef.current}>{children}</Provider>
}
