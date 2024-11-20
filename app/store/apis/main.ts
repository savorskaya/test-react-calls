import { Store } from '@reduxjs/toolkit'
import axios from 'axios'

export const BASE_URL = 'https://api.skilla.ru/'

export const apiChat = axios.create({
  baseURL: BASE_URL,
  headers: {
    authorization: 'Bearer testtoken'
  },
  timeout: 30000
})

let locallyStore: Store | null = null

export function __setApiStore(store: Store) {
  locallyStore = store
}
