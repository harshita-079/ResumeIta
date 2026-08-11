import { ScanSearch, Sparkles } from "lucide-react";

const AnalysisType = ({ analysisType, setAnalysisType }) => {
  return (
    <div className="mt-10">

      <h2 className="text-2xl font-bold mb-6">
        Choose Analysis Type
      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        {/* Manual */}

        <div
          onClick={() => setAnalysisType("manual")}
          className={`app-text-muted cursor-pointer rounded-3xl border p-8 transition-all duration-300
          ${
            analysisType === "manual"
              ? "border-indigo-500 dark:bg-indigo-500/10"
              : "border-white/10 dark:bg-white/5 hover:border-indigo-400"
          }`}
        >
          <ScanSearch
            size={38}
            className="text-indigo-400 mb-5"
          />

          <h3 className="text-xl font-semibold mb-3">
            Manual ATS Check
          </h3>

          <p className="text-slate-400">
            Instant analysis using ResumeIta's ATS engine.
          </p>
        </div>

        {/* AI */}

        <div
          onClick={() => setAnalysisType("ai")}
          className={`app-text-muted cursor-pointer rounded-3xl border p-8 transition-all duration-300
          ${
            analysisType === "ai"
              ? "border-purple-500 dark:bg-purple-500/10"
              : "border-white/10 dark:bg-white/5 hover:border-purple-400"
          }`}
        >
          <Sparkles
            size={38}
            className="text-purple-400 mb-5"
          />

          <h3 className="text-xl font-semibold mb-3">
            AI Resume Review
          </h3>

          <p className="text-slate-400">
            Detailed AI feedback powered by Gemini.
          </p>

        </div>

      </div>

    </div>
  );
};

export default AnalysisType;