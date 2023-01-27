import React from 'react'

function Button({ children, class_name }) {
  return (
    <button className={`px-3 rounded bg-red-400  ${class_name}`}>
      {children}
    </button>
  )
}

export default Button
