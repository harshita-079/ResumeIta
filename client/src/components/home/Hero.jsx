import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate=useNavigate()
  return (
    <section className="relative min-h-screen bg-slate-950 text-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-125 h-125 bg-indigo-500/20 blur-[120px] rounded-full"></div>

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Hero Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen">

          {/* Left Side */}
          <div>

            {/* Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6">

              Build resumes <br />

              that get{" "}

              <span className="bg-linear-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">

                interviews.

              </span>

            </h1>

            {/* Subtitle */}
            <p className="text-slate-400 text-lg max-w-xl leading-8 mb-10">

              AI-powered resume builder with ATS optimization,
              smart suggestions, and recruiter-friendly templates.

            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4">

              {/* Primary Button */}
              <button onClick={()=>navigate('/login')} className="px-8 py-4 rounded-xl bg-linear-to-r from-indigo-500 to-purple-500 hover:opacity-90 transition-all duration-300 font-medium shadow-lg shadow-indigo-500/20 hover:scale-105">

                Build Resume

              </button>

              {/* Secondary Button */}
              <button onClick={()=>navigate('/login')} className="px-8 py-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all duration-300 font-medium">

                Analyze Resume

              </button>

            </div>

            <div className="flex flex-wrap items-center gap-6 mt-8 text-sm text-slate-400">
              <p>✔ ATS Friendly</p>
              <p>✔ AI Powered</p>
              <p>✔ Recruiter Approved</p>
            </div>

          </div>

          {/* Right Side */}
          <div className="relative flex justify-center">
            
            <div className="absolute inset-0 bg-indigo-500/10 blur-3xl rounded-full"></div>

            {/* Resume Card */}
            <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-2xl hover:-translate-y-2 hover:border-indigo-500/30 transition-all duration-500">

              {/* Resume Header */}
              <div className="flex items-center gap-4 mb-6">

                <div className="w-14 h-14 rounded-full bg-linear-to-r from-indigo-500 to-purple-500"></div>

                <div>

                  <h3 className="text-xl font-semibold">
                    Harshita Gupta
                  </h3>

                  <p className="text-slate-400 text-sm">
                    MERN Stack Developer
                  </p>

                </div>

              </div>

              {/* Fake Resume Lines */}
              <div className="space-y-3">

                {/* <div className="h-3 rounded-full bg-white/10"></div>

                <div className="h-3 rounded-full bg-white/10 w-[90%]"></div>

                <div className="h-3 rounded-full bg-white/10 w-[80%]"></div>

                <div className="h-3 rounded-full bg-white/10 w-[95%]"></div>

                <div className="h-3 rounded-full bg-white/10 w-[70%]"></div> */}

                <div className="space-y-6 mt-6">

                  {/* Experience */}
                  <div>

                    <div className="h-3 w-28 rounded-full bg-indigo-400/60 mb-3"></div>

                    <div className="space-y-2">

                      <div className="h-2 rounded-full bg-white/10 w-full"></div>

                      <div className="h-2 rounded-full bg-white/10 w-[90%]"></div>

                      <div className="h-2 rounded-full bg-white/10 w-[75%]"></div>

                    </div>

                  </div>

                  {/* Skills */}
                  <div>

                    <div className="h-3 w-20 rounded-full bg-purple-400/60 mb-3"></div>

                    <div className="flex flex-wrap gap-2">

                      <div className="px-3 py-1 rounded-lg bg-white/10 text-xs text-slate-300">

                        React

                      </div>

                      <div className="px-3 py-1 rounded-lg bg-white/10 text-xs text-slate-300">

                        Tailwind

                      </div>

                      <div className="px-3 py-1 rounded-lg bg-white/10 text-xs text-slate-300">

                        JavaScript

                      </div>

                    </div>

                  </div>

                  {/* Projects */}
                  <div>

                    <div className="h-3 w-24 rounded-full bg-pink-400/60 mb-3"></div>

                    <div className="space-y-2">

                      <div className="h-2 rounded-full bg-white/10 w-full"></div>

                      <div className="h-2 rounded-full bg-white/10 w-[85%]"></div>

                    </div>

                  </div>

                </div>

              </div>

              {/* ATS Score */}
              <div className="mt-8 p-4 rounded-2xl bg-slate-900 border border-white/10">

                <div className="flex items-center justify-between mb-2">

                  <p className="text-slate-300">
                    ATS Score
                  </p>

                  <span className="text-green-400 font-semibold">
                    92%
                  </span>

                </div>

                <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">

                  <div className="w-[92%] h-full bg-linear-to-r from-indigo-500 to-purple-500 rounded-full"></div>

                </div>

              </div>

            {/* floating card-1 */}
            <div className="absolute -top-6 -right-6 px-5 py-4 rounded-2xl bg-slate-900 border border-white/10 shadow-xl backdrop-blur-xl">

                <p className="text-sm text-slate-400 mb-1">
                  ATS Score
                </p>

                <h3 className="text-2xl font-bold text-green-400">
                  92%
                </h3>

            </div>

            {/* floating card-2 */}
            {/* <div className="absolute -bottom-4 -left-4 px-4 py-3 rounded-2xl bg-slate-900 border border-white/10 shadow-xl backdrop-blur-xl max-w-55">

              <p className="text-sm text-slate-300 leading-5">
                ✨ Add more React and Tailwind keywords to improve ATS ranking.
              </p>
            </div> */}

          </div>

          </div>

        </div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-slate-950 to-transparent"></div>

      </div>

    </section>
  );
};

export default Hero;
