import { PreviewHeader } from './previewSection/PreviewHeader'
import { PreviewSummary } from './previewSection/PreviewSummary'
import { PreviewSkills } from './previewSection/PreviewSkills'
import { PreviewExperience } from './previewSection/PreviewExperience'
import { PreviewEducation } from './previewSection/PreviewEducation'
import {PreviewProjects} from './previewSection/PreviewProjects'


export const ModernTemplate = ({ resumeData }) => {

  return (

    <div className="p-8 lg:p-12 flex justify-center">

      {/* Resume Sheet */}
      <div 
        className="w-full bg-white text-black overflow-hidden mx-auto"
        style={{
          width:"210mm",
          minHeight:"297mm",
        }}
        >

        <div className="p-12">

          <PreviewHeader resumeData={resumeData} />

          {resumeData.professional_summary?.trim() && (
            <PreviewSummary resumeData={resumeData} />
          )}

          {resumeData.education.length >0 && (
            <PreviewEducation resumeData={resumeData} />
          )}

          {resumeData.skills.length >0 &&(
            <PreviewSkills resumeData={resumeData} />
          )}

          {resumeData.skills.length >0 &&(
          <PreviewExperience resumeData={resumeData} />
          )}

          {resumeData.skills.length >0 &&(
          <PreviewProjects resumeData={resumeData} />
          )}

        </div>

      </div>

    </div>
  )
}

