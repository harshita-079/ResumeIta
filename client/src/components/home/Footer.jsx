import React from "react";
import {Heart} from 'lucide-react'
const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-slate-950 text-slate-400 py-12">

      <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-10 pb-10 border-b border-white/10">

              <div>
                {/* Logo */}
                <h2 className="text-2xl font-bold bg-linear-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">

                  ResumeIta

                </h2>
              </div>

            {/* Links */}
            <div className="flex md:flex-row items-center justify-between gap-8">

              <a href="#features" className="hover:text-white transition">
                Features
              </a>

              <a href="#templates" className="hover:text-white transition">
                Templates
              </a>

              <a href="#contact" className="hover:text-white transition">
                Contact
              </a>

            </div>
          </div>
            {/* Copyright */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-8">
              <p className="flex items-center gap-2 text-sm text-slate-500">
              Made with <Heart size={16} className="text-red-500 fill-red-500 "/> by <span className="bg-linear-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent font-medium">Harshita Gupta</span>
            </p>
            </div>
            
            <p className="text-sm justify-center items-center flex">

              © 2026 ResumeIta. All rights reserved.

            </p>

          </div>
    </footer>
  );
};

export default Footer;