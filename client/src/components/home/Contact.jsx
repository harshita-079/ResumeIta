import React from "react";
import { Mail , GitBranchIcon, Book } from 'lucide-react';

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-24 px-6 bg-slate-950 text-white"
    >
      <div className="max-w-5xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-4xl font-bold mb-4">
          Get In Touch
        </h2>

        <p className="text-slate-400 max-w-2xl mx-auto mb-12">
          Have questions, suggestions, or feedback?
          I'd love to hear from you.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">

          {/* Email */}
          <a
            href="mailto:resumeita@gmail.com"
            className="p-6 rounded-3xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
          >
            <Mail
              size={32}
              className="mx-auto mb-4 text-indigo-400"
            />

            <h3 className="font-semibold text-lg mb-2">
              Email
            </h3>

            <p className="text-slate-400 text-sm">
              resumeita@gmail.com
            </p>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="p-6 rounded-3xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
          >
            <GitBranchIcon
              size={32}
              className="mx-auto mb-4 text-indigo-400"
            />

            <h3 className="font-semibold text-lg mb-2">
              GitHub
            </h3>

            <p className="text-slate-400 text-sm">
              View Project
            </p>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="p-6 rounded-3xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
          >
            <Book
              size={32}
              className="mx-auto mb-4 text-indigo-400"
            />

            <h3 className="font-semibold text-lg mb-2">
              LinkedIn
            </h3>

            <p className="text-slate-400 text-sm">
              Connect With Me
            </p>
          </a>

        </div>

      </div>
    </section>
  );
};

export default Contact;