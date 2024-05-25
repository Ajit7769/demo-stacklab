import React from 'react'
import { RingLoader } from 'react-spinners'

const LoadingScreen = () => {
  return (
    
   <div className='flex justify-center items-center my-auto w-full h-[100vh] absolute bg-white transition-all animate-pulse ease-out '>
     <RingLoader color="hsla(340, 67%, 53%, 1)" size='100' />
   </div>
  )
}

export default LoadingScreen