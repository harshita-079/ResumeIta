import { Loader2, Brain, FileSearch } from "lucide-react";

const LoadingAnalysis = ({ analysisType }) => {
  return (
    <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-10 text-center">

      <Loader2
        className="mx-auto animate-spin text-indigo-500"
        size={60}
      />

      <h2 className="text-2xl font-bold mt-6">
        Analyzing Your Resume...
      </h2>

      <p className="text-slate-400 mt-3">
        Please wait while we evaluate your resume.
      </p>

      <div className="mt-8 space-y-4">

        <div className="flex items-center gap-3 justify-center">
          <FileSearch className="text-green-400" />
          <span>Reading Resume</span>
        </div>

        <div className="flex items-center gap-3 justify-center">
          <Brain className="text-purple-400" />
          <span>
            {analysisType === "manual"
              ? "Checking ATS Compatibility..."
              : "Generating AI Feedback..."}
          </span>
        </div>

      </div>

    </div>
  );
};

export default LoadingAnalysis;