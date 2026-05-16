import React from "react";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-slate-950 text-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-indigo-500/20 blur-[120px] rounded-full"></div>

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Hero Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen">

          {/* Left Side */}
          <div>

            {/* Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6">

              Build resumes <br />

              that get{" "}

              <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">

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
              <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 hover:opacity-90 transition-all duration-300 font-medium shadow-lg shadow-indigo-500/20">

                Build Resume

              </button>

              {/* Secondary Button */}
              <button className="px-8 py-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all duration-300 font-medium">

                Analyze Resume

              </button>

            </div>

          </div>

          {/* Right Side */}
          <div className="relative flex justify-center">

            {/* Resume Card */}
            <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-2xl">

              {/* Resume Header */}
              <div className="flex items-center gap-4 mb-6">

                <div className="w-14 h-14 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"></div>

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

                <div className="h-3 rounded-full bg-white/10"></div>
                
                <div className="h-3 rounded-full bg-white/10 w-[90%]"></div>

                <div className="h-3 rounded-full bg-white/10 w-[80%]"></div>

                <div className="h-3 rounded-full bg-white/10 w-[95%]"></div>

                <div className="h-3 rounded-full bg-white/10 w-[70%]"></div>

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

                  <div className="w-[92%] h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;
