import React from 'react'

const Subheading = ({text,className}) => {
  return (
    <p className={`${className}`}>{text}</p>
  )
}

export default Subheading