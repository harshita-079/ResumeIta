import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const Layout = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar/>
      <main className="px-6 py-6">
        <Outlet/>
      </main>
    </div>
  )
}

export default Layout
