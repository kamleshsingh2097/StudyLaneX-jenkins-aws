import React from "react";
import "./Business.css";

const Business = () => {
  return (
    <div className="business-wrapper">

      <a href="/courses" className="back-btn">← Back</a>

      <div className="business-content">

        <h1>Business & Management Courses</h1>

        <p className="intro">
          Business and Management programs prepare students for leadership,
          corporate strategy, marketing, finance and entrepreneurship roles.
          These courses focus on decision making, problem solving, team
          management and business growth.
        </p>

        {/* Degree Programs */}
        <h2>Popular Degree Programs</h2>
        <ul>
          <li>BBA — Bachelor of Business Administration (3 Years)</li>
          <li>MBA — Master of Business Administration (2 Years)</li>
          <li>B.Com — Commerce & Finance (3 Years)</li>
          <li>PGDM — Post Graduate Diploma in Management (2 Years)</li>
          <li>Executive MBA — For Working Professionals (1 Year)</li>
        </ul>

        {/* Specializations */}
        <h2>Major Specializations</h2>
        <ul>
          <li>Finance</li>
          <li>Marketing</li>
          <li>Human Resources</li>
          <li>Business Analytics</li>
          <li>International Business</li>
          <li>Entrepreneurship</li>
        </ul>

        {/* Career */}
        <h2>Career Opportunities</h2>
        <ul>
          <li>Business Analyst</li>
          <li>Marketing Manager</li>
          <li>Financial Analyst</li>
          <li>HR Manager</li>
          <li>Operations Manager</li>
          <li>Entrepreneur</li>
        </ul>

        {/* Top Colleges */}
        <h2>Top Universities Around the World</h2>

        <div className="college-grid">

          {/* INDIA */}
          <div className="college-card">
            <h3>IIM Ahmedabad</h3>
            <p><b>Country:</b> India</p>
            <p><b>Duration:</b> 2 Year MBA</p>
            <p>
              One of the best management institutes in Asia known for
              leadership and business education.
            </p>
            <p><b>Location:</b> Ahmedabad, India</p>
            <a href="https://www.iima.ac.in" target="_blank">Explore More</a>
          </div>

          <div className="college-card">
            <h3>IIM Bangalore</h3>
            <p><b>Country:</b> India</p>
            <p><b>Duration:</b> 2 Year MBA</p>
            <p>
              Known for entrepreneurship programs and global corporate
              partnerships.
            </p>
            <p><b>Location:</b> Bangalore, India</p>
            <a href="https://www.iimb.ac.in" target="_blank">Explore More</a>
          </div>

          {/* USA */}
          <div className="college-card">
            <h3>Harvard Business School</h3>
            <p><b>Country:</b> USA</p>
            <p><b>Duration:</b> 2 Year MBA</p>
            <p>
              One of the most prestigious business schools with global alumni
              network.
            </p>
            <p><b>Location:</b> Boston, USA</p>
            <a href="https://www.hbs.edu" target="_blank">Explore More</a>
          </div>

          <div className="college-card">
            <h3>Stanford Graduate School of Business</h3>
            <p><b>Country:</b> USA</p>
            <p><b>Duration:</b> 2 Year MBA</p>
            <p>
              Famous for innovation, startups and Silicon Valley connections.
            </p>
            <p><b>Location:</b> California, USA</p>
            <a href="https://www.gsb.stanford.edu" target="_blank">Explore More</a>
          </div>

          {/* UK */}
          <div className="college-card">
            <h3>London Business School</h3>
            <p><b>Country:</b> United Kingdom</p>
            <p><b>Duration:</b> 15–21 Months MBA</p>
            <p>
              Highly ranked international business school with global career
              opportunities.
            </p>
            <p><b>Location:</b> London, UK</p>
            <a href="https://www.london.edu" target="_blank">Explore More</a>
          </div>

          {/* CANADA */}
          <div className="college-card">
            <h3>University of Toronto – Rotman School</h3>
            <p><b>Country:</b> Canada</p>
            <p><b>Duration:</b> 2 Year MBA</p>
            <p>
              Known for finance, consulting and leadership programs.
            </p>
            <p><b>Location:</b> Toronto, Canada</p>
            <a href="https://www.rotman.utoronto.ca" target="_blank">Explore More</a>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Business;