import { useEffect, useState } from 'react'
import {
  FileText,
  ScanSearch,
  LayoutTemplate,
  Download,
  Plus,

} from 'lucide-react'

import { useNavigate } from 'react-router-dom'
import api from "../api/axios"
import ATSModal from '../components/ats/ManualReport'


const Dashboard = () => {
  const navigate=useNavigate()

  const [allResume, setAllResume] = useState([])
  const [currentUser,setCurrentUser]=useState(null);
  const [analysisResults, setAnalysisResults] = useState(null);
  const [showATSModal, setShowATSModal] = useState(false);

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



  useEffect(() => {
    loadResume()
    loadCurrentUser()
  }, [])

  return (

    <div className="app-page min-h-screen dark:bg-slate-950 dark:text-white">

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
              your resume performance with <span className="bg-linear-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">ResumeIta</span>

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
          <div className="app-card relative overflow-hidden rounded-3xl border dark:border-white/10 dark:bg-white/5 backdrop-blur-xl p-6">

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
          <div className="app-card relative overflow-hidden rounded-3xl border dark:border-white/10 dark:bg-white/5 backdrop-blur-xl p-6">

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
          <div className="app-card relative overflow-hidden rounded-3xl border dark:border-white/10 dark:bg-white/5 backdrop-blur-xl p-6">

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
          <div className="app-card relative overflow-hidden rounded-3xl border dark:border-white/10 dark:bg-white/5 backdrop-blur-xl p-6">

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
            <button onClick={()=>navigate('/app/builder/new')} className="app-card relative overflow-hidden rounded-3xl border dark:border-white/10 dark:bg-white/5 backdrop-blur-xl p-8 text-left hover:-translate-y-2 hover:border-indigo-500/30 transition-all duration-500">

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
            <button
              onClick={() => navigate("/app/myresume")}
              className="app-card relative overflow-hidden rounded-3xl border dark:border-white/10 dark:bg-white/5 backdrop-blur-xl p-8 text-left hover:-translate-y-2 hover:border-blue-500/30 transition-all duration-500"
            >
              <div className="absolute top-0 right-0 w-28 h-28 bg-blue-500/10 blur-3xl rounded-full"></div>

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-linear-to-r from-blue-500 to-cyan-500 flex items-center justify-center mb-6">
                  <FileText size={24} />
                </div>

                <h3 className="text-2xl font-semibold mb-3">
                  My Resumes
                </h3>

                <p className="text-slate-400 leading-7">
                  View, edit, download and manage all your resumes in one place.
                </p>
              </div>
            </button>

            {/* Action 3 */}
            <button 
            onClick={()=>navigate('/app/ats')}
            className="app-card relative overflow-hidden rounded-3xl border dark:border-white/10 dark:bg-white/5 backdrop-blur-xl p-8 text-left hover:-translate-y-2 hover:border-green-500/30 transition-all duration-500">

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

            {/* Action 4 */}
            <button className="hidden relative overflow-hidden rounded-3xl border dark:border-white/10 dark:bg-white/5 backdrop-blur-xl p-8 text-left hover:-translate-y-2 hover:border-pink-500/30 transition-all duration-500">

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
        
      {showATSModal && (
        <ATSModal 
          result={analysisResults} 
          onClose={() => setShowATSModal(false)} 
        />
      )}
      </div>
    </div>
  )
}

export default Dashboard