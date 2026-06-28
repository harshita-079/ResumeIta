import { MinimalTemplate } from "./preview/MinimalTemplate";
import { ModernTemplate } from "./preview/ModernTemplate";
import { ProfessionalTemplate } from "./preview/ProfessionalTemplate";

const ResumePreview=({resumeData})=>{
  switch(resumeData.template){
    case "professional":
      return <ProfessionalTemplate resumeData={resumeData}/>;

    case "minimal":
      return <MinimalTemplate resumeData={resumeData}/>;

    default:
      return <ModernTemplate resumeData={resumeData}/>;
    
  }
};
export default ResumePreview;