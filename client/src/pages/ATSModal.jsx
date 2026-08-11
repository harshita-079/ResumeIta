import { useState } from "react";
import SourceSelection from "../components/ats/SourceSelection";
import ResumeSelector from "../components/ats/ResumeSelector";
import PdfUploader from "../components/ats/PdfUploader";
import AnalysisType from "../components/ats/AnalysisType";
import LoadingAnalysis from "../components/ats/loadingAnalysis";
import AIReport from "../components/ats/AIReport";
import ManualReport from "../components/ats/ManualReport";
import { analyzeResumeAI, analyzePdfResumeAI} from "../services/aiService";
import {analyzeATS} from "../utils/atsAnalyzer";

const ATSModal = () => {
const [source, setSource] = useState("");
const [selectedResume,setSelectedResume]=useState("");
const [pdfFile,setPdfFile]=useState(null);
const [analysisType,setAnalysisType]=useState("");
const [loading,setLoading]=useState(false);
const [manualResult, setManualResult] = useState(null);
const [aiReport,setAiReport]=useState(null);
const [resumes,setResumes]=useState([]);

const handleAnalyze=async()=>{
  if (source === "resumeita" && !analysisType) {
    alert("Please select an analysis type.");
    return;
  }
  try{
    setLoading(true);
    setManualResult(null);
    setAiReport(null);
    // await new Promise((resolve) =>
    //         setTimeout(resolve, 3000)
    //     );

    //MANUAL
    if(analysisType==="manual"){
      const resume = resumes.find((r) => r._id === selectedResume);
      const result=analyzeATS(resume.data);
      setManualResult(result);
    } 
    //AI
    else{
      //RESUMEITA RESUME
      if(source==="resumeita"){
        const response=await analyzeResumeAI(selectedResume);
        setAiReport(response.analysis);
      }
      //PDF RESUME
      else if(source==="pdf" && pdfFile){
        const response=await analyzePdfResumeAI(pdfFile);
        setAiReport(response.analysis);
        
      }
    }
  } catch(error){
    console.error("Error during analysis:",error);
  }
  finally{
    setLoading(false);
  } 
};

  return (
    <div className="app-page min-h-screen dark:bg-slate-950 dark:text-white">

      <div className="app-card max-w-6xl mx-auto px-6 py-10">

        {/* Heading */}

        <h1 className="text-5xl font-bold mb-4">

          ATS{" "}
          <span className="bg-linear-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
            Analyzer
          </span>

        </h1>

        <p className="text-slate-400 text-lg mb-12">
          Analyze your resume using Manual ATS analysis or AI-powered review.
        </p>

        <SourceSelection
        source={source}
        setSource={setSource}
        />

        {source==="resumeita" && (
          <ResumeSelector
          selectedResume={selectedResume}
          setSelectedResume={setSelectedResume}
          resumes={resumes}
          setResumes={setResumes}
          />
        )}

        {source==="pdf" && (
            <PdfUploader
            pdfFile={pdfFile}
            setPdfFile={setPdfFile}
            />
        )}

        {source === "resumeita" && selectedResume && (
          <AnalysisType
            analysisType={analysisType}
            setAnalysisType={setAnalysisType}
          />
        )}

        {source === "pdf" && pdfFile && (
          <div className="mt-8 rounded-2xl border border-indigo-500/30 bg-indigo-500/10 p-5">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-lg font-semibold text-white">
                  PDF resumes use AI-powered analysis
                </p>
                <p className="text-sm text-slate-300 mt-1">
                  We'll extract the resume text from your PDF and run the Gemini AI reviewer automatically.
                </p>
              </div>

              <button
                onClick={handleAnalyze}
                disabled={loading}
                className="px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 transition font-medium text-white whitespace-nowrap"
              >
                {loading ? "Analyzing..." : "Analyze PDF with AI"}
              </button>
            </div>
          </div>
        )}

        {source === "resumeita" && analysisType && (
          <div className="mt-10 flex justify-center">
            <button
              onClick={handleAnalyze}
              disabled={loading}
              className="px-8 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 transition disabled:opacity-50"
            >
              {loading ? "Analyzing..." : "Analyze Resume"}
            </button>
          </div>
        )}

        {loading && (
          <LoadingAnalysis
          analysisType={analysisType}
          />
        )}

        {manualResult && (
          <ManualReport
          result={manualResult}
          onClose={() => setManualResult(null)}
          />
        )}


        {aiReport && (
          <AIReport
          report={aiReport}
          onClose={() => setAiReport(null)}
          />
        )}


      </div>

    </div>
  );
};

export default ATSModal;