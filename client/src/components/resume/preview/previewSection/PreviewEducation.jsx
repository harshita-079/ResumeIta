export const PreviewEducation = ({ resumeData }) => {

  if (resumeData.education.length === 0) return null;

  return (

    <div className="mt-8">

      <h2 className="text-2xl font-semibold mb-4 border-b pb-2">
        Education
      </h2>

      <div className="space-y-5">

        {resumeData.education.map((edu, index) => (

          <div key={index}>

            <div className="flex justify-between">

              <div>

                <h3 className="font-semibold text-lg">
                  {edu.degree}
                </h3>

                <p className="text-gray-700">
                  {edu.institution}
                </p>

                <p className="text-gray-600 text-sm">
                  {edu.fieldOfStudy}
                </p>

                {edu.cgpa && (
                  <p className="text-gray-600 text-sm">
                    CGPA: {edu.cgpa}
                  </p>
                )}

              </div>

              <div className="text-sm text-gray-500">

                {edu.startDate} - {edu.endDate}

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>

  );

};
