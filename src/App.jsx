import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Layout from './pages/Layout'
import ResumeBuilder from './pages/ResumeBuilder'
import Login from './pages/Login'
import Preview from './pages/preview'
import Profile from './pages/Profile'
import Setting from './pages/Setting'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='app' element={<Layout />}>
          <Route index element={<Dashboard />}/>
          <Route path='builder/:resumeId' element={<ResumeBuilder />}/>
          <Route path='profile' element={<Profile/>}/>
          <Route path='setting' element={<Setting/>}/>
        </Route>
        <Route path='view/:resumeId' element={<Preview/>}/>
        <Route path='login' element={<Login />}/>
        {/* <Route path='signup' element={<Signup />}/> */}
      </Routes>
    </>
  )
}

export default App
