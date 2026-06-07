// components/navbar/Navbar.jsx

import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const  navigate =useNavigate();
  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">

      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold bg-linear-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent"
        >
          ResumeIta
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-10 text-slate-300">

          <a href="#" className="hover:text-white transition">
            Features
          </a>

          <a href="#" className="hover:text-white transition">
            Templates
          </a>

          <a href="#" className="hover:text-white transition">
            Testimonials
          </a>

        </div>

        {/* Buttons */}
        <div className="flex items-center gap-4">

          <button onClick={()=>navigate('/login')} className="px-5 py-2 rounded-xl border border-white/10 bg-white/5 text-slate-200 hover:bg-white/10 transition-all">

            Login

          </button>

          <button onClick={()=>navigate('/signup')} className="px-5 py-2 rounded-xl bg-linear-to-r from-indigo-500 to-purple-500 text-white hover:opacity-90 transition-all">

            Sign Up

          </button>

        </div>

      </div>

    </nav>
  );
};

export default Navbar;