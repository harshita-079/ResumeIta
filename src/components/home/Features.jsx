// components/home/Features.jsx

import React from "react";
import {
  FileText,
  ScanSearch,
  Sparkles,
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <FileText size={28} />,
      title: "AI Resume Builder",
      description:
        "Create professional resumes with smart AI-powered suggestions.",
    },

    {
      icon: <ScanSearch size={28} />,
      title: "ATS Optimization",
      description:
        "Improve resume ATS score and pass recruiter screening systems.",
    },

    {
      icon: <Sparkles size={28} />,
      title: "Modern Templates",
      description:
        "Choose recruiter-friendly resume templates with live preview.",
    },
  ];

  return (
    <section className="py-28 bg-slate-950 text-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center mb-16">

          <h2 className="text-4xl font-bold mb-4">

            Powerful Features for Smarter Resumes

          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto">

            Everything you need to build ATS-friendly resumes
            and stand out to recruiters.

          </p>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-indigo-500/30 transition-all"
            >

              <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center mb-6">

                {feature.icon}

              </div>

              <h3 className="text-2xl font-semibold mb-4">

                {feature.title}

              </h3>

              <p className="text-slate-400 leading-7">

                {feature.description}

              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Features;