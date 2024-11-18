import clsx from 'clsx'

import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import '@/styles/globals.css'

export const metadata = {
  title: {
    template: '%s - Nebula',
    default: 'Seamless Collaboration Tools for Modern Teams - Nebula',
  },
  description:
    "Unlock the potential of remote work with Nebula's advanced collaboration ecosystem. Designed for modern teams, Nebula streamlines communication, simplifies projects, and secures your data.",
}

export default function RootLayout({ children }) {
  return (
    <html
      lang='en'
      className={clsx('scroll-smooth', GeistSans.variable, GeistMono.variable)}
    >
      <body className='bg-zinc-900'>{children}</body>
    </html>
  )
}
