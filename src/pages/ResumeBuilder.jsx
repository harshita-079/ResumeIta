// pages/ResumeBuilder.jsx

import React, { useEffect, useState } from 'react'
import ResumeForm from '../components/resume/ResumeForm'
import ResumePreview from '../components/resume/ResumePreview'
import { useParams } from 'react-router-dom'
import { dummyResumeData, emptyResumeData } from '../assets/assets'

const ResumeBuilder = () => {
  const {resumeId}=useParams()
  const [resumeData, setResumeData] = useState(null)

  useEffect(()=>{
    //create new resume
    if(resumeId==="new"){
      setResumeData(emptyResumeData)
    }
    //edit existing resume
    else{
      const foundResume=dummyResumeData.find(
        (item)=>item._id===resumeId
      )
      if(foundResume){
        setResumeData(foundResume)
      }
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

    <div className="min-h-screen bg-slate-950 text-white">

      <div className="grid lg:grid-cols-2">

        {/* LEFT SIDE */}
        <div className="border-r border-white/10 min-h-screen overflow-y-auto">

          <ResumeForm
            resumeData={resumeData}
            setResumeData={setResumeData}
          />

        </div>

        {/* RIGHT SIDE */}
        <div className="bg-slate-900/40 min-h-screen overflow-y-auto">

          <ResumePreview
            resumeData={resumeData}
          />

        </div>

      </div>

    </div>
  )
}

export default ResumeBuilder