import React from "react";
import "./Health.css";

const Health = () => {
  return (
    <div className="health-wrapper">

      {/* BACK button */}
      <a href="/courses" className="back-btn">← Back</a>

      <div className="health-content">

        <h1>Health, Medical & Biological Courses</h1>

        <p className="intro">
          The Health & Medical field is one of the most respected and high-impact
          career sectors worldwide. These programs focus on patient care,
          diagnostics, biological research, public health, pharmaceuticals, and
          healthcare management. Graduates work in hospitals, labs, research
          institutes, clinics, and global healthcare organizations.
        </p>

        {/* MAIN STREAMS */}
        <h2>Popular Streams in Health Sciences</h2>
        <ul>
          <li>MBBS / Medicine</li>
          <li>Nursing & Clinical Care</li>
          <li>Biotechnology & Biomedical Science</li>
          <li>Pharmacy & Pharmaceutical Sciences</li>
          <li>Public Health & Epidemiology</li>
          <li>Nutrition & Dietetics</li>
          <li>Medical Laboratory Technology (MLT)</li>
          <li>Physiotherapy</li>
          <li>Psychology & Counselling</li>
          <li>Microbiology & Life Sciences</li>
        </ul>

        {/* DETAILED PROGRAM INSIGHTS */}
        <h2>Detailed Program Insights</h2>

        <h3>MBBS / Medicine</h3>
        <p>
          Medical programs train students to diagnose, treat, and prevent
          diseases. Subjects include anatomy, physiology, pathology, surgery,
          pharmacology, pediatrics, obstetrics, emergency care, and clinical
          rotations in hospitals. Graduates become doctors, surgeons, or
          specialists after residency.
        </p>

        <h3>Nursing</h3>
        <p>
          Nursing focuses on patient care, monitoring, medication support,
          emergency response, ICU assistance, neonatal care, and patient
          counselling. Nurses are the backbone of every healthcare system.
        </p>

        <h3>Biotechnology</h3>
        <p>
          Biotechnology integrates biology with technology. Students learn
          genetics, biomolecular engineering, cell culture, CRISPR, cloning,
          immunology, and drug development. It is a highly research-driven field
          with careers in pharma, R&D labs, agriculture, and medicine.
        </p>

        <h3>Pharmacy</h3>
        <p>
          Pharmacy programs include drug formulation, pharmacology, toxicology,
          clinical pharmacy, medicinal chemistry, and prescription management.
          Graduates work as pharmacists, drug researchers, or pharmaceutical
          consultants.
        </p>

        <h3>Public Health & Epidemiology</h3>
        <p>
          Public health students learn about disease prevention, health policies,
          community health, vaccination programs, epidemiological studies, and
          healthcare systems. This field gained massive importance post-COVID.
        </p>

        <h3>Nutrition & Dietetics</h3>
        <p>
          Focuses on meal planning, clinical nutrition, sports nutrition,
          metabolism, diet therapy, and lifestyle disease management. Nutritionists
          work in hospitals, gyms, wellness centers, and corporate health programs.
        </p>

        <h3>Medical Laboratory Technology (MLT)</h3>
        <p>
          MLT students learn diagnostic testing—blood tests, urine analysis,
          microbiology cultures, pathology slides, PCR testing, radiology
          assistance, and lab quality control. Critical for hospital diagnostics.
        </p>

        <h3>Physiotherapy</h3>
        <p>
          Physiotherapy deals with physical rehabilitation, sports injuries,
          posture correction, mobility training, neurological rehabilitation,
          prenatal care, and chronic pain therapies.
        </p>

        <h3>Psychology & Counselling</h3>
        <p>
          Covers behavioural studies, mental health, cognitive sciences,
          counselling methods, therapy sessions, child psychology, and emotional
          wellness. Psychology graduates work in schools, hospitals, clinics, and
          therapy centers.
        </p>

        {/* CAREER OPTIONS */}
        <h2>Career Opportunities</h2>
        <ul>
          <li>Doctor / Surgeon</li>
          <li>Registered Nurse / ICU Nurse</li>
          <li>Biotechnologist / Research Scientist</li>
          <li>Pharmacist / Drug Safety Associate</li>
          <li>Public Health Officer / Epidemiologist</li>
          <li>Nutritionist / Dietician</li>
          <li>Medical Lab Technician</li>
          <li>Physiotherapist</li>
          <li>Clinical Psychologist / Therapist</li>
        </ul>

        {/* BENEFITS */}
        <h2>Why Choose Health & Medical Sciences?</h2>
        <p>
          ✔ Highly respected and stable career<br />
          ✔ Direct impact on human lives<br />
          ✔ Strong global job demand<br />
          ✔ Research opportunities and specialization<br />
          ✔ High salaries in many roles<br />
          ✔ Essential in every country and industry<br />
        </p>

        {/* EXTERNAL LINKS */}
        <h2>Helpful External Resources</h2>
        <p>
          🔗 <a href="https://en.wikipedia.org/wiki/Health_science" target="_blank">Health Science — Wikipedia</a><br/>
          🔗 <a href="https://www.google.com/search?q=health+medical+courses" target="_blank">Google Search: Health Courses</a><br/>
          🔗 <a href="https://www.coursera.org/courses?query=health" target="_blank">Coursera — Health Programs</a>
        </p>
        {/* Top Medical Universities */}

<h2 className="college-title">Top Medical Universities Around the World</h2>

<div className="college-grid">

  <div className="college-card">
    <h3>Harvard Medical School</h3>
    <p><b>Country:</b> USA</p>
    <p><b>Duration:</b> 4–5 Years</p>
    <p>
      One of the world's most prestigious medical schools known for
      advanced research, clinical training, and healthcare innovation.
    </p>
    <p><b>Location:</b> Boston, USA</p>
    <a href="https://hms.harvard.edu" target="_blank">Explore University</a>
  </div>

  <div className="college-card">
    <h3>Johns Hopkins University</h3>
    <p><b>Country:</b> USA</p>
    <p><b>Duration:</b> 4–6 Years</p>
    <p>
      Globally famous for medical research, surgery training,
      and public health programs.
    </p>
    <p><b>Location:</b> Baltimore, USA</p>
    <a href="https://www.jhu.edu" target="_blank">Explore University</a>
  </div>

  <div className="college-card">
    <h3>University of Oxford Medical School</h3>
    <p><b>Country:</b> United Kingdom</p>
    <p><b>Duration:</b> 5–6 Years</p>
    <p>
      One of the oldest and most respected medical schools
      with strong clinical research programs.
    </p>
    <p><b>Location:</b> Oxford, UK</p>
    <a href="https://www.ox.ac.uk" target="_blank">Explore University</a>
  </div>

  <div className="college-card">
    <h3>Karolinska Institute</h3>
    <p><b>Country:</b> Sweden</p>
    <p><b>Duration:</b> 5–6 Years</p>
    <p>
      Famous for medical science research and responsible for
      selecting Nobel Prize winners in Physiology or Medicine.
    </p>
    <p><b>Location:</b> Stockholm, Sweden</p>
    <a href="https://ki.se" target="_blank">Explore University</a>
  </div>

  <div className="college-card">
    <h3>AIIMS Delhi</h3>
    <p><b>Country:</b> India</p>
    <p><b>Duration:</b> 5.5 Years</p>
    <p>
      India's top medical institute known for MBBS programs,
      advanced hospitals, and medical research.
    </p>
    <p><b>Location:</b> New Delhi, India</p>
    <a href="https://www.aiims.edu" target="_blank">Explore University</a>
  </div>

  <div className="college-card">
    <h3>National University of Singapore (Medicine)</h3>
    <p><b>Country:</b> Singapore</p>
    <p><b>Duration:</b> 5 Years</p>
    <p>
      One of Asia's leading medical schools focusing on
      modern healthcare technology and clinical practice.
    </p>
    <p><b>Location:</b> Singapore</p>
    <a href="https://www.nus.edu.sg" target="_blank">Explore University</a>
  </div>

</div>

      </div>
    </div>
  );
};

export default Health;

