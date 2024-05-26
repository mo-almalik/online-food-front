import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../common/Navbar.jsx'

export default function Layout() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  )
}
