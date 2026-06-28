import { PreviewHeader } from './preview/PreviewHeader'
import { PreviewSummary } from './preview/PreviewSummary'
import { PreviewSkills } from './preview/PreviewSkills'
import { PreviewExperience } from './preview/PreviewExperience'
import { PreviewEducation } from './preview/PreviewEducation'
import {PreviewProjects} from './preview/PreviewProjects'


const ResumePreview = ({ resumeData }) => {

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

export default ResumePreview