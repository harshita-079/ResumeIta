export const PreviewSummary=({resumeData})=>{
    return (
        <div className="mb-8">

            <h2 className="text-2xl font-semibold mb-4">
              Professional Summary
            </h2>

            <p className="text-gray-700 leading-8">
              {resumeData.professional_summary}
            </p>
            
        </div>
    )
}