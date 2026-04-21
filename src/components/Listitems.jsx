import React from 'react'

const Listitems = ({text,className}) => {
  return (
     <li className={`font-normal text-lg text-primary font-jost hover:text-secondary duration-300 cursor-pointer${className}`}>{text}</li>
  )
}

 export default Listitems