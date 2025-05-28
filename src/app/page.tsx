import { ModeToggle } from '@/components/mode-toggle'
import React from 'react'

const page = () => {
  return (
    <div className=' flex items-center min-h-screen w-full justify-center'>
      <h1 className='text-black text-4xl font-bold'>
        this is home page
        <ModeToggle />
      </h1>
      
    </div>
  )
}

export default page
