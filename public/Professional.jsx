import React from "react";
import "./Professional.css";

const Professional = () => {
  return (
    <div className="professional-wrapper">

      {/* Back Button */}
      <a href="/courses" className="back-btn">← Back</a>

      <div className="professional-content">

        <h1>Professional & Vocational Courses</h1>

        <p className="intro">
          Professional & vocational programs are designed to build direct, job-ready skills.
          These programs focus on practical training, hands-on experience, certifications,
          and real industry exposure. Whether you're looking to enter the workforce quickly,
          switch careers, or gain specialized technical skills — professional courses offer
          a fast, reliable, and high-growth pathway.
        </p>

        {/* MAIN STREAMS */}
        <h2>Popular Professional Streams</h2>
        <ul>
          <li>Hospitality & Hotel Management</li>
          <li>Culinary Arts & Chef Training</li>
          <li>Aviation, Cabin Crew & Ground Staff</li>
          <li>Sports Management & Sports Analytics</li>
          <li>Event Management & Wedding Planning</li>
          <li>Teaching, Early Childhood & Nursery Education</li>
          <li>Health Administration & Medical Office Management</li>
          <li>Paralegal Studies & Criminal Justice</li>
          <li>Social Work & Community Development</li>
        </ul>

        {/* PROGRAM DETAILS */}
        <h2>Detailed Program Insights</h2>

        <h3>Hospitality & Hotel Management</h3>
        <p>
          Hospitality is one of the fastest-growing industries globally. Students learn:
          front-office operations, housekeeping management, guest relations, food & beverage
          service, hospitality software (Opera, IDS), customer psychology, and international
          service standards. Internships in hotels, resorts, and cruise lines are a core part
          of training.
        </p>

        <h3>Culinary Arts & Chef Training</h3>
        <p>
          Culinary programs offer deep practical training in kitchen management, global
          cuisines, knife skills, plating techniques, bakery & patisserie, menu engineering,
          kitchen hygiene, and food safety certifications (HACCP, FSSAI). Students spend most
          of their time in professional labs and hotel kitchens.
        </p>

        <h3>Aviation & Cabin Crew</h3>
        <p>
          Aviation courses prepare students for glamorous and well-paid careers. Topics
          include grooming, communication skills, inflight service, emergency protocols,
          passenger handling, first-aid training, airport operations, travel documentation,
          and airline safety standards. Students often get trained for real interviews with
          major airlines.
        </p>

        <h3>Sports Management</h3>
        <p>
          Sports Management blends business with athletics. Students learn sports
          marketing, event management, athlete representation, data analytics, stadium
          operations, sponsorship management, and sports law. This field is booming due to
          IPL, ISL, Pro Kabaddi & global sporting events.
        </p>

        <h3>Event Management & Wedding Planning</h3>
        <p>
          Creative students thrive here. The curriculum includes event budgeting, vendor
          management, stage design, decor planning, celebrity coordination, logistics,
          digital event promotions, and corporate event strategy. Practical experience comes
          from managing real events, concerts, and weddings.
        </p>

        <h3>Teaching & Early Childhood Education</h3>
        <p>
          This specialization prepares educators for schools, preschools, and special
          education centers. Students learn child psychology, classroom management, lesson
          planning, phonics training, activity-based learning, communication, and inclusive
          education techniques.
        </p>

        <h3>Health Administration</h3>
        <p>
          A crucial field in healthcare systems. This includes hospital operations, OPD/IPD
          management, medical records, billing systems, patient coordination, insurance
          processes, and healthcare quality management. Students often intern in clinics and
          hospitals.
        </p>

        <h3>Paralegal & Criminal Justice</h3>
        <p>
          Students learn legal documentation, research skills, case filing procedures,
          basic criminal & civil law, client interviewing, and court system structure.
          Paralegal courses are ideal for those who want law-related careers without a
          full LLB degree.
        </p>

        <h3>Social Work & Community Development</h3>
        <p>
          Covers counselling skills, community outreach, NGO operations, child & women
          welfare programs, rehabilitation, mental health support, and public awareness
          campaigns. Graduates work with NGOs, government bodies, schools, and non-profits.
        </p>

        {/* CAREER OPTIONS */}
        <h2>Career Opportunities</h2>
        <ul>
          <li>Hotel Manager / Guest Relations Executive</li>
          <li>Chef, Pastry Chef, Commis Chef</li>
          <li>Cabin Crew / Ground Staff / Airport Executive</li>
          <li>Sports Event Manager / Athlete Manager</li>
          <li>Event Producer / Wedding Planner</li>
          <li>Nursery Educator / Teaching Assistant</li>
          <li>Hospital Office Administrator</li>
          <li>Paralegal Assistant</li>
          <li>Social Service Coordinator</li>
          <li>NGO Worker / Community Development Officer</li>
        </ul>

        {/* WHY PROFESSIONAL COURSES? */}
        <h2>Why Choose Professional Courses?</h2>
        <p>
          ✔ Short duration (3 months to 2 years) <br />
          ✔ High placement rate <br />
          ✔ Practical training instead of theory-heavy classes <br />
          ✔ Industry certifications that increase hiring probability <br />
          ✔ Internship-driven learning <br />
          ✔ Great for career switchers <br />
          ✔ Direct job opportunities in high-demand sectors <br />
        </p>

        {/* EXTERNAL LINKS */}
        <h2>Helpful External Resources</h2>
        <p>
          🔗 <a href="https://en.wikipedia.org/wiki/Vocational_education" target="_blank">Vocational Education — Wikipedia</a><br/>
          🔗 <a href="https://www.google.com/search?q=professional+courses" target="_blank">Google Search — Professional Courses</a><br/>
          🔗 <a href="https://www.coursera.org/courses?query=professional%20skills" target="_blank">Professional Skills Courses — Coursera</a>
        </p>
        {/* Top Institutes for Professional Courses */}

<h2 className="college-title">Top Institutes for Professional Courses</h2>

<div className="college-grid">

  <div className="college-card">
    <h3>Chartered Institute of Management Accountants (CIMA)</h3>
    <p><b>Country:</b> United Kingdom</p>
    <p><b>Duration:</b> 3–4 Years</p>
    <p>
      Globally recognized institute for management accounting,
      financial management and strategic business leadership.
    </p>
    <p><b>Location:</b> London, UK</p>
    <a href="https://www.cimaglobal.com" target="_blank">Explore Institute</a>
  </div>

  <div className="college-card">
    <h3>Association of Chartered Certified Accountants (ACCA)</h3>
    <p><b>Country:</b> United Kingdom</p>
    <p><b>Duration:</b> 2–3 Years</p>
    <p>
      One of the most respected global qualifications for accounting,
      auditing, taxation and financial management careers.
    </p>
    <p><b>Location:</b> Global Certification</p>
    <a href="https://www.accaglobal.com" target="_blank">Explore Institute</a>
  </div>

  <div className="college-card">
    <h3>Institute of Chartered Accountants of India (ICAI)</h3>
    <p><b>Country:</b> India</p>
    <p><b>Duration:</b> 4–5 Years</p>
    <p>
      India's premier institute for Chartered Accountancy,
      financial auditing, taxation and corporate finance.
    </p>
    <p><b>Location:</b> New Delhi, India</p>
    <a href="https://www.icai.org" target="_blank">Explore Institute</a>
  </div>

  <div className="college-card">
    <h3>Project Management Institute (PMI)</h3>
    <p><b>Country:</b> USA</p>
    <p><b>Duration:</b> 1–2 Years</p>
    <p>
      Global certification authority for project management,
      including the famous PMP certification.
    </p>
    <p><b>Location:</b> Pennsylvania, USA</p>
    <a href="https://www.pmi.org" target="_blank">Explore Institute</a>
  </div>

  <div className="college-card">
    <h3>Google Career Certificates</h3>
    <p><b>Country:</b> USA</p>
    <p><b>Duration:</b> 6–12 Months</p>
    <p>
      Industry-focused professional certifications in data analytics,
      IT support, project management and digital marketing.
    </p>
    <p><b>Location:</b> Online</p>
    <a href="https://grow.google/certificates" target="_blank">Explore Institute</a>
  </div>

  <div className="college-card">
    <h3>Harvard Business School Online</h3>
    <p><b>Country:</b> USA</p>
    <p><b>Duration:</b> 3–12 Months</p>
    <p>
      Professional online courses in leadership, strategy,
      entrepreneurship and financial management.
    </p>
    <p><b>Location:</b> Boston, USA</p>
    <a href="https://online.hbs.edu" target="_blank">Explore Institute</a>
  </div>

</div>

      </div>
    </div>
  );
};

export default Professional;
