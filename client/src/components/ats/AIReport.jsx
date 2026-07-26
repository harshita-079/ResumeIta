import { Sparkles } from "lucide-react";

const AIReport = ({ report, onClose }) => {
  if (!report) return null;

  const score = report.atsScore || 0;

  const scoreColor =
    score >= 80
      ? "text-green-600"
      : score >= 60
      ? "text-yellow-500"
      : "text-red-500";

  const progressColor =
    score >= 80
      ? "bg-green-500"
      : score >= 60
      ? "bg-yellow-500"
      : "bg-red-500";

  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-5">

      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-y-auto">

        {/* ================= HEADER ================= */}

        <div className="sticky top-0 bg-white border-b px-8 py-6 flex justify-between items-center">

          <div className="flex items-center gap-3">

            <Sparkles
              className="text-purple-600"
              size={32}
            />

            <div>

              <h2 className="text-3xl font-bold text-gray-900">
                AI Resume Review
              </h2>

              <p className="text-gray-500 mt-1">
                Personalized resume analysis powered by Gemini AI
              </p>

            </div>

          </div>

          <button
            onClick={onClose}
            className="text-3xl text-gray-500 hover:text-black transition"
          >
            ✕
          </button>

        </div>

        {/* ================= BODY ================= */}

        <div className="p-8">

          {/* ATS SCORE */}

          <div className="rounded-3xl border border-gray-200 p-8 mb-8">

            <p className="uppercase tracking-widest text-sm text-gray-500 mb-3">

              ATS SCORE

            </p>

            <h1 className={`text-6xl font-extrabold ${scoreColor}`}>

              {score}

              <span className="text-3xl text-gray-500">

                /100

              </span>

            </h1>

            {/* Progress */}

            <div className="w-full h-4 bg-gray-200 rounded-full mt-6 overflow-hidden">

              <div
                className={`${progressColor} h-full rounded-full transition-all duration-700`}
                style={{
                  width: `${score}%`,
                }}
              />

            </div>

          </div>

          {/* OVERALL VERDICT */}

          <div className="rounded-3xl border border-indigo-200 bg-indigo-50 p-6">

            <h3 className="text-xl font-bold text-indigo-900 mb-3">

              Overall Verdict

            </h3>

            <p className="text-gray-700 leading-7">

              {report.overallVerdict}

            </p>

          </div>


          {/* ================= INSIGHTS ================= */}

            <div className="grid lg:grid-cols-3 gap-6 mt-8">

            {/* Strengths */}

            <div className="rounded-3xl border border-green-200 bg-green-50 p-6">

                <h3 className="text-xl font-bold text-green-700 mb-5">
                ✅ Strengths
                </h3>

                <ul className="space-y-3">

                {report.strengths?.map((item, index) => (

                    <li
                    key={index}
                    className="bg-white rounded-xl p-3 shadow-sm text-gray-700"
                    >
                    {item}
                    </li>

                ))}

                </ul>

            </div>

            {/* Priority Fixes */}

            <div className="rounded-3xl border border-red-200 bg-red-50 p-6">

                <h3 className="text-xl font-bold text-red-700 mb-5">
                🔥 Priority Fixes
                </h3>

                <ul className="space-y-3">

                {report.priorityFixes?.map((item, index) => (

                    <li
                    key={index}
                    className="bg-white rounded-xl p-3 shadow-sm text-gray-700"
                    >
                    {item}
                    </li>

                ))}

                </ul>

            </div>

            {/* Missing Keywords */}

            <div className="rounded-3xl border border-indigo-200 bg-indigo-50 p-6">

                <h3 className="text-xl font-bold text-indigo-700 mb-5">
                🏷 Missing Keywords
                </h3>

                <div className="flex flex-wrap gap-3">

                {report.missingKeywords?.length > 0 ? (

                    report.missingKeywords.map((keyword, index) => (

                    <span
                        key={index}
                        className="bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-medium"
                    >
                        {keyword}
                    </span>

                    ))

                ) : (

                    <p className="text-green-700 font-medium">
                    No important ATS keywords are missing 🎉
                    </p>

                )}

                </div>

            </div>

            </div>

        {/* ================= SECTION ANALYSIS ================= */}

        <div className="rounded-3xl border border-gray-200 p-8 mt-8">

        <h2 className="text-2xl font-bold mb-6">
            📊 Section Analysis
        </h2>

        <div className="space-y-6">

            {Object.entries(report.sectionAnalysis || {}).map(([section, data]) => (

            <div
                key={section}
                className="border rounded-2xl p-5"
            >

                <div className="flex justify-between items-center mb-3">

                <h3 className="text-lg font-semibold capitalize">

                    {section}

                </h3>

                <span
                    className={`font-bold px-3 py-1 rounded-full
                    ${
                    data.score >= 8
                        ? "bg-green-100 text-green-700"
                        : data.score >= 6
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                    }`}
                >
                    {data.score}/10
                </span>

                </div>

                <p className="text-gray-700 mb-4">

                {data.feedback}

                </p>

                {/* Improved Version */}

                {data.improvedVersion && (

                <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-4">

                    <h4 className="font-semibold text-indigo-700 mb-2">

                    ✨ AI Suggested Version

                    </h4>

                    <p className="text-gray-700 whitespace-pre-line">

                    {data.improvedVersion}

                    </p>

                </div>

                )}

                {/* Improved Bullets */}

                {data.improvedBullets && (

                <div className="mt-4">

                    <h4 className="font-semibold text-indigo-700 mb-2">

                    ✨ AI Suggested Bullet Points

                    </h4>

                    <ul className="list-disc pl-6 space-y-2">

                    {data.improvedBullets.map((bullet, index) => (

                        <li key={index}>

                        {bullet}

                        </li>

                    ))}

                    </ul>

                </div>

                )}

            </div>

            ))}

        </div>

        </div>

        {/* ================= FINAL TIPS ================= */}

        <div className="rounded-3xl border border-purple-200 bg-purple-50 p-8 mt-8">

        <h2 className="text-2xl font-bold mb-5">

            💡 Final Tips

        </h2>

        <ul className="space-y-3">

            {report.finalTips?.map((tip, index) => (

            <li
                key={index}
                className="bg-white rounded-xl p-4 shadow-sm"
            >

                {tip}

            </li>

            ))}

        </ul>

        </div>

        </div>

      </div>

    </div>
  );
};

export default AIReport;