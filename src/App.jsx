import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import First from './Components/First/First'
import Cource from './Components/Cources/Cource'
import Arts from '../public/Arts';
import Business from '../public/Business';
import Cs from '../public/Cs';
import Engineering from '../public/Engineering';
import Health from '../public/Health';
import Professional from '../public/Professional';
import { Routes, Route } from "react-router-dom";
import About from './Components/About.jsx/About';
import LearningExperience from './Components/Learningexperiences/Learning';
import Testimonials from './Components/Testimonials/Testimonials';
import Contact from './Components/Contact';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Home Page */}
        <Route path="/" element={
          <>
            <First />
            <div className='container'><Cource /></div>
          </>
        } />
        {/* Course Pages */}
        <Route path="/courses/arts" element={<Arts />} />
        <Route path="/courses/business" element={<Business />} />
        <Route path="/courses/cs" element={<Cs />} />
        <Route path="/courses/engineering" element={<Engineering />} />
        <Route path="/courses/health" element={<Health />} />
        <Route path="/courses/professional" element={<Professional />} />
      </Routes>
      {/* React Router allows navigation without reloading the page which improves performance and user experience.*/ }
      <About/>
      <LearningExperience/>
      <Testimonials/>
      <Contact/>
    </>
  )
}

export default App;
