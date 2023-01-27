import React from 'react'

function Button({ children, className }) {
  return (
    <button className={`px-3 rounded bg-red-400  ${className}`}>
      {children}
    </button>
  )
}

export default Button
