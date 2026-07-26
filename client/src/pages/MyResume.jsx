import { useEffect, useState } from "react";
import { Plus, FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import api from "../api/axios";

const MyResume = () => {
  const navigate = useNavigate();

  const [allResume, setAllResume] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  const loadCurrentUser = () => {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    setCurrentUser(user);
  };

  const loadResume = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await api.get("/resume", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setAllResume(response.data.resumes);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteResume = async (resumeId) => {
    const result = await Swal.fire({
      title: "Delete Resume?",
      text: "This action cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#dc2626",
      cancelButtonColor: "#6b7280",
      confirmButtonText: "Delete",
      cancelButtonText: "Cancel",
      reverseButtons: true,
      focusCancel: true,
    });

    if (!result.isConfirmed) return;

    try {
      const token = localStorage.getItem("token");

      await api.delete(`/resume/${resumeId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setAllResume((prev) =>
        prev.filter((resume) => resume._id !== resumeId)
      );

      toast.success("Resume deleted successfully.");
    } catch (error) {
      toast.error("Failed to delete resume.");
    }
  };

  useEffect(() => {
    loadResume();
    loadCurrentUser();
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Header */}

        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 mb-12">

          <div>
            <h1 className="text-5xl font-bold mb-4">
              My{" "}
              <span className="bg-linear-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
                Resumes
              </span>
            </h1>

            <p className="text-slate-400 text-lg max-w-2xl">
              Manage, edit, preview, download and organize all your resumes in
              one place.
            </p>
          </div>

          <button
            onClick={() => navigate("/app/builder/new")}
            className="flex items-center gap-2 px-7 py-4 rounded-2xl bg-linear-to-r from-indigo-500 to-purple-500 hover:scale-[1.02] transition-all"
          >
            <Plus size={20} />
            Create Resume
          </button>
        </div>

        {allResume.length === 0 ? (

          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-14 text-center">

            <div className="w-20 h-20 rounded-full bg-indigo-500/20 flex items-center justify-center mx-auto mb-6">

              <FileText size={40} />

            </div>

            <h2 className="text-3xl font-bold mb-3">
              No Resume Found
            </h2>

            <p className="text-slate-400 mb-8">
              Create your first ATS-friendly resume to get started.
            </p>

            <button
              onClick={() => navigate("/app/builder/new")}
              className="px-8 py-3 rounded-xl bg-linear-to-r from-indigo-500 to-purple-500"
            >
              Create Resume
            </button>

          </div>

        ) : (

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                      {allResume.map((resume) => (
              <div
                key={resume._id}
                className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:-translate-y-2 hover:border-indigo-500/30 transition-all duration-500"
              >
                {/* Glow */}
                <div
                  className="absolute top-0 right-0 w-32 h-32 blur-3xl rounded-full opacity-20"
                  style={{ backgroundColor: resume.accentColor }}
                ></div>

                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div
                        className="w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold text-white"
                        style={{ backgroundColor: resume.accentColor }}
                      >
                        {resume.data?.personal_info?.full_name
                          ?.charAt(0)
                          ?.toUpperCase() ||
                          resume.title.charAt(0).toUpperCase()}
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold">
                          {resume.data?.personal_info?.full_name ||
                            resume.title}
                        </h3>

                        <p className="text-slate-400 text-sm mt-1">
                          {resume.data?.personal_info?.profession || "Resume"}
                        </p>
                      </div>
                    </div>

                    <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-slate-300">
                      {resume.template}
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-slate-400 text-sm leading-6 line-clamp-2 mb-5">
                    {resume.data?.professional_summary ||
                      "No summary available."}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {resume.data?.skills?.length > 0 ? (
                      resume.data.skills.slice(0, 4).map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 rounded-lg bg-white/10 text-xs text-slate-300"
                        >
                          {skill}
                        </span>
                      ))
                    ) : (
                      <span className="text-xs text-slate-500">
                        No skills added yet.
                      </span>
                    )}
                  </div>

                  {/* Footer */}
                  <div className="flex flex-col gap-4">

                    <p className="text-slate-500 text-sm">
                      Updated{" "}
                      {new Date(resume.updatedAt).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </p>

                    <div className="grid grid-cols-3 gap-3">


                      <button
                        onClick={() =>
                          navigate(`/app/builder/${resume._id}`)
                        }
                        className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
                      >
                        Edit
                      </button>

                      <button
                        className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 transition"
                      >
                        Download
                      </button>

                      <button
                        onClick={() =>
                          handleDeleteResume(resume._id)
                        }
                        className="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-700 transition"
                      >
                        Delete
                      </button>

                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyResume;