import { forwardRef } from "react";
import {MinimalTemplate} from "./preview/MinimalTemplate";
import {ModernTemplate} from "./preview/ModernTemplate";
import {ProfessionalTemplate}  from "./preview/ProfessionalTemplate";

const ResumePreview=forwardRef(({resumeData},ref)=>{
  let template;

  switch(resumeData.template){
    case "professional":
      template= <ProfessionalTemplate resumeData={resumeData}/>
      break;

    case "minimal":
      template=<MinimalTemplate resumeData={resumeData}/>
      break;

    default:
      template=<ModernTemplate resumeData={resumeData}/>
        
  }
  return(
    <div
     ref={ref}
     className="w-[794px] h-[1123px] bg-white text-black mx-auto overflow-hidden shadow-none" 
     >
      {template}
    </div>
  )
});
export default ResumePreview;