// components/resume/ResumeForm.jsx

import React from 'react'

const ResumeForm = ({ resumeData, setResumeData }) => {

  const handleChange = (e) => {

    const { name, value } = e.target

    setResumeData((prev) => ({
      ...prev,

      personal_info: {
        ...prev.personal_info,
        [name]: value,
      },
    }))
  }

  const handleSaveResume=()=>{
    //get existing resumes
    const existingResumes=
      JSON.parse(localStorage.getItem("resumes"))||[]
    
    //check if resume already exists
    const resumeIndex=existingResumes.findIndex(
      (item)=>item._id===resumeData._id
    )
    //update existing resume
    if(resumeIndex!=-1){
      existingResumes[resumeIndex]=resumeData
    }

    //create new resume
    else{
      existingResumes.push({
        ...resumeData,
        _id:Date.now().toString(),
      })
    }
    //save updated array
    localStorage.setItem(
      "resumes",
      JSON.stringify(existingResumes)
    )

    alert("Resume Saved Successfully!")
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

        {/* Personal Info */}
        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">

          <h2 className="text-2xl font-semibold mb-6">

            Personal Information

          </h2>

          <div className="grid sm:grid-cols-2 gap-5">

            {/* Full Name */}
            <div>

              <label className="text-sm text-slate-400 block mb-3">

                Full Name

              </label>

              <input
                type="text"
                name="full_name"
                value={resumeData.personal_info.full_name}
                onChange={handleChange}
                placeholder="Enter full name"
                className="w-full h-12 rounded-2xl bg-slate-900 border border-white/10 px-4 outline-none focus:border-indigo-500 transition"
              />

            </div>

            {/* Profession */}
            <div>

              <label className="text-sm text-slate-400 block mb-3">

                Profession

              </label>

              <input
                type="text"
                name="profession"
                value={resumeData.personal_info.profession}
                onChange={handleChange}
                placeholder="Frontend Developer"
                className="w-full h-12 rounded-2xl bg-slate-900 border border-white/10 px-4 outline-none focus:border-indigo-500 transition"
              />

            </div>

            {/* Email */}
            <div>

              <label className="text-sm text-slate-400 block mb-3">

                Email

              </label>

              <input
                type="email"
                name="email"
                value={resumeData.personal_info.email}
                onChange={handleChange}
                placeholder="Enter email"
                className="w-full h-12 rounded-2xl bg-slate-900 border border-white/10 px-4 outline-none focus:border-indigo-500 transition"
              />

            </div>

            {/* Phone */}
            <div>

              <label className="text-sm text-slate-400 block mb-3">

                Phone

              </label>

              <input
                type="text"
                name="phone"
                value={resumeData.personal_info.phone}
                onChange={handleChange}
                placeholder="+91 9876543210"
                className="w-full h-12 rounded-2xl bg-slate-900 border border-white/10 px-4 outline-none focus:border-indigo-500 transition"
              />

            </div>

            {/* Location */}
            <div className="sm:col-span-2">

              <label className="text-sm text-slate-400 block mb-3">

                Location

              </label>

              <input
                type="text"
                name="location"
                value={resumeData.personal_info.location}
                onChange={handleChange}
                placeholder="Delhi, India"
                className="w-full h-12 rounded-2xl bg-slate-900 border border-white/10 px-4 outline-none focus:border-indigo-500 transition"
              />

            </div>

          </div>

        </div>

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