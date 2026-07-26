import { useState } from "react";
import SourceSelection from "../components/ats/SourceSelection";
import ResumeSelector from "../components/ats/ResumeSelector";
import PdfUploader from "../components/ats/PdfUploader";
import AnalysisType from "../components/ats/AnalysisType";
import LoadingAnalysis from "../components/ats/loadingAnalysis";
import AIReport from "../components/ats/AIReport";
import ManualReport from "../components/ats/ManualReport";
import { analyzeResumeAI} from "../services/aiService";
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
  if(!analysisType){
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
    if(analysisType==="manual"){
      const resume = resumes.find((r) => r._id === selectedResume);
      const result=analyzeATS(resume.data);
      setManualResult(result);
    } 
    else{
      const response=await analyzeResumeAI(selectedResume);
      setAiReport(response.analysis);
    }
  } catch(error){
    console.error("Error during analysis:",error);
  }
  finally{
    setLoading(false);
  } 
};

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      <div className="max-w-6xl mx-auto px-6 py-10">

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

        {((source==="resumeita" && selectedResume) || (source==="pdf" && pdfFile)) && (
            <AnalysisType
                analysisType={analysisType}
                setAnalysisType={setAnalysisType}
            />
        )}

        {analysisType && (
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