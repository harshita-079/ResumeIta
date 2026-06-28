import api from '../../api/axios'
import PersonalInfo from './sections/PersonalInfo'
import ProfessionalSummary from './sections/ProfessionalSummary'
import Skills from './sections/Skills'
import Experience from './sections/Experience'
import Education from './sections/Education'
import Projects from './sections/Projects'
import {useNavigate} from 'react-router-dom'
import { TemplateSelector } from './TemplateSelector'

const ResumeForm = ({ resumeData, setResumeData }) => {
  const navigate=useNavigate();

  const handleSaveResume=async ()=>{
    const fullName=resumeData.personal_info.full_name.trim();
    const email=resumeData.personal_info.email.trim();
    const profession=resumeData.personal_info.profession.trim();

    if(!fullName || !email || !profession){
      return alert("Please fill all required fields");
    }
    try {
      const token=localStorage.getItem("token")

      //existing resume
      if(resumeData._id){
        await api.put(`/resume/${resumeData._id}`,
      {
    title:
      resumeData.personal_info.full_name || "Untitled Resume",

    template:
      resumeData.template || "Modern Pro",

    accentColor:
      resumeData.accentColor || "#6366f1",

    data: {
      personal_info: resumeData.personal_info,
      professional_summary: resumeData.professional_summary,
      skills: resumeData.skills,
      experience: resumeData.experience,
      education: resumeData.education,
      projects: resumeData.projects,
      accentColor: resumeData.accentColor
    }
  },
  {
    headers:{
      Authorization:`Bearer ${token}`
    }
  }
)

        alert("Resume Updated Successfully")
      }

      //new resume
      else{
        const response=await api.post("/resume/create",
          {
            title:
            resumeData.personal_info.full_name || "Untitled Resume",

            template:
            resumeData.template ||"Modern Pro",

            accentColor:
            resumeData.accentColor || "#6366f1",

            data:
            resumeData
          },
          {
            headers:{
              Authorization:`Bearer ${token}`
            }
          }
      )
      setResumeData(prev=>({
        ...prev,
        _id:response.data.resume._id
      }))

      alert("Resume Created Successfully")
      }
    } catch (error) {
      console.log(error)

      alert("Failed to save resume")
    }
    navigate("/app")
  }

  return (

    <div className="p-8 lg:p-12">

      {/* Heading */}
      <div className="mb-10">

        <h1 className="text-4xl font-bold mb-3">

          Resume Builder

        </h1>

        <p className="text-slate-400 leading-7">

          Build ATS-friendly resumes with live preview.

        </p>

      </div>

      {/* Form */}
      <div className="space-y-8">
        <TemplateSelector
          resumeData={resumeData}
          setResumeData={setResumeData}
        />

        <PersonalInfo
          resumeData={resumeData}
          setResumeData={setResumeData}
        />

        <ProfessionalSummary
          resumeData={resumeData}
          setResumeData={setResumeData}
        />  

        <Education
          resumeData={resumeData}
          setResumeData={setResumeData}
        />

        <Skills
          resumeData={resumeData}
          setResumeData={setResumeData}
        />

        <Experience
          resumeData={resumeData}
          setResumeData={setResumeData}
        />
        <Projects
          resumeData={resumeData}
          setResumeData={setResumeData}
        />
        

      </div>

      
      <button
        onClick={handleSaveResume}
        className="px-6 py-3 rounded-2xl bg-linear-to-r from-indigo-500 to-purple-500 hover:opacity-90 transition mt-4"
      >
        Save Resume
      </button>
    </div>
    
  )
}

export default ResumeForm