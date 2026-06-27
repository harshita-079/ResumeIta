import React from "react";

const ProfessionalSummary = ({ resumeData, setResumeData }) => {

  const handleChange = (e) => {

    setResumeData((prev) => ({
      ...prev,
      professional_summary: e.target.value,
    }));

  };

  return (

    <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">

      <h2 className="text-2xl font-semibold mb-6">
        Professional Summary
      </h2>

      <textarea
        rows={6}
        value={resumeData.professional_summary}
        onChange={handleChange}
        placeholder="Write a short professional summary..."
        className="w-full rounded-2xl bg-slate-900 border border-white/10 p-4 outline-none resize-none focus:border-indigo-500 transition"
      />

    </div>

  );

};

export default ProfessionalSummary;