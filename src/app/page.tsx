import { fetchMdx } from '../api/fetch_mdx';
import React from 'react'

import './page.css'



const Page = async (): JSX.Element => {
  console.log(await fetchMdx('./src/public/notices'));

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
