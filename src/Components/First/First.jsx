import React from 'react'
import './First.css'
import dark_arrow from '../../assets/dark-arrow.png'
const First = () => {
  const navbarOffset = 70;
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - navbarOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div id="home" className='hero container'>
      <div className='hero-text'>
        <h1>Empowering Students for a Brighter Tomorrow</h1>
        <p>At StudyLaneX, we provide a modern learning experience designed to help students grow with confidence.
            Our curated programs, expert guidance, and real-world learning opportunities prepare learners to excel in their chosen fields.
            We believe education should be accessible, meaningful, and inspiring — shaping future leaders with strong knowledge and practical skills.</p>
            <button
              className='btn'
              aria-label="Learn more — scroll to Learning Experience"
              onClick={() => scrollTo('learning')}
            >
              Learn more <img src={dark_arrow} alt=""/>
            </button>
      </div>
      
    </div>
  )
}

export default First
