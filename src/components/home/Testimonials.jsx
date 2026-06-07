import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ananya Verma",
      role: "Computer Science Student",
      review:
        "ResumeIta helped me improve my ATS score before internship applications. The AI suggestions were actually useful.",
      score: "58% → 89%",
    },

    {
      name: "Rohit Sharma",
      role: "Frontend Developer",
      review:
        "The resume templates look modern and recruiter-friendly. I started getting more interview calls.",
      score: "64% → 91%",
    },

    {
      name: "Priyanshi Gupta",
      role: "Final Year Student",
      review:
        "Clean UI, easy editing, and ATS analysis in one place. ResumeIta saved me a lot of time.",
      score: "61% → 93%",
    },
  ];

  return (
    <section className="py-28 bg-slate-950 text-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Top Section */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 mb-16">

          {/* Left */}
          <div>

            {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm text-slate-300 mb-6">

              <span>💬</span>

              <p>User Feedback</p>

            </div> */}

            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4">

              What users say about{" "}

              <span className="bg-linear-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">

                ResumeIta

              </span>

            </h2>

            <p className="text-slate-400 max-w-2xl leading-7">

              Trusted by students and professionals to build
              ATS-friendly resumes and improve interview chances.

            </p>

          </div>

          {/* Right */}
          <button className="px-6 py-3 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition-all duration-300">

            Share Feedback

          </button>

        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {testimonials.map((item, index) => (
            <div
              key={index}
              className="relative p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-indigo-500/30 transition-all duration-300 overflow-hidden"
            >

              {/* Glow Effect */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 blur-3xl rounded-full"></div>

              {/* Rating */}
              <div className="flex items-center gap-1 text-yellow-400 mb-5">

                ★ ★ ★ ★ ★

              </div>

              {/* Review */}
              <p className="text-slate-300 leading-7 mb-8 relative z-10">

                “{item.review}”

              </p>

              {/* ATS Score */}
              <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-white/10 text-sm text-slate-300">

                🚀 ATS Score:{" "}

                <span className="text-green-400 font-semibold">

                  {item.score}

                </span>

              </div>

              {/* User Info */}
              <div className="flex items-center gap-4">

                {/* Avatar */}
                <div className="w-12 h-12 rounded-full bg-linear-to-r from-indigo-500 to-purple-500 flex items-center justify-center font-semibold text-lg">

                  {item.name.charAt(0)}

                </div>

                {/* Name */}
                <div>

                  <h3 className="font-semibold text-lg">

                    {item.name}

                  </h3>

                  <p className="text-slate-400 text-sm">

                    {item.role}

                  </p>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Testimonials;