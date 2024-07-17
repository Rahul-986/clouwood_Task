import React from 'react'
import { useSelector } from 'react-redux'

const Img = () => {
  const {currentIndex,Imgs}=useSelector((state)=>state.Imgs);
  return (
    <div className='w-80 h-60 flex items-center justify-center mb-2'> 
     <img src={Imgs[currentIndex]} alt="Imgs" className='max-w-full max-h-full rounded-lg shadow-lg' />
    </div>
  )
}

export default Img
