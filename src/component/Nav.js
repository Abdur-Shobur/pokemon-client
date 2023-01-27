import React from 'react'
import logo from '../asset/Logo.png'
function Nav() {
  return (
    <div className="absolute flex center left-0 right-0 z-10">
      <div className="my-10 mx-auto">
        <img src={logo} alt="logo" />
      </div>
    </div>
  )
}

export default Nav
