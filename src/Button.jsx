import React from 'react'
import { useDispatch } from 'react-redux'
import { nextImage,prevImage } from './ImgSlice';

const Button = () => {
  const  dispatch=useDispatch();
  return (
    <div className=' flex gap-2'>
      <button onClick={()=>dispatch(prevImage())} className='px-4 py-2 text-white bg-gray-500 rounded-lg hover:bg-gray-900 transition duration-300'>Back</button>
      <button onClick={()=>dispatch(nextImage())} className='px-4 py-2 text-white bg-gray-500 rounded-lg hover:bg-gray-900 transition duration-300'>Next</button>
    </div>
  )
}

export default Button
