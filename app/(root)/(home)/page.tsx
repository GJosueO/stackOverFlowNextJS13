import { UserButton } from '@clerk/nextjs'
import React from 'react'

const Home = () => {
  return (
    <div className='flex min-h-screen w-full items-center justify-center '>
      Home
      <UserButton />
    </div>
  )
}

export default Home
