
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const Layout = () => {
  return (
    <div className="app-page min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-white transition-colors duration-300">
      <Navbar/>
      <main className="px-6 py-6">
        <Outlet/>
      </main>
    </div>
  )
}

export default Layout
