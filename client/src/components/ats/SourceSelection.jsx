const SourceSelection = ({ source, setSource }) => {
  return (
    <div className="grid md:grid-cols-2 gap-6">

      {/* ResumeIta */}

      <div
        onClick={() => setSource("resumeita")}
        className={`cursor-pointer rounded-3xl border p-8 transition-all duration-300
        ${
          source === "resumeita"
            ? "border-indigo-500 bg-indigo-500/10"
            : "border-white/10 bg-white/5 hover:border-indigo-400"
        }`}
      >
        <h2 className="text-2xl font-semibold mb-3">
          📄 ResumeIta Resume
        </h2>

        <p className="text-slate-400">
          Analyze resumes created inside ResumeIta.
        </p>

      </div>

      {/* PDF */}

      <div
        onClick={() => setSource("pdf")}
        className={`cursor-pointer rounded-3xl border p-8 transition-all duration-300
        ${
          source === "pdf"
            ? "border-indigo-500 bg-indigo-500/10"
            : "border-white/10 bg-white/5 hover:border-indigo-400"
        }`}
      >
        <h2 className="text-2xl font-semibold mb-3">
          📂 Upload PDF
        </h2>

        <p className="text-slate-400">
          Upload any PDF resume and analyze it instantly.
        </p>

      </div>

    </div>
  );
};

export default SourceSelection;