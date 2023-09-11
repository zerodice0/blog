import React from 'react'
import type { PropsWithChildren } from 'react'
import Navigation from '../components/navigation/navigation'

import './layout.css'

const RootLayout = ({ children }: PropsWithChildren): JSX.Element => {
  return (
    <html>
      <head></head>
      <body>
        <Navigation/>
        { children }
      </body>
    </html>
  )
}

export default RootLayout
