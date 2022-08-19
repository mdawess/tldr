import React from 'react'
import Divider from '../components/Divider'
import Sidebar from '../components/Sidebar'

export default function Main() {
  return (
    <div className='flex mt-10 h-full w-full align-top justify-start'>
      <Sidebar />
      <div className='mx-2.5' ></div>
      <Divider size={36}/>
    </div>
  )
}