import React from 'react'
import Hero from '../components/home/Hero'
import Testimonials from '../components/home/Testimonials'
import Footer from '../components/home/Footer'
import Banner from '../components/home/Banner'
import Navbar from '../components/home/Navbar'
import Features from '../components/home/Features'
import Templates from '../components/home/Templates'
import Contact from '../components/home/Contact'


const Home = () => {
  return (
    <div className="bg-slate-950">
      <Banner/>
      <Navbar/>
      <Hero/>
      <Features/>
      <Testimonials/>
      <Templates/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home
