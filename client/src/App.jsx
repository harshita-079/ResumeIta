
import {Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Layout from './pages/Layout'
import ResumeBuilder from './pages/ResumeBuilder'
import Login from './pages/Login'
import Preview from './pages/preview'
import Profile from './pages/Profile'
import Setting from './pages/Setting'
import ProtectedRoute from './routes/ProtectedRoute'
import {Toaster} from 'react-hot-toast'
import Feedback from './pages/Feedback'

const App = () => {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path='/' element={<Home />}/>
        
        <Route path='app' 
        element={
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
        }
        >
          <Route index element={<Dashboard />}/>
          <Route path='builder/:resumeId' element={<ResumeBuilder />}/>
          <Route path='profile' element={<Profile/>}/>
          <Route path='setting' element={<Setting/>}/>
        </Route>
        <Route path='view/:resumeId' element={<Preview/>}/>
        <Route path='login' element={<Login />}/>
        <Route path='feedback' element={<Feedback />}/>
        {/* <Route path='signup' element={<Signup />}/> */}
      </Routes>
    </>
  )
}

export default App
