export const PreviewExperience = ({ resumeData }) => {
    return (
    <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">
            Experience
        </h2>
        {resumeData.experience.length === 0 ? (
            <p className="text-gray-500">
                No experience added.
            </p>
        ) : (
            <div className="space-y-6">
                {resumeData.experience.map((exp, index) => (
                <div key={index}>
                    <div className="flex justify-between items-start">

            <div>

              <h3 className="text-lg font-semibold">
                {exp.position}
              </h3>

              <p className="text-gray-700">
                {exp.company}
              </p>

            </div>

            <span className="text-sm text-gray-500">

              {exp.startDate} - {exp.endDate}

            </span>

          </div>

          <p className="text-gray-700 mt-2 leading-7">

            {exp.description}

          </p>

        </div>

      ))}

    </div>

  )}

          </div>
    )
}