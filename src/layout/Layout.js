import React from 'react'
import Nav from './../component/Nav'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className="relative">
      <Nav />
      <Outlet />
    </div>
  )
}

export default Layout
