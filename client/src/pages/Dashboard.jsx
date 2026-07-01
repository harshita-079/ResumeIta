import { useEffect, useState } from 'react'
import {
  FileText,
  ScanSearch,
  LayoutTemplate,
  Download,
  Plus,
  ArrowRight,
} from 'lucide-react'
import toast from 'react-hot-toast'

import { useNavigate } from 'react-router-dom'
import api from "../api/axios"

const Dashboard = () => {
  const navigate=useNavigate()

  const [allResume, setAllResume] = useState([])

  const  [currentUser,setCurrentUser]=useState(null);

  const totalTemplates=new Set(allResume.map(r=>r.template)).size;

  const loadCurrentUser=()=>{
    const user=JSON.parse(localStorage.getItem("currentUser"))

    setCurrentUser(user)
  }

  // Load Resume Data
  const loadResume = async () => {
    try {
      const token=localStorage.getItem("token");

      const response= await api.get('/resume',{
        headers:{
          Authorization:`Bearer ${token}`
        }
      });

      setAllResume(response.data.resumes);
      
    } catch (error) {
      console.log(error);
    }

  };

  const handleDeleteResume = async (resumeId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this resume? This action cannot be undone."
    );
    if (!confirmDelete) return;

    try {
      const token=localStorage.getItem("token");
      await api.delete(`/resume/${resumeId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setAllResume(prev=>
        prev.filter(resume => resume._id !== resumeId)
      );

      toast.success("Resume deleted successfully.");
    } catch (error) {
      console.error("Error deleting resume:", error);
      toast.error("Failed to delete resume. Please try again.");
    }
  };

  useEffect(() => {
    loadResume()
    loadCurrentUser()
  }, [])

  return (

    <div className="min-h-screen bg-slate-950 text-white">

      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* ================= TOP SECTION ================= */}

        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 mb-14">

          {/* Left */}
          <div>

            <h1 className="text-5xl font-bold leading-tight mb-4">

              Welcome back,{" "}

              <span className="bg-linear-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">

                {currentUser?.name}

              </span>

            </h1>

            <p className="text-slate-400 text-lg leading-8 max-w-2xl">

              Build smarter ATS-friendly resumes and track
              your resume performance with ResumeIta.

            </p>

          </div>

          {/* Right */}
          <button 
          onClick={()=>navigate('/app/builder/new')}
          className="flex items-center gap-2 px-7 py-4 rounded-2xl bg-linear-to-r from-indigo-500 to-purple-500 hover:scale-[1.02] hover:opacity-90 transition-all duration-300 font-medium shadow-lg shadow-indigo-500/20">

            <Plus size={20} />

            Create Resume

          </button>

        </div>

        {/* ================= STATS SECTION ================= */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-16">

          {/* Card 1 */}
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">

            <div className="absolute top-0 right-0 w-28 h-28 bg-indigo-500/10 blur-3xl rounded-full"></div>

            <div className="relative z-10">

              <div className="w-14 h-14 rounded-2xl bg-linear-to-r from-indigo-500 to-purple-500 flex items-center justify-center mb-6">

                <FileText size={24} />

              </div>

              <h2 className="text-4xl font-bold mb-2">

                {allResume.length}

              </h2>

              <p className="text-slate-400">

                Total Resumes

              </p>

            </div>

          </div>

          {/* Card 2 */}
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">

            <div className="absolute top-0 right-0 w-28 h-28 bg-green-500/10 blur-3xl rounded-full"></div>

            <div className="relative z-10">

              <div className="w-14 h-14 rounded-2xl bg-linear-to-r from-green-500 to-emerald-500 flex items-center justify-center mb-6">

                <ScanSearch size={24} />

              </div>

              <h2 className="text-4xl font-bold mb-2">

                coming soon

              </h2>

              <p className="text-slate-400">

                Average ATS Score

              </p>

            </div>

          </div>

          {/* Card 3 */}
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">

            <div className="absolute top-0 right-0 w-28 h-28 bg-pink-500/10 blur-3xl rounded-full"></div>

            <div className="relative z-10">

              <div className="w-14 h-14 rounded-2xl bg-linear-to-r from-pink-500 to-rose-500 flex items-center justify-center mb-6">

                <LayoutTemplate size={24} />

              </div>

              <h2 className="text-4xl font-bold mb-2">

                {totalTemplates}

              </h2>

              <p className="text-slate-400">

                Templates Used

              </p>

            </div>

          </div>

          {/* Card 4 */}
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">

            <div className="absolute top-0 right-0 w-28 h-28 bg-orange-500/10 blur-3xl rounded-full"></div>

            <div className="relative z-10">

              <div className="w-14 h-14 rounded-2xl bg-linear-to-r from-orange-500 to-amber-500 flex items-center justify-center mb-6">

                <Download size={24} />

              </div>

              <h2 className="text-4xl font-bold mb-2">

                0

              </h2>

              <p className="text-slate-400">

                Total Downloads

              </p>

            </div>

          </div>

        </div>

        {/* ================= MY RESUMES ================= */}

        <div className="mb-16">

          {/* Heading */}
          <div className="flex items-center justify-between mb-8">

            <div>

              <h2 className="text-3xl font-bold mb-2">

                My Resumes

              </h2>

              <p className="text-slate-400">

                Manage and track all your resumes.

              </p>

            </div>

            <button className="text-indigo-400 hover:text-indigo-300 transition flex items-center gap-2">

              View All

              <ArrowRight size={18} />

            </button>

          </div>

          {/* Resume Cards */}
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

                  {/* Top */}
                  <div className="flex items-start justify-between mb-6">

                    <div className="flex items-center gap-4">

                      {/* Avatar */}
                      <div
                        className="w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold text-white"
                        style={{ backgroundColor: resume.accentColor }}
                      >

                        {resume.data.personal_info.full_name?.charAt(0)?.toUpperCase() || resume.title.charAt(0).toUpperCase()}

                      </div>

                      <div>

                        <h3 className="text-xl font-semibold">

                          {resume.data?.personal_info?.full_name || resume.title}

                        </h3>

                        <p className="text-slate-400 text-sm mt-1">

                          {resume.data?.personal_info?.profession || "Resume"}

                        </p>

                      </div>

                    </div>

                    {/* Template Badge */}
                    <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-slate-300">

                      {resume.template}

                    </div>

                  </div>

                  {/* Summary */}
                  <p className="text-slate-400 text-sm leading-6 line-clamp-2 mb-5">

                    {resume.data?.professional_summary || "No summary available."}

                  </p>

                  {/* Experience */}
                  <div className="mb-5">

                    <h4 className="text-sm font-semibold text-white mb-2">

                      Experience

                    </h4>

                  {resume.data?.experience?.length>0 ? (
                    resume.data.experience.slice(0, 1).map((exp) => (

                      <div
                        key={exp._id}
                        className="rounded-xl border border-white/10 bg-white/5 p-3"
                      >

                        <p className="text-sm font-medium text-white">

                          {exp.position}

                        </p>

                        <p className="text-xs text-slate-400 mt-1">

                          {exp.company}

                        </p>

                      </div>
                    ))) : (
                      <p className="text-xs text-slate-500">No experience added yet.</p>
                    
                    )}

                  </div>

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

                    ))) : (
                      <span className="text-xs text-slate-500">No skills added yet.</span>
                    )}

                  </div>

                  {/* Bottom */}
                  <div className="flex items-center justify-between">

                    <p className="text-slate-500 text-sm">

                      Updated {new Date(resume.updatedAt).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}

                    </p>

                    <div className="flex items-center gap-3">

                      <button onClick={()=>navigate(`/app/builder/${resume._id}`)} className="px-5 py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition">

                        Edit

                      </button>

                      <button
                        onClick={() => handleDeleteResume(resume._id)}className="px-5 py-2 rounded-xl bg-red-600 hover:bg-red-700 transition">
                        Delete
                       </button>

                      <button
                        className="px-5 py-2 rounded-xl text-white transition"
                        style={{ backgroundColor: resume.accentColor }}
                      >

                        Analyze

                      </button>

                    </div>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

        {/* ================= QUICK ACTIONS ================= */}

        <div>

          {/* Heading */}
          <div className="mb-8">

            <h2 className="text-3xl font-bold mb-2">

              Quick Actions

            </h2>

            <p className="text-slate-400">

              Jump into your workflow faster.

            </p>

          </div>

          {/* Actions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Action 1 */}
            <button onClick={()=>navigate('/app/builder/new')} className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 text-left hover:-translate-y-2 hover:border-indigo-500/30 transition-all duration-500">

              <div className="absolute top-0 right-0 w-28 h-28 bg-indigo-500/10 blur-3xl rounded-full"></div>

              <div className="relative z-10">

                <div className="w-14 h-14 rounded-2xl bg-linear-to-r from-indigo-500 to-purple-500 flex items-center justify-center mb-6">

                  <Plus size={24} />

                </div>

                <h3 className="text-2xl font-semibold mb-3">

                  Create Resume

                </h3>

                <p className="text-slate-400 leading-7">

                  Start building a new ATS-friendly resume from scratch.

                </p>

              </div>

            </button>

            {/* Action 2 */}
            <button className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 text-left hover:-translate-y-2 hover:border-green-500/30 transition-all duration-500">

              <div className="absolute top-0 right-0 w-28 h-28 bg-green-500/10 blur-3xl rounded-full"></div>

              <div className="relative z-10">

                <div className="w-14 h-14 rounded-2xl bg-linear-to-r from-green-500 to-emerald-500 flex items-center justify-center mb-6">

                  <ScanSearch size={24} />

                </div>

                <h3 className="text-2xl font-semibold mb-3">

                  ATS Analyzer

                </h3>

                <p className="text-slate-400 leading-7">

                  Analyze resume ATS performance and improve job matching.

                </p>

              </div>

            </button>

            {/* Action 3 */}
            <button className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 text-left hover:-translate-y-2 hover:border-pink-500/30 transition-all duration-500">

              <div className="absolute top-0 right-0 w-28 h-28 bg-pink-500/10 blur-3xl rounded-full"></div>

              <div className="relative z-10">

                <div className="w-14 h-14 rounded-2xl bg-linear-to-r from-pink-500 to-rose-500 flex items-center justify-center mb-6">

                  <LayoutTemplate size={24} />

                </div>

                <h3 className="text-2xl font-semibold mb-3">

                  Explore Templates

                </h3>

                <p className="text-slate-400 leading-7">

                  Browse professional recruiter-friendly resume templates.

                </p>

              </div>

            </button>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Dashboard