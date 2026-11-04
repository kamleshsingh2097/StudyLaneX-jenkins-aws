// Engineering.jsx
import React from "react";
import "./Engineering.css";

const Engineering = () => {
  return (
    <div className="engineering-wrapper">

      <a href="/courses" className="back-btn">← Back</a>

      <div className="engineering-content">

        <h1>Engineering & Technology Courses</h1>

        <p className="intro">
          Engineering is one of the most prestigious, innovative and high-impact fields
          worldwide. Engineers design, build and solve real-world problems using science,
          mathematics and advanced technologies. Below is a complete breakdown of major
          engineering branches, skills, subjects, detailed descriptions and career paths.
        </p>

        {/* MAIN BRANCHES */}
        <h2>Major Engineering Branches</h2>
        <ul>
          <li>Computer Science & Engineering (CSE)</li>
          <li>Information Technology (IT)</li>
          <li>Electronics & Communication Engineering (ECE)</li>
          <li>Electrical Engineering (EE)</li>
          <li>Mechanical Engineering (ME)</li>
          <li>Civil Engineering (CE)</li>
          <li>Automobile Engineering</li>
          <li>Mechatronics & Robotics</li>
          <li>Biotechnology Engineering</li>
          <li>Aerospace Engineering</li>
          <li>Chemical Engineering</li>
          <li>Environmental Engineering</li>
          <li>AI & Data Engineering (new age)</li>
        </ul>

        {/* DETAILED DESCRIPTIONS */}
        <h2>Detailed Program Insights</h2>

        <h3>Computer Science & Engineering (CSE)</h3>
        <p>
          The most in-demand engineering branch. Covers programming, algorithms, operating
          systems, cyber security, cloud computing, artificial intelligence, data structures,
          full-stack development, databases, networks and machine learning. Careers include
          software engineer, AI engineer, data scientist, cloud architect and more.
        </p>

        <h3>Electronics & Communication Engineering (ECE)</h3>
        <p>
          Focuses on circuits, microprocessors, IoT systems, embedded systems, VLSI design,
          communication technology, signal processing, and automation. Ideal for careers in
          telecom, IoT, chip design, robotics, sensors and automation industries.
        </p>

        <h3>Mechanical Engineering (ME)</h3>
        <p>
          One of the oldest and broadest engineering fields. Includes thermodynamics,
          mechanics, CAD/CAM, automotive technologies, manufacturing, robotics systems and
          industrial design. Mechanical engineers work in aerospace, automotive, energy,
          machinery, research labs and defense.
        </p>

        <h3>Civil Engineering (CE)</h3>
        <p>
          Covers design & construction of buildings, roads, dams, tunnels, bridges,
          airports and water systems. Civil engineers work with structural analysis,
          surveying, architecture coordination, construction materials and Urban
          Development planning.
        </p>

        <h3>Electrical Engineering (EE)</h3>
        <p>
          Deals with power systems, control systems, circuits, motors, renewable energy,
          smart grids and electrical design. High demand in energy plants, power
          companies, railways, manufacturing and renewable energy sectors.
        </p>

        <h3>Aerospace Engineering</h3>
        <p>
          Specializes in aircraft & spacecraft systems, aerodynamics, propulsion, materials
          and flight mechanics. Aerospace engineers work with aviation companies, space
          agencies, defense research and drone technology.
        </p>

        <h3>Biotechnology Engineering</h3>
        <p>
          Combines biology with engineering. Subjects include genetic engineering, bioinformatics,
          cell biology, pharmaceuticals, industrial biotech and medical technology. Careers: R&D,
          hospitals, pharma companies, research labs, agriculture tech, etc.
        </p>

        <h3>Robotics & Mechatronics</h3>
        <p>
          Involves automation, robotic programming, sensors, actuators, AI control systems,
          machine vision and industrial robotics. Huge demand in manufacturing, automobiles,
          aerospace and defense.
        </p>

        {/* CAREERS */}
        <h2>Career Opportunities</h2>
        <ul>
          <li>Software Engineer / App Developer</li>
          <li>AI / ML Engineer</li>
          <li>Robotics Engineer</li>
          <li>Mechanical Design Engineer</li>
          <li>Electrical System Designer</li>
          <li>Civil Structural Engineer</li>
          <li>Aerospace Technician / Flight Analyst</li>
          <li>Biotech Research Scientist</li>
          <li>Data Engineer / Cloud Engineer</li>
          <li>Automobile Engineer</li>
          <li>Industrial Process Engineer</li>
        </ul>

        {/* WHY ENGINEERING */}
        <h2>Why Choose Engineering?</h2>
        <p>
          <ul>
            <li>✔ One of the highest-paid career fields worldwide  </li>
            <li>✔ Global job opportunities </li>
            <li>✔ Endless research & innovation  </li>
            <li>✔ Diverse specializations  </li>
            <li>✔ Perfect for problem-solvers </li>
            <li>✔ Strong job security</li>
            <li>✔ Direct contribution to technology & development  </li>
          </ul>
         
         
        </p>

        {/* RESOURCES */}
        <h2>Helpful External Resources</h2>
        <p>
          🔗 <a href="https://en.wikipedia.org/wiki/Engineering" target="_blank">Engineering — Wikipedia</a><br />
          🔗 <a href="https://www.google.com/search?q=engineering+branches" target="_blank">Google: Engineering Branches</a><br />
          🔗 <a href="https://www.coursera.org/courses?query=engineering" target="_blank">Engineering Courses — Coursera</a>
        </p>
        {/* Top Engineering Universities */}

<h2 className="college-title">Top Engineering Universities Around the World</h2>

<div className="college-grid">

  <div className="college-card">
    <h3>Massachusetts Institute of Technology (MIT)</h3>
    <p><b>Country:</b> USA</p>
    <p><b>Duration:</b> 4 Years</p>
    <p>
      One of the world's top engineering universities known for innovation,
      robotics research, and advanced technology development.
    </p>
    <p><b>Location:</b> Cambridge, USA</p>
    <a href="https://www.mit.edu" target="_blank">Explore University</a>
  </div>

  <div className="college-card">
    <h3>Stanford University</h3>
    <p><b>Country:</b> USA</p>
    <p><b>Duration:</b> 4 Years</p>
    <p>
      Known for strong engineering programs and close connection
      with Silicon Valley startups and technology companies.
    </p>
    <p><b>Location:</b> California, USA</p>
    <a href="https://www.stanford.edu" target="_blank">Explore University</a>
  </div>

  <div className="college-card">
    <h3>University of Cambridge</h3>
    <p><b>Country:</b> United Kingdom</p>
    <p><b>Duration:</b> 3–4 Years</p>
    <p>
      One of the most prestigious universities offering world-class
      engineering research and academic excellence.
    </p>
    <p><b>Location:</b> Cambridge, UK</p>
    <a href="https://www.cam.ac.uk" target="_blank">Explore University</a>
  </div>

  <div className="college-card">
    <h3>ETH Zurich</h3>
    <p><b>Country:</b> Switzerland</p>
    <p><b>Duration:</b> 3–4 Years</p>
    <p>
      Famous for mechanical engineering, robotics,
      and advanced technology research.
    </p>
    <p><b>Location:</b> Zurich, Switzerland</p>
    <a href="https://ethz.ch" target="_blank">Explore University</a>
  </div>

  <div className="college-card">
    <h3>IIT Bombay</h3>
    <p><b>Country:</b> India</p>
    <p><b>Duration:</b> 4 Years</p>
    <p>
      One of India's best engineering institutes known for
      strong technical education and research.
    </p>
    <p><b>Location:</b> Mumbai, India</p>
    <a href="https://www.iitb.ac.in" target="_blank">Explore University</a>
  </div>

  <div className="college-card">
    <h3>National University of Singapore (NUS)</h3>
    <p><b>Country:</b> Singapore</p>
    <p><b>Duration:</b> 4 Years</p>
    <p>
      Leading Asian university for engineering,
      innovation and advanced technology research.
    </p>
    <p><b>Location:</b> Singapore</p>
    <a href="https://www.nus.edu.sg" target="_blank">Explore University</a>
  </div>

</div>

      </div>
    </div>
  );
};

export default Engineering;
