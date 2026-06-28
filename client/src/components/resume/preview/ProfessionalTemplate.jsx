export const ProfessionalTemplate = ({ resumeData }) => {
  const {
    personal_info,
    professional_summary,
    skills,
    experience,
    education,
    projects,
  } = resumeData;

  return (
    <div className="p-8 flex justify-center bg-slate-200 min-h-screen">

      <div className="w-full max-w-4xl bg-white shadow-xl p-10">

        {/* ================= Header ================= */}

        <div className="text-center border-b-2 border-gray-300 pb-6">

          <h1 className="text-4xl font-bold uppercase tracking-widest">

            {personal_info.full_name}

          </h1>

          <p className="text-lg text-gray-600 mt-2">

            {personal_info.profession}

          </p>

          <div className="flex justify-center flex-wrap gap-6 mt-4 text-sm text-gray-700">

            <span>{personal_info.email}</span>

            <span>{personal_info.phone}</span>

            <span>{personal_info.location}</span>

          </div>

        </div>

        {/* ================= Summary ================= */}

        {professional_summary && (
          <section className="mt-8">

            <h2 className="text-black uppercase font-bold border-b border-gray-400 pb-2 mb-3">

              Professional Summary

            </h2>

            <p className="text-gray-700 leading-7">

              {professional_summary}

            </p>

          </section>
        )}

        {/* ================= Skills ================= */}

        {skills.length > 0 && (
          <section className="mt-8">

            <h2 className="uppercase font-bold border-b border-gray-400 pb-2 mb-3">

              Skills

            </h2>

            <div className="flex flex-wrap gap-2">

              {skills.map((skill, index) => (

                <span
                  key={index}
                  className="border border-gray-400 px-3 py-1 rounded text-black"
                >

                  {skill}

                </span>

              ))}

            </div>

          </section>
        )}

        {/* ================= Experience ================= */}

        {experience.length > 0 && (
          <section className="mt-8">

            <h2 className="uppercase font-bold border-b border-gray-400 pb-2 mb-4">

              Experience

            </h2>

            {experience.map((exp, index) => (

              <div key={index} className="mb-5">

                <div className="flex justify-between">

                  <h3 className="font-semibold text-lg">

                    {exp.position}

                  </h3>

                  <span className="text-sm text-gray-600">

                    {exp.startDate} - {exp.endDate}

                  </span>

                </div>

                <p className="font-medium text-gray-700">

                  {exp.company}

                </p>

                <p className="text-gray-600 mt-2">

                  {exp.description}

                </p>

              </div>

            ))}

          </section>
        )}

        {/* ================= Education ================= */}

        {education.length > 0 && (
          <section className="mt-8">

            <h2 className="uppercase font-bold border-b border-gray-400 pb-2 mb-4">

              Education

            </h2>

            {education.map((edu, index) => (

              <div key={index} className="mb-5">

                <div className="flex justify-between">

                  <h3 className="font-semibold">

                    {edu.degree}

                  </h3>

                  <span className="text-sm text-gray-600">

                    {edu.startYear} - {edu.endYear}

                  </span>

                </div>

                <p className="text-gray-700">

                  {edu.institute}

                </p>

              </div>

            ))}

          </section>
        )}

        {/* ================= Projects ================= */}

        {projects.length > 0 && (
          <section className="mt-8">

            <h2 className="uppercase font-bold border-b border-gray-400 pb-2 mb-4">

              Projects

            </h2>

            {projects.map((project, index) => (

              <div key={index} className="mb-5">

                <h3 className="font-semibold">

                  {project.title}

                </h3>

                <p className="text-gray-700 mt-1">

                  {project.techStack}

                </p>

                <p className="text-gray-600 mt-2">

                  {project.description}

                </p>

              </div>

            ))}

          </section>
        )}

      </div>

    </div>
  );
};
