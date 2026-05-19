import React, { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Bell } from 'lucide-react'


const Navbar = () => {
  const navigate=useNavigate()
  const [open,setOpen]=useState(false)
  const user={name:'harshita gupta'}
  return (

    <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">

      <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/app"
          className="text-3xl font-bold bg-linear-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent"
        >

          ResumeIta

        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8">

          <NavLink
            to="/app"
            end
            className={({ isActive }) =>
              `transition ${
                isActive
                  ? 'text-white'
                  : 'text-slate-400 hover:text-white'
              }`
            }
          >

            Dashboard

          </NavLink>

          <NavLink
            to="/app/resumes"
            className={({ isActive }) =>
              `transition ${
                isActive
                  ? 'text-white'
                  : 'text-slate-400 hover:text-white'
              }`
            }
          >

            My Resumes

          </NavLink>

          <NavLink
            to="/app/analyzer"
            className={({ isActive }) =>
              `transition ${
                isActive
                  ? 'text-white'
                  : 'text-slate-400 hover:text-white'
              }`
            }
          >

            ATS Analyzer

          </NavLink>

        </div>

        {/* Right Side */}
        <div className="flex items-center gap-5">

          {/* Notification */}
          <button className="relative p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition">

            <Bell size={18} />

            <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-indigo-500"></span>

          </button>

          {/* Avatar */}
          <div className="relative">

  {/* Avatar Button */}
  <button
    onClick={() => setOpen(!open)}
    className="w-10 h-10 rounded-full bg-linear-to-r from-indigo-500 to-purple-500 flex items-center justify-center font-semibold"
  >

    {user.name.charAt(0).toUpperCase()}

  </button>

  {/* Dropdown */}
  {open && (

    <div className="absolute right-0 mt-3 w-52 rounded-2xl border border-white/10 bg-slate-900/95 backdrop-blur-xl shadow-2xl overflow-hidden">

      <Link to="/app/profile" className=" block px-5 py-3 text-left text-slate-300 hover:bg-white/5 transition">
        Profile
      </Link>

      <Link to="/app/setting" className="block px-5 py-3 text-left text-slate-300 hover:bg-white/5 transition">

        Settings

      </Link>

      <button onClick={()=>navigate('/')} className="w-full px-5 py-3 text-left text-red-400 hover:bg-white/5 transition">

        Logout

      </button>

    </div>

  )}

</div>

        </div>

      </div>

    </nav>
  )
}

export default Navbar