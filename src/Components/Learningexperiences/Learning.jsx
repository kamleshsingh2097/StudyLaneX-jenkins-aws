import React from "react";
import "./Learning.css";

const LearningExperience = () => {
  return (
    <section id="learning" className="learning">
{/* The id attribute allows the navbar and buttons to scroll directly to this section. */}
      <div className="learning-header">
        <h3>LEARNING EXPERIENCE</h3>
        <h2>How Learning Feels at StudyLaneX</h2>
        <p>
          At StudyLaneX, we focus on creating a learning experience that is
          structured, practical, and supportive for every learner.
        </p>
      </div>

      <div className="learning-cards">
        <div className="learning-card">
          <h4>Structured Learning Path</h4>
          <p>
            Follow a well-organized course flow where topics are arranged step by step, making learning simple and systematic.
          </p>
        </div>

        <div className="learning-card">
          <h4>Clear & Concept-Based Learning </h4>
          <p>
              Focus on understanding core concepts clearly instead of memorizing, so learning feels logical and connected.
          </p>
        </div>

        <div className="learning-card">
          <h4>Guided Learning Support</h4>
          <p>
            Get clear explanations and learning support while studying, with the freedom to ask questions whenever needed.
          </p>
        </div>

        <div className="learning-card">
          <h4>Flexible Learning</h4>
          <p>
            Learn at your own pace with beginner-friendly explanations and
            stress-free learning.
          </p>
        </div>

        <div className="learning-card">
          <h4>Confidence & Skill Building</h4>
          <p>
            Build confidence, practical skills, and readiness for real career
            challenges.
          </p>
        </div>
      </div>

    </section>
  );
};

export default LearningExperience;
