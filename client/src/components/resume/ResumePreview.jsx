// components/resume/ResumePreview.jsx

import React from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'

const ResumePreview = ({ resumeData }) => {

  return (

    <div className="p-8 lg:p-12 flex justify-center">

      {/* Resume Sheet */}
      <div className="w-full max-w-3xl bg-white text-black rounded-2xl shadow-2xl overflow-hidden">

        <div className="p-10">

          {/* Header */}
          <div className="border-b border-gray-200 pb-8 mb-8">

            <h1 className="text-5xl font-bold mb-3">

              {resumeData.personal_info.full_name}

            </h1>

            <p className="text-xl text-gray-600 mb-6">

              {resumeData.personal_info.profession}

            </p>

            {/* Contact */}
            <div className="flex flex-wrap items-center gap-6 text-gray-600 text-sm">

              <div className="flex items-center gap-2">

                <Mail size={16} />

                {resumeData.personal_info.email}

              </div>

              <div className="flex items-center gap-2">

                <Phone size={16} />

                {resumeData.personal_info.phone}

              </div>

              <div className="flex items-center gap-2">

                <MapPin size={16} />

                {resumeData.personal_info.location}

              </div>

            </div>

          </div>

          {/* Summary */}
          <div className="mb-8">

            <h2 className="text-2xl font-semibold mb-4">

              Professional Summary

            </h2>

            <p className="text-gray-700 leading-8">

              {resumeData.professional_summary}

            </p>

          </div>

          {/* Skills */}
          <div>

            <h2 className="text-2xl font-semibold mb-4">

              Skills

            </h2>

            <div className="flex flex-wrap gap-3">

              {resumeData.skills.map((skill, index) => (

                <span
                  key={index}
                  className="px-4 py-2 rounded-xl bg-gray-100 text-gray-700"
                >

                  {skill}

                </span>

              ))}

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default ResumePreview