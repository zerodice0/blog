import React from 'react'
import { cacheFetchMdx } from '../api/fetch_mdx'

import './page.css'

const Page = async (): Promise<JSX.Element> => {
  console.log(await cacheFetchMdx('./src/public/notices'))

  return (
    <div className='content'>
      <div className='aside'>

      </div>
      <div className='main'>
      </div>
    </div>
  )
}

export default Page
