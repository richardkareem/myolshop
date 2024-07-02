import { headers } from 'next/headers'
import React from 'react'

const NotFound = async() => {
    const headerList = headers();
    const referer = headerList.get('referer')
    return (
    <div className='flex justify-center items-center flex-col h-screen'>NotFound {referer}</div>
  )
}

export default NotFound