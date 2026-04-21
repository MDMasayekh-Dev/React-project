import React from 'react'

const Buttons = ({text,className}) => {
  return (
   <button className={`text-white bg-secondary font-jost font-medium text-[18px] px-[7px] py-[29px] ${className}`}><span className='border-2 border-white px-[30px] py-[21px]'>{text}</span></button>
  
  )
}

export default Buttons