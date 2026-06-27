import React, { useState } from "react";

const Skills = ({ resumeData, setResumeData }) => {

  const [skillInput, setSkillInput] = useState("");

  const addSkill = () => {

    const skill = skillInput.trim();

    if (!skill) return;

    if (resumeData.skills.includes(skill)) {
      setSkillInput("");
      return;
    }

    setResumeData(prev => ({
      ...prev,
      skills: [...prev.skills, skill]
    }));

    setSkillInput("");
  };

  const removeSkill = (index) => {

    setResumeData(prev => ({
      ...prev,
      skills: prev.skills.filter((_, i) => i !== index)
    }));

  };

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">

      <h2 className="text-2xl font-semibold mb-6">
        Skills
      </h2>

      <div className="flex gap-3">

        <input
          type="text"
          placeholder="React, Node.js, MongoDB..."
          value={skillInput}
          onChange={(e) => setSkillInput(e.target.value)}
          className="flex-1 h-12 rounded-2xl bg-slate-900 border border-white/10 px-4 outline-none focus:border-indigo-500"
        />

        <button
          onClick={addSkill}
          onKeyDown={(e)=>{
            if(e.key==="Enter") {
              e.preventDefault();
              addSkill();
            }
          }}
          className="px-6 rounded-2xl bg-indigo-600 hover:bg-indigo-700 transition"
        >
          Add
        </button>

      </div>

      <div className="flex flex-wrap gap-3 mt-6">

        {resumeData.skills.map((skill, index) => (

          <div
            key={index}
            className="flex items-center gap-2 bg-indigo-600 rounded-xl px-4 py-2"
          >

            <span>{skill}</span>

            <button
              onClick={() => removeSkill(index)}
              className="text-white hover:text-red-300"
            >
              ✕
            </button>

          </div>

        ))}

      </div>

    </div>
  );
};

export default Skills;