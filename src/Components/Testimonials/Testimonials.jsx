import React, { useEffect, useState } from "react";
import "./Testimonials.css";
import { getFeedback } from "../../services/feedbackService"; // backend se feedback fetch krne ke liye service file se function import kiya hai
import FeedbackForm from '../FeedbackForm'; // for add new feedback form modal
import FeedbackModal from '../FeedbackModal'; // for read the complete feedback in modal

// fallback data (DB empty ho to)
const fallbackTestimonials = [
  {
    name: "Neha Verma",
    role: "Beginner Learner",
    rating: 5,
    feedback:
      "StudyLaneX helped me understand concepts clearly from the very beginning. The explanations are simple, structured, and easy to follow. I never felt overwhelmed while learning new topics. Each concept builds naturally on the previous one, which made learning smooth. The platform design is calm and motivating. It gave me confidence to continue learning consistently. I feel more comfortable exploring technical subjects now.",
  },
  {
    name: "Rohit Singh",
    role: "College Student",
    rating: 4,
    feedback:
      "The learning structure feels very beginner-friendly and well organized. I didn’t feel confused while studying new topics. The flow of content is logical and easy to revise before exams. Concepts are broken down into smaller parts which really helps. It saves time and reduces stress during learning. I appreciate the clarity in explanations. Overall, the platform supports steady and focused learning.",
  },
  {
    name: "Anjali Sharma",
    role: "Self Learner",
    rating: 5,
    feedback:
      "I really liked the step-by-step learning approach provided by StudyLaneX. It helped me gain confidence while learning on my own. The explanations feel human and not rushed. I could learn at my own pace without pressure. The structure kept me motivated to continue daily. It made self-learning enjoyable and effective. I feel more confident applying what I learned.",
  },
];

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]); // Backend se jo feedback aayega wo is state me store hoga
  const [selectedFeedback, setSelectedFeedback] = useState(null); // for read full feedback whenever user click on the card
  const [showForm, setShowForm] = useState(false); //when user click on add feedback button, form  will open

  // Fetch feedback (reuse hota hai)  [ Backend se feedback lo aur agar kuch nahi aata to fallback data show karo ]
  const fetchFeedback = async () => {
    try {
      const data = await getFeedback();
      setTestimonials(data.length ? data : fallbackTestimonials);
    } catch (err) {
      console.error(err);
      setTestimonials(fallbackTestimonials);
    }
  };

  useEffect(() => {
    fetchFeedback();
  }, []);

  return (
    <section id="testimonials" className="testimonials">
      {/* HEADER */}
      <div className="testimonials-header">
        <h3>LEARNER FEEDBACK</h3>
        <h2>What Early Learners Say</h2>
        <p>
          Honest feedback from learners who are exploring courses and building
          skills with StudyLaneX.
        </p>
      </div>

      {/* CARDS */}
      <div className="testimonial-cards">
        {testimonials.map((item, index) => (
          <div
            className="testimonial-card"
            key={index}
            onClick={() => setSelectedFeedback(item)}
          >
            <div className="stars">
              {"★".repeat(item.rating)}
              {"☆".repeat(5 - item.rating)}
            </div>
            {/*feedback ka pehla 100 characters show hoga, pura feedback modal me read karne ke liye*/}
            <p className="feedback">
              “{(item.message || item.feedback).slice(0, 100)}…” 
            </p>

            <div className="user">
              <div className="avatar">
                {item.name ? item.name.charAt(0) : "U"}
              </div>
              <div>
                <h4>{item.name}</h4>
                <span>{item.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ADD FEEDBACK BUTTON */}
      <div className="testimonial-footer">
        <button
          className="add-feedback-btn"
          onClick={() => setShowForm(true)}
        >
          Add Your Feedback
        </button>
      </div>

      {/* READ FEEDBACK MODAL ( here the concept of using && is agar feedback selected ho tbhi modal show karo ) */}
      {selectedFeedback && (
        <FeedbackModal
          data={selectedFeedback}
          onClose={() => setSelectedFeedback(null)}
        />
      )}

      {/* ADD FEEDBACK FORM MODAL  */}
      {showForm && (
        <FeedbackForm
          onClose={() => setShowForm(false)}
          onSuccess={fetchFeedback} // auto refresh , onsucress = [New feedback add hua , API call again ,Latest data show]
        />
      )}
    </section>
  );
};

export default Testimonials;
