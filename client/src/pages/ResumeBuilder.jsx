import React, { useEffect, useState } from 'react'
import ResumeForm from '../components/resume/ResumeForm'
import ResumePreview from '../components/resume/ResumePreview'
import { useParams } from 'react-router-dom'
import { emptyResumeData } from '../assets/assets'
import api from '../api/axios'

const ResumeBuilder = () => {
  const {resumeId}=useParams()
  const [resumeData, setResumeData] = useState(null)

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