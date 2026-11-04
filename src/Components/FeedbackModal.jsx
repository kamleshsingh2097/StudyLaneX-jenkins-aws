import React from "react";
import "./FeedbackModal.css";

const FeedbackModal = ({ data, onClose }) => {
  if (!data) return null;

  return (
    <div className="modal-overlay" onClick={onClose}> {/* Background overlay create karna, Dark background pop center me, click karne par modal close ho jayega*/} 
      <div className="modal" onClick={(e) => e.stopPropagation()}> {/* Modal box create karna, click karne par modal close nahi hona chahiye isliye stopPropagation use kiya hai*/}
        <h3>{data.name}</h3>
        <p className="modal-role">{data.role}</p>

        <div className="stars">
          {"★".repeat(data.rating)}
          {"☆".repeat(5 - data.rating)}
        </div>

        <p className="modal-text">{data.message || data.feedback}</p> 

        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default FeedbackModal;
/*
The FeedbackModal component displays the full feedback when a testimonial card is clicked. 
It receives the selected feedback data as props from the Testimonials component. 
The modal shows the user's name, role, rating, and message, 
and it can be closed either by clicking the close button or by clicking outside the modal overlay.
 */