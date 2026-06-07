// components/home/Templates.jsx

import React from "react";

const Templates = () => {
  const templates = [
    {
      name: "Modern Pro",
      style: "ATS Friendly",
    },

    {
      name: "Minimal Clean",
      style: "Recruiter Favorite",
    },

    {
      name: "Creative Edge",
      style: "Modern Design",
    },
  ];

  return (
    <section className="py-28 bg-slate-950 text-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Top Section */}
        <div className="text-center mb-20">

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">

            Professional templates built for{" "}

            <span className="bg-linear-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">

              recruiters.

            </span>

          </h2>

          {/* Subtitle */}
          <p className="text-slate-400 max-w-3xl mx-auto leading-8 text-lg">

            Choose from modern ATS-friendly templates designed
            to improve readability and help you stand out professionally.

          </p>

        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {templates.map((template, index) => (
            <div
              key={index}
              className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 overflow-hidden hover:-translate-y-2 hover:border-indigo-500/30 transition-all duration-500"
            >

              {/* Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 blur-3xl rounded-full"></div>

              {/* ================= TEMPLATE PREVIEW ================= */}
              <div className="bg-slate-900 rounded-2xl p-5 h-[340px] border border-white/5 overflow-hidden">

                {/* TEMPLATE 1 */}
                {index === 0 && (
                  <div className="flex gap-4 h-full">

                    {/* Sidebar */}
                    <div className="w-[30%] bg-white/5 rounded-xl p-3 flex flex-col items-center">

                      <div className="w-14 h-14 rounded-full bg-linear-to-r from-indigo-500 to-purple-500 mb-4"></div>

                      <div className="space-y-2 w-full">

                        <div className="h-2 rounded-full bg-white/10 w-full"></div>

                        <div className="h-2 rounded-full bg-white/10 w-[70%] mx-auto"></div>

                      </div>

                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-5">

                      <div>

                        <div className="h-3 w-24 rounded-full bg-indigo-400/60 mb-3"></div>

                        <div className="space-y-2">

                          <div className="h-2 rounded-full bg-white/10 w-full"></div>

                          <div className="h-2 rounded-full bg-white/10 w-[85%]"></div>

                          <div className="h-2 rounded-full bg-white/10 w-[70%]"></div>

                        </div>

                      </div>

                      <div>

                        <div className="h-3 w-20 rounded-full bg-purple-400/60 mb-3"></div>

                        <div className="flex flex-wrap gap-2">

                          <div className="px-2 py-1 rounded-lg bg-white/10 text-[10px]">

                            React

                          </div>

                          <div className="px-2 py-1 rounded-lg bg-white/10 text-[10px]">

                            Tailwind

                          </div>

                        </div>

                      </div>

                    </div>

                  </div>
                )}

                {/* TEMPLATE 2 */}
                {index === 1 && (
                  <div className="h-full flex flex-col items-center text-center">

                    {/* Profile */}
                    <div className="w-16 h-16 rounded-full bg-linear-to-r from-indigo-500 to-purple-500 mb-5"></div>

                    {/* Name */}
                    <div className="space-y-2 w-full mb-8">

                      <div className="h-3 rounded-full bg-white/10 w-[60%] mx-auto"></div>

                      <div className="h-2 rounded-full bg-white/10 w-[40%] mx-auto"></div>

                    </div>

                    {/* Sections */}
                    <div className="space-y-6 w-full">

                      <div>

                        <div className="h-3 w-20 rounded-full bg-indigo-400/60 mb-3 mx-auto"></div>

                        <div className="space-y-2">

                          <div className="h-2 rounded-full bg-white/10 w-full"></div>

                          <div className="h-2 rounded-full bg-white/10 w-[85%] mx-auto"></div>

                        </div>

                      </div>

                      <div>

                        <div className="h-3 w-24 rounded-full bg-pink-400/60 mb-3 mx-auto"></div>

                        <div className="space-y-2">

                          <div className="h-2 rounded-full bg-white/10 w-full"></div>

                          <div className="h-2 rounded-full bg-white/10 w-[70%] mx-auto"></div>

                        </div>

                      </div>

                    </div>

                  </div>
                )}

                {/* TEMPLATE 3 */}
                {index === 2 && (
                  <div className="h-full">

                    {/* Top Header */}
                    <div className="h-20 rounded-2xl bg-linear-to-r from-indigo-500 to-purple-500 mb-6 p-4">

                      <div className="space-y-2">

                        <div className="h-3 rounded-full bg-white/30 w-[40%]"></div>

                        <div className="h-2 rounded-full bg-white/20 w-[25%]"></div>

                      </div>

                    </div>

                    {/* Skills */}
                    <div className="mb-8">

                      <div className="h-3 w-20 rounded-full bg-purple-400/60 mb-4"></div>

                      <div className="flex flex-wrap gap-2">

                        <div className="px-3 py-1 rounded-lg bg-white/10 text-[10px]">

                          React

                        </div>

                        <div className="px-3 py-1 rounded-lg bg-white/10 text-[10px]">

                          Node

                        </div>

                        <div className="px-3 py-1 rounded-lg bg-white/10 text-[10px]">

                          AI

                        </div>

                      </div>

                    </div>

                    {/* Lines */}
                    <div className="space-y-3">

                      <div className="h-2 rounded-full bg-white/10 w-full"></div>

                      <div className="h-2 rounded-full bg-white/10 w-[90%]"></div>

                      <div className="h-2 rounded-full bg-white/10 w-[70%]"></div>

                      <div className="h-2 rounded-full bg-white/10 w-[95%]"></div>

                    </div>

                  </div>
                )}

              </div>

              {/* Bottom */}
              <div className="mt-6">

                {/* Template Name */}
                <div className="flex items-center justify-between mb-5">

                  <h3 className="text-2xl font-semibold">

                    {template.name}

                  </h3>

                  <div className="px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs">

                    {template.style}

                  </div>

                </div>

                {/* Button */}
                <button className="w-full py-3 rounded-2xl bg-linear-to-r from-indigo-500 to-purple-500 hover:opacity-90 transition-all duration-300">

                  Use Template

                </button>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Templates;