export const PreviewSkills = ({ resumeData }) => {
  return (
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
  )
}