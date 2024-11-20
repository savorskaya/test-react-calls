import React, { Suspense } from 'react'
import { Viewport } from 'next'
import { AppProvider } from '@/app/ui/containers/app-provider'
import { Hydrated } from '@/app/ui/containers/hydrated'
import { StoreProvider } from '@/app/ui/containers/store-provider'
import '@/styles/globals.scss'
import styles from './styles.module.css'

export const viewport: Viewport = {
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  interactiveWidget: 'resizes-content',
  width: 'device-width',
  themeColor: '#F1F4F9'
}

export const metadata = {
  title: {
    default: 'Calls TEST',
    template: `Calls TEST`
  },
  description: '',
  icons: {
    icon: '/favicon.ico'
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <StoreProvider>
      <html lang="ru" suppressHydrationWarning>
        <body id="root">
          <AppProvider>
            <Hydrated>
              <div className={styles.pageWrapper}>
                <Suspense>{children}</Suspense>
              </div>
            </Hydrated>
          </AppProvider>
        </body>
      </html>
    </StoreProvider>
  )
}
