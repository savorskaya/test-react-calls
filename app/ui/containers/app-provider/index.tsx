'use client'
import type { ReactNode } from 'react'
import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/app/store/hooks'
import { selectedSortDate, selectedSortType } from '@/app/store/reducers/calls'
import { getCallsList } from '@/app/store/reducers/calls/actions/get-calls-list'

interface Props {
  readonly children: ReactNode
}

export function AppProvider({ children }: Props) {
  const dispatch = useAppDispatch()
  const activeType = useAppSelector(selectedSortType)
  const activeDateType = useAppSelector(selectedSortDate)

  const fetchData = async () => {
    await dispatch(getCallsList({ in_out: activeType }))
  }

  useEffect(() => {
    void fetchData()
  }, [activeType, activeDateType])

  return <>{children}</>
}
