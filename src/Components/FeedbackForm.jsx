// User se feedback lena aur backend API ko bhejna

import React, { useState } from "react";
import { postFeedback } from "../services/feedbackService";// Form data backend API ko bhejne ke liye function
import "./FeedbackForm.css";

const FeedbackForm = ({ onClose, onSuccess }) => {
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    rating: 5,
    message: "",
  }); // form input store krna

  const [loading, setLoading] = useState(false); // Submit button disable karna jab request chal rahi ho
  const [error, setError] = useState(""); //User ko error message show karna

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }; // form ke har input field ke change ko handle karna

  const handleSubmit = async (e) => {
    e.preventDefault(); // to prevent page reload on form submission

    // validation
    if (!formData.name || !formData.message) {
      setError("Name and feedback are required");
      return;
    }

    setError(""); // error reset karna agar pehle se koi error tha
    setLoading(true); // API call chal rahi hai, button disable kar do

    try {
      await postFeedback(formData); //send data to backend

      setFormData({ name: "", role: "", rating: 5, message: "" });

      onSuccess(); // testimonials refresh
      onClose();   // modal close
    } catch (err) {
      setError("Something went wrong. Try again.");
    } finally {
      setLoading(false); // API call khatam ho gayi, button dobara enable kar do
    }
  }; // form submit hone par API call karna aur feedback bhejna backend ko, success hone par form reset karna, testimonials refresh karna aur modal close karna, error aane par user ko error message show karna

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>✕</button>

        <h3>Share Your Experience</h3>

        {error && <p className="error">{error}</p>}

        <form onSubmit={handleSubmit}>
          <input
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
          />

          <input
            name="role"
            placeholder="Your Role (Student / Learner)"
            value={formData.role}
            onChange={handleChange}
          />

          <select
            name="rating"
            value={formData.rating}
            onChange={handleChange}
          >
            {[5, 4, 3, 2, 1].map((r) => (
              <option key={r} value={r}>{r} Stars</option>
            ))}
          </select>

          <textarea
            name="message"
            placeholder="Write your detailed feedback..."
            value={formData.message}
            onChange={handleChange}
          />

          <button type="submit" disabled={loading}>
            {loading ? "Submitting..." : "Submit Feedback"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;
/*The FeedbackForm component collects user feedback using controlled inputs. 
When the user submits the form, it sends a POST request to the backend API using a service function. 
The backend stores the feedback in MongoDB. After submission, 
the testimonials list refreshes automatically to show the newly added feedback.*/