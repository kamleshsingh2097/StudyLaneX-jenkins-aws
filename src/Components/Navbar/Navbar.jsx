import React from "react";
import "./Navbar.css";
import Logo from "../../assets/Logo.png";

const Navbar = () => {

  const navbarOffset = 70; 
  // The offset is used to adjust the scroll position so the section is not hidden behind the navbar.(Jab scroll karte hain to navbar ke niche content hide na ho.)

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - navbarOffset;/* this is used to calculate the exact position of the section relative to the viewport */
      window.scrollTo({ top: y, behavior: "smooth" });/*I used smooth scrolling to improve user experience.*/ 
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <img src={Logo} className="logo" alt="logo" />
      </div>

      <ul className="nav-links">
        <li onClick={() => scrollTo("home")}>Home</li>
        <li onClick={() => scrollTo("courses")}>Courses</li>
        <li onClick={() => scrollTo("about")}>About Us</li>
        <li onClick={() => scrollTo("learning")}>Learning Experiences</li>
        <li onClick={() => scrollTo("testimonials")}>Learner Feedback</li>
        <li>
          <button className="btn" onClick={() => scrollTo("contact")}>
            Contact Us
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
/*
section screen par exactly kaha hai

Breakdown:

getBoundingClientRect().top
→ element ki position

window.scrollY
→ current scroll position

navbarOffset
→ navbar height adjust
*/