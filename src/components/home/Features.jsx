import React from "react";
import {
  Briefcase,
  Download,
  Eye,
  FileText,
  LayoutTemplate,
  ScanSearch,
  Sparkles,
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <FileText size={28} />,
      title: "AI Resume Builder",
      description:
        "Build professional resumes from scratch with AI-powered writing assistance.",
      tag: "AI Powered",
    },

    {
      icon: <ScanSearch size={28} />,
      title: "ATS Optimization",
      description:
        "Improve ATS score and make resumes recruiter-friendly automatically.",
      tag: "ATS Friendly",
    },

    {
      icon: <Briefcase size={28} />,
      title: "Job Description Matching",
      description:
        "Get smart resume suggestions tailored to specific job descriptions.",
      tag: "Smart Matching",
    },

    {
      icon: <LayoutTemplate size={28} />,
      title: "Modern Templates",
      description:
        "Choose customizable modern templates designed for better readability.",
      tag: "Customizable",
    },

    {
      icon: <Eye size={28} />,
      title: "Live Resume Preview",
      description:
        "Preview resume updates instantly while editing content in real time.",
      tag: "Real-Time",
    },

    {
      icon: <Download size={28} />,
      title: "Export & Share",
      description:
        "Download and share resumes easily in clean professional formats.",
      tag: "Quick Export",
    },
  ];

  return (
    <section className="py-28 bg-slate-950 text-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center mb-16">

          <h2 className="text-4xl font-bold mb-4">
            Everything you need to build smarter resumes.
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto">
            Build ATS-friendly resumes from scratch with AI-powered suggestions,job-description matching, and customizable modern templates.
          </p>

        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:-translate-y-2 hover:border-indigo-500/30 transition-all duration-500 overflow-hidden"
            >
              {/* glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 blur-3xl rounded-full"></div>

              <div className="inline-flex px-3 py-1 rounded-full bg-white/10 text-xs text-slate-300 mb-5">
                {feature.tag}
              </div>

              <div className="w-14 h-14 rounded-2xl bg-linear-to-r from-indigo-500 to-purple-500 flex items-center justify-center mb-6">
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