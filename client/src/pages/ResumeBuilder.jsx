import { useEffect, useRef, useState } from 'react'
import ResumeForm from '../components/resume/ResumeForm'
import ResumePreview from '../components/resume/ResumePreview'
import { useParams } from 'react-router-dom'
import { emptyResumeData } from '../assets/assets'
import api from '../api/axios'
import html2pdf from 'html2pdf.js'

const ResumeBuilder = () => {
  const {resumeId}=useParams()
  const [resumeData, setResumeData] = useState(null)

  const resumeRef=useRef(null);

  const handleDownloadPDF = () => {
    const element = resumeRef.current;

    const opt = {
      margin: [0,0,0,0],
      filename: `${resumeData?.personal_info?.full_name || "Resume"}-Resume.pdf`,

      image: {
        type: "jpeg",
        quality: 1,
      },

      html2canvas: {
        scale: 3,
        useCORS: true,
        backgroundColor: "#ffffff",
        scrollY: 0,
      },

      jsPDF: {
        unit: "mm",
        format: "a4",
        orientation: "portrait",
        compress: true,
      },
      pagebreak: {
      mode: ["avoid-all"],
    },
    };

    html2pdf().set(opt).from(element).save();
  };

  const loadResume=async ()=>{
    try {
      const token=localStorage.getItem("token")

      const response=await api.get(
        `/resume/${resumeId}`,{
          headers:{
            Authorization:`Bearer ${token}`
          }
        }
      )
      const resume = response.data.resume
      setResumeData({
        ...resume.data,
        _id:resume._id,
        title:resume.title,
        template:resume.template,
        accentColor:resume.accentColor
      })

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    //create new resume
    if(resumeId==="new"){
      setResumeData(emptyResumeData)
    }
    //edit existing resume
    else if (resumeId) {
      loadResume()
    }
    
  },[resumeId])

  if(!resumeData){
    return(
      <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white text-2xl">
        Loading...
      </div>
    )
  }

  return (

    <div className="app-page min-h-screen dark:bg-slate-950 text-white">

      <div className="flex justify-end items-center px-8 py-4 border-b border-white/10">

        {/* download button */}
        <button
          onClick={handleDownloadPDF}
          className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 transition font-medium"
        >
          Download PDF
        </button>

      </div>
      <div className="grid lg:grid-cols-2">

        {/* LEFT SIDE */}
        <div className="border-r border-white/10 min-h-screen overflow-y-auto">

          <ResumeForm
            resumeData={resumeData}
            setResumeData={setResumeData}
          />

        </div>

        {/* RIGHT SIDE */}
        <div className="bg-slate-900/40 min-h-screen overflow-y-auto p-6">

          <ResumePreview
            ref={resumeRef}
            resumeData={resumeData}
          />

        </div>


      </div>

    </div>
  )
}

export default ResumeBuilder