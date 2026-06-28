const Experience = ({ resumeData, setResumeData }) => {

  const addExperience = () => {

    setResumeData((prev) => ({
      ...prev,
      experience: [
        ...prev.experience,
        {
          company: "",
          position: "",
          startDate: "",
          endDate: "",
          description: "",
        },
      ],
    }));
  };

  const handleChange = (index, e) => {

    const { name, value } = e.target;

    setResumeData((prev) => {

      const updatedExperience = [...prev.experience];

      updatedExperience[index] = {
        ...updatedExperience[index],
        [name]: value,
      };

      return {
        ...prev,
        experience: updatedExperience,
      };
    });
  };

  const removeExperience = (index) => {

    setResumeData((prev) => ({
      ...prev,
      experience: prev.experience.filter((_, i) => i !== index),
    }));
  };

  return (

    <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">

      <div className="flex justify-between items-center mb-6">

        <h2 className="text-2xl font-semibold">
          Experience
        </h2>

        <button
          onClick={addExperience}
          className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 transition"
        >
          + Add Experience
        </button>

      </div>

      {resumeData.experience.length === 0 && (

        <p className="text-slate-400">
          No experience added yet.
        </p>

      )}

      <div className="space-y-8">

        {resumeData.experience.map((exp, index) => (

          <div
            key={index}
            className="border border-white/10 rounded-2xl p-5 bg-slate-900"
          >

            <div className="flex justify-between items-center mb-5">

              <h3 className="font-semibold text-lg">
                Experience {index + 1}
              </h3>

              <button
                onClick={() => removeExperience(index)}
                className="text-red-400 hover:text-red-500"
              >
                Remove
              </button>

            </div>

            <div className="grid sm:grid-cols-2 gap-5">

              {/* Company */}

              <div>

                <label className="text-sm text-slate-400 block mb-2">
                  Company
                </label>

                <input
                  type="text"
                  name="company"
                  value={exp.company}
                  onChange={(e) => handleChange(index, e)}
                  className="w-full h-12 rounded-xl bg-slate-800 border border-white/10 px-4 outline-none focus:border-indigo-500"
                />

              </div>

              {/* Position */}

              <div>

                <label className="text-sm text-slate-400 block mb-2">
                  Position
                </label>

                <input
                  type="text"
                  name="position"
                  value={exp.position}
                  onChange={(e) => handleChange(index, e)}
                  className="w-full h-12 rounded-xl bg-slate-800 border border-white/10 px-4 outline-none focus:border-indigo-500"
                />

              </div>

              {/* Start Date */}

              <div>

                <label className="text-sm text-slate-400 block mb-2">
                  Start Date
                </label>

                <input
                  type="text"
                  name="startDate"
                  value={exp.startDate}
                  onChange={(e) => handleChange(index, e)}
                  placeholder="Jan 2024"
                  className="w-full h-12 rounded-xl bg-slate-800 border border-white/10 px-4 outline-none focus:border-indigo-500"
                />

              </div>

              {/* End Date */}

              <div>

                <label className="text-sm text-slate-400 block mb-2">
                  End Date
                </label>

                <input
                  type="text"
                  name="endDate"
                  value={exp.endDate}
                  onChange={(e) => handleChange(index, e)}
                  placeholder="Present"
                  className="w-full h-12 rounded-xl bg-slate-800 border border-white/10 px-4 outline-none focus:border-indigo-500"
                />

              </div>

            </div>

            {/* Description */}

            <div className="mt-5">

              <label className="text-sm text-slate-400 block mb-2">
                Description
              </label>

              <textarea
                rows={4}
                name="description"
                value={exp.description}
                onChange={(e) => handleChange(index, e)}
                placeholder="Describe your responsibilities..."
                className="w-full rounded-xl bg-slate-800 border border-white/10 p-4 outline-none resize-none focus:border-indigo-500"
              />

            </div>

          </div>

        ))}

      </div>

    </div>

  );
};

export default Experience;