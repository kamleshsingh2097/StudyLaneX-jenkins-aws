import React from "react";
import "./About.css";
import aboutVideo from "../../assets/about.mp4";

const About = () => {
  return (
    <div id="about" className="about">

      <div className="video-wrapper">
        <video
          src={aboutVideo}
          className="about-video"
          controls
        />
      </div>

      <div className="about-right">
        <h3>ABOUT US</h3>
        <h2>Nurturing Tomorrow’s Leaders Today</h2>

        <p>
          At StudyLaneX, we believe education is more than just learning concepts.
          It is about building confidence, skills, and clarity for the future.
        </p>

        <p>
          Our structured programs, expert mentors, and real-world learning
          approach help students grow step by step and become industry-ready.
        </p>

        <p>
          From academic foundations to career-focused training, StudyLaneX
          supports learners in turning their goals into reality.
        </p>
      </div>

    </div>
  );
};

export default About;
