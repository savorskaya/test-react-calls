'use client'
import { PropsWithChildren, useEffect, useState } from 'react'

export const Hydrated = ({ children }: PropsWithChildren) => {
  const [hydration, setHydration] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHydration(true)
    }
  }, [])
  return hydration ? children : null
}
