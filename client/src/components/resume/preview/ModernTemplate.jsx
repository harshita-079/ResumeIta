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
      <div className="w-full max-w-3xl bg-white text-black rounded-2xl shadow-2xl overflow-hidden">

        <div className="p-10">

          <PreviewHeader resumeData={resumeData} />

          <PreviewSummary resumeData={resumeData} />

          <PreviewEducation resumeData={resumeData} />

          <PreviewSkills resumeData={resumeData} />

          <PreviewExperience resumeData={resumeData} />

          <PreviewProjects resumeData={resumeData} />

        </div>

      </div>

    </div>
  )
}

