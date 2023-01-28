import React from 'react'

function Button({ children, class_name }) {
  return (
    <button className={`px-3 rounded capitalize text-white ${class_name}`}>
      {children}
    </button>
  )
}

export default Button
