import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../asset/Logo.png'
function Nav() {
  return (
    <div className="absolute flex center left-0 right-0 z-10">
      <div className="my-20 mx-auto">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
    </div>
  )
}

export default Nav
