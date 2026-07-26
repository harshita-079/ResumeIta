import { useEffect} from "react";
import api from "../../api/axios";

const ResumeSelector = ({selectedResume,setSelectedResume,resumes,setResumes}) => {

  useEffect(() => {
    fetchResumes();
  }, []);

  const fetchResumes = async () => {
    try {

      const token = localStorage.getItem("token");

      const response = await api.get("/resume", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setResumes(response.data.resumes);


    } catch (error) {
      console.log(error);
    }
  };

  return (

    <div className="mt-10">

      <label className="block text-lg font-semibold mb-3">
        Select Resume
      </label>

      <select
        value={selectedResume}
        onChange={(e) => setSelectedResume(e.target.value)}
        className="w-full rounded-xl bg-slate-900 border border-white/10 p-4 outline-none"
      >

        <option 
          value="">
          Choose Resume
        </option>

        {resumes.map((resume) => (

          <option
            key={resume._id}
            value={resume._id}
          >
            {resume.data?.personal_info?.full_name || resume.title}
          </option>

        ))}

      </select>

    </div>

  );
};

export default ResumeSelector;