import '@mantine/core/styles.css'

import { ColorSchemeScript, MantineProvider } from '@mantine/core'
import type { Metadata } from 'next'

import { theme } from '../../theme'

export const metadata: Metadata = {
  title: 'Age calculator app',
  description: 'Age calculator app',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider theme={theme} defaultColorScheme='light'>
          {children}
        </MantineProvider>
      </body>
    </html>
  )
}
