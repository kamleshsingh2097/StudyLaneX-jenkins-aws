import React from "react";
import { Link } from "react-router-dom";
import "./Cource.css";

import cource_1 from "../../assets/courses1.png";
import cource_2 from "../../assets/courses2.png";
import cource_3 from "../../assets/courses3.png";
import cource_4 from "../../assets/courses4.jpeg";
import cource_5 from "../../assets/courses5.png";
import cource_6 from "../../assets/courses6.png";

const courses = [
  { 
    id: "business", 
    img: cource_1, 
    path: "/courses/business",
    level: "Postgraduate"
    // I created an array of objects to store course data such as id, image, route and level. 
  },
  { 
    id: "professional", 
    img: cource_2, 
    path: "/courses/professional",
    level: "Professional"    
  },
  { 
    id: "cs", 
    img: cource_3, 
    path: "/courses/Cs",
    level: "Undergraduate"   
  },
  { 
    id: "arts", 
    img: cource_4, 
    path: "/courses/arts",
    level: "Certificate"     
  },
  { 
    id: "engineering", 
    img: cource_5, 
    path: "/courses/engineering",
    level: "Undergraduate"   
  },
  { 
    id: "health", 
    img: cource_6, 
    path: "/courses/health",
    level: "Diploma"
  }         
];

const Cource = () => {
  return (
    <div id="courses" className="programs">
      <div className="programs-header">
        <h2 className="programs-title">Our Courses</h2>
        <p className="programs-sub">Click on any category to see courses & details.</p>
      </div>

      <div className="programs-grid"> {/*To arrange cources in grid layout */}
        {courses.map((c) => ( 
          // I used the map function to dynamically render course cards from the data array.
          <Link to={c.path} key={c.id} className="program-tile" aria-label={c.title}> {/*Purpose:Card clickable hai.*/}
         
            <span className="level-chip">{c.level}</span>

            <img src={c.img} alt={c.title} className="tile-img" />
           
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Cource;
// The Courses component displays different course categories using a grid layout.
// I stored course information in an array and used the map function to dynamically generate course cards.
// Each card is wrapped with a Link component so users can navigate to detailed course pages.