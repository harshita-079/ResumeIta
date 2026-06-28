const Projects = ({ resumeData, setResumeData }) => {

  const addProject = () => {

    setResumeData((prev) => ({
      ...prev,
      projects: [
        ...prev.projects,
        {
          title: "",
          techStack: "",
          github: "",
          liveLink: "",
          description: "",
        },
      ],
    }));

  };

  const handleChange = (index, e) => {

    const { name, value } = e.target;

    setResumeData((prev) => {

      const updatedProjects = [...prev.projects];

      updatedProjects[index] = {
        ...updatedProjects[index],
        [name]: value,
      };

      return {
        ...prev,
        projects: updatedProjects,
      };

    });

  };

  const removeProject = (index) => {

    setResumeData((prev) => ({
      ...prev,
      projects: prev.projects.filter((_, i) => i !== index),
    }));

  };

  return (

    <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">

      <div className="flex justify-between items-center mb-6">

        <h2 className="text-2xl font-semibold">
          Projects
        </h2>

        <button
          onClick={addProject}
          className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 transition"
        >
          + Add Project
        </button>

      </div>

      {resumeData.projects.length === 0 && (
        <p className="text-slate-400">
          No projects added yet.
        </p>
      )}

      <div className="space-y-8">

        {resumeData.projects.map((project, index) => (

          <div
            key={index}
            className="border border-white/10 rounded-2xl p-5 bg-slate-900"
          >

            <div className="flex justify-between items-center mb-5">

              <h3 className="text-lg font-semibold">
                Project {index + 1}
              </h3>

              <button
                onClick={() => removeProject(index)}
                className="text-red-400 hover:text-red-500"
              >
                Remove
              </button>

            </div>

            <div className="grid sm:grid-cols-2 gap-5">

              {/* Project Title */}

              <div>

                <label className="text-sm text-slate-400 block mb-2">
                  Project Title
                </label>

                <input
                  type="text"
                  name="title"
                  value={project.title}
                  onChange={(e) => handleChange(index, e)}
                  className="w-full h-12 rounded-xl bg-slate-800 border border-white/10 px-4 outline-none focus:border-indigo-500"
                />

              </div>

              {/* Tech Stack */}

              <div>

                <label className="text-sm text-slate-400 block mb-2">
                  Tech Stack
                </label>

                <input
                  type="text"
                  name="techStack"
                  value={project.techStack}
                  onChange={(e) => handleChange(index, e)}
                  placeholder="React, Node.js, MongoDB"
                  className="w-full h-12 rounded-xl bg-slate-800 border border-white/10 px-4 outline-none focus:border-indigo-500"
                />

              </div>

              {/* GitHub */}

              <div>

                <label className="text-sm text-slate-400 block mb-2">
                  GitHub Link
                </label>

                <input
                  type="url"
                  name="github"
                  value={project.github}
                  onChange={(e) => handleChange(index, e)}
                  placeholder="https://github.com/..."
                  className="w-full h-12 rounded-xl bg-slate-800 border border-white/10 px-4 outline-none focus:border-indigo-500"
                />

              </div>

              {/* Live Link */}

              <div>

                <label className="text-sm text-slate-400 block mb-2">
                  Live Demo
                </label>

                <input
                  type="url"
                  name="liveLink"
                  value={project.liveLink}
                  onChange={(e) => handleChange(index, e)}
                  placeholder="https://..."
                  className="w-full h-12 rounded-xl bg-slate-800 border border-white/10 px-4 outline-none focus:border-indigo-500"
                />

              </div>

            </div>

            <div className="mt-5">

              <label className="text-sm text-slate-400 block mb-2">
                Description
              </label>

              <textarea
                rows={4}
                name="description"
                value={project.description}
                onChange={(e) => handleChange(index, e)}
                placeholder="Describe your project..."
                className="w-full rounded-xl bg-slate-800 border border-white/10 p-4 outline-none resize-none focus:border-indigo-500"
              />

            </div>

          </div>

        ))}

      </div>

    </div>

  );

};

export default Projects;