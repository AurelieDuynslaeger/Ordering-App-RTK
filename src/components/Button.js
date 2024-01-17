import React from 'react'

const Button = ({name, className, action}) => {
  return (
    <button type="button" className={className} onClick={action}>
        {name}
    </button>
  )
}
    
export default Button