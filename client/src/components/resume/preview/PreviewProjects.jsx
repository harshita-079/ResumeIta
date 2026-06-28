export const PreviewProjects = ({ resumeData }) => {

  if (resumeData.projects.length === 0) return null;

  return (

    <div className="mt-8">

      <h2 className="text-2xl font-semibold mb-4 border-b pb-2">
        Projects
      </h2>

      <div className="space-y-6">

        {resumeData.projects.map((project, index) => (

          <div key={index}>

            <h3 className="text-lg font-semibold">
              {project.title}
            </h3>

            <p className="text-gray-600 mb-1">
              <strong>Tech Stack:</strong> {project.techStack}
            </p>

            <p className="text-gray-700 leading-7">
              {project.description}
            </p>

            <div className="flex gap-6 mt-2 text-blue-600 text-sm">

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              )}

              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              )}

            </div>

          </div>

        ))}

      </div>

    </div>

  );

};

export default PreviewProjects;