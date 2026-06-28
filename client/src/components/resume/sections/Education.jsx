const Education = ({ resumeData, setResumeData }) => {

  const addEducation = () => {

    setResumeData((prev) => ({
      ...prev,
      education: [
        ...prev.education,
        {
          institution: "",
          degree: "",
          fieldOfStudy: "",
          startDate: "",
          endDate: "",
          cgpa: "",
        },
      ],
    }));

  };

  const handleChange = (index, e) => {

    const { name, value } = e.target;

    setResumeData((prev) => {

      const updatedEducation = [...prev.education];

      updatedEducation[index] = {
        ...updatedEducation[index],
        [name]: value,
      };

      return {
        ...prev,
        education: updatedEducation,
      };

    });

  };

  const removeEducation = (index) => {

    setResumeData((prev) => ({
      ...prev,
      education: prev.education.filter((_, i) => i !== index),
    }));

  };

  return (

    <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">

      <div className="flex justify-between items-center mb-6">

        <h2 className="text-2xl font-semibold">
          Education
        </h2>

        <button
          onClick={addEducation}
          className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 transition"
        >
          + Add Education
        </button>

      </div>

      {resumeData.education.length === 0 && (
        <p className="text-slate-400">
          No education added yet.
        </p>
      )}

      <div className="space-y-8">

        {resumeData.education.map((edu, index) => (

          <div
            key={index}
            className="border border-white/10 rounded-2xl p-5 bg-slate-900"
          >

            <div className="flex justify-between items-center mb-5">

              <h3 className="text-lg font-semibold">
                Education {index + 1}
              </h3>

              <button
                onClick={() => removeEducation(index)}
                className="text-red-400 hover:text-red-500"
              >
                Remove
              </button>

            </div>

            <div className="grid sm:grid-cols-2 gap-5">

              {/* Institution */}

              <div>

                <label className="text-sm text-slate-400 block mb-2">
                  Institution
                </label>

                <input
                  type="text"
                  name="institution"
                  value={edu.institution}
                  onChange={(e) => handleChange(index, e)}
                  className="w-full h-12 rounded-xl bg-slate-800 border border-white/10 px-4 outline-none focus:border-indigo-500"
                />

              </div>

              {/* Degree */}

              <div>

                <label className="text-sm text-slate-400 block mb-2">
                  Degree
                </label>

                <input
                  type="text"
                  name="degree"
                  value={edu.degree}
                  onChange={(e) => handleChange(index, e)}
                  className="w-full h-12 rounded-xl bg-slate-800 border border-white/10 px-4 outline-none focus:border-indigo-500"
                />

              </div>

              {/* Field of Study */}

              <div>

                <label className="text-sm text-slate-400 block mb-2">
                  Field of Study
                </label>

                <input
                  type="text"
                  name="fieldOfStudy"
                  value={edu.fieldOfStudy}
                  onChange={(e) => handleChange(index, e)}
                  className="w-full h-12 rounded-xl bg-slate-800 border border-white/10 px-4 outline-none focus:border-indigo-500"
                />

              </div>

              {/* CGPA */}

              <div>

                <label className="text-sm text-slate-400 block mb-2">
                  CGPA/Percentage
                </label>

                <input
                  type="text"
                  name="cgpa"
                  value={edu.cgpa}
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
                  value={edu.startDate}
                  onChange={(e) => handleChange(index, e)}
                  placeholder="2023"
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
                  value={edu.endDate}
                  onChange={(e) => handleChange(index, e)}
                  placeholder="2027 / Present"
                  className="w-full h-12 rounded-xl bg-slate-800 border border-white/10 px-4 outline-none focus:border-indigo-500"
                />

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>

  );

};

export default Education;