'use client'
import React, { Suspense } from 'react'
import { useAppSelector } from '@/app/store/hooks'
import { selectedCallsList } from '@/app/store/reducers/calls'
import { AppTable } from '@/app/ui/kit/app-table'

const Root = () => {
  const callList = useAppSelector(selectedCallsList)
  return (
    <Suspense>
      <AppTable calls={callList} />
    </Suspense>
  )
}

export default Root
