import React from "react";
import "./Cs.css";

const Cs = () => {
  return (
    <div className="cs-wrapper">

      {/* Back Button */}
      <a href="/courses" className="back-btn">← Back</a>

      <div className="cs-content">

        <h1>Computer Science & Technology Courses</h1>

        <p className="intro">
          Computer Science is one of the fastest growing and most in-demand fields
          in the world. From software engineering to artificial intelligence,
          cloud computing to cybersecurity — this domain shapes the future of
          every industry. These programs teach strong logical skills, problem solving,
          programming, system design, and real-world technology development.
        </p>

        {/* Main Degrees */}
        <h2>Popular Degree Programs</h2>
        <ul>
          <li>B.Tech / B.Sc in Computer Science</li>
          <li>BCA — Bachelor of Computer Applications</li>
          <li>MCA — Master of Computer Applications</li>
          <li>M.Tech / M.Sc in CS or IT</li>
          <li>Diploma in Computer Engineering</li>
          <li>Online Certifications (Coursera, Google, AWS, Meta)</li>
        </ul>

        {/* Major Specializations */}
        <h2>Major Specializations in Computer Science</h2>
        <ul>
          <li>Software Engineering</li>
          <li>Full Stack Web Development</li>
          <li>Data Science & Analytics</li>
          <li>Artificial Intelligence</li>
          <li>Machine Learning & Deep Learning</li>
          <li>Cybersecurity & Ethical Hacking</li>
          <li>Cloud Computing (AWS, Azure, GCP)</li>
          <li>Mobile App Development (Android, iOS)</li>
          <li>Blockchain & Web3</li>
          <li>Internet of Things (IoT)</li>
          <li>DevOps & Site Reliability Engineering</li>
          <li>Game Development</li>
        </ul>

        {/* Detailed Topics */}
        <h2>Core Subjects You'll Learn</h2>

        <h3>Programming Fundamentals</h3>
        <p>
          Learn languages like C, C++, Python, Java, JavaScript, and object-oriented 
          programming concepts. Students also learn problem solving and algorithmic skills
          through competitive programming.
        </p>

        <h3>Data Structures & Algorithms (DSA)</h3>
        <p>
          The backbone of tech careers. Includes arrays, linked lists, stacks,
          queues, trees, graphs, dynamic programming, and complexity analysis.
          DSA is essential for placements in top tech companies.
        </p>

        <h3>Computer Networks</h3>
        <p>
          Learn how the internet works — networking layers, routing, TCP/IP,
          DNS, HTTP, cybersecurity concepts and distributed communication.
        </p>

        <h3>Operating Systems</h3>
        <p>
          Covers CPU scheduling, memory management, file systems,
          concurrency, processes, and threads — essential for system-level roles.
        </p>

        <h3>Database Management</h3>
        <p>
          SQL, NoSQL, relational models, database design, queries,
          transactions, indexing, and optimization. Tools include MySQL,
          PostgreSQL, MongoDB, Oracle DB.
        </p>

        <h3>Artificial Intelligence & Machine Learning</h3>
        <p>
          Neural networks, deep learning, computer vision, time-series
          analysis, NLP, and real-world AI model deployment with frameworks
          like TensorFlow, PyTorch and Scikit-Learn.
        </p>

        <h3>Web & App Development</h3>
        <p>
          HTML, CSS, JavaScript, React, Node.js, APIs, REST, UI/UX,
          responsive design, and mobile apps using Flutter or React Native.
        </p>

        <h3>Cybersecurity</h3>
        <p>
          Ethical hacking, penetration testing, cryptography,
          security protocols, malware analysis, and network security.
        </p>

        <h3>Cloud Technologies</h3>
        <p>
          Cloud architecture, virtualization, serverless computing,
          CI/CD pipelines, DevOps pipelines, and deployment on AWS, Azure, 
          and Google Cloud.
        </p>

        {/* Careers */}
        <h2>Career Opportunities</h2>
        <ul>
          <li>Software Developer / Software Engineer</li>
          <li>Full Stack Developer</li>
          <li>Data Scientist / Data Analyst</li>
          <li>Machine Learning Engineer</li>
          <li>Cybersecurity Analyst</li>
          <li>Cloud Engineer / DevOps Engineer</li>
          <li>AI Engineer / NLP Engineer</li>
          <li>Mobile App Developer</li>
          <li>Systems Engineer / Network Administrator</li>
          <li>Game Developer / Graphics Engineer</li>
          <li>Product Manager / Technical Consultant</li>
        </ul>

        {/* Why CS */}
        <h2>Why Choose Computer Science?</h2>
        <p>
          ✔ Highest paying career field worldwide <br/>
          ✔ Global demand for engineers & developers <br/>
          ✔ Remote work opportunities <br/>
          ✔ Job-security in almost every industry <br/>
          ✔ Possibilities in research, innovation and startups <br/>
          ✔ Chance to build software, apps, AI models, and real-world solutions <br/>
        </p>

        {/* External Links */}
        <h2>Helpful Learning Resources</h2>
        <p>
          🔗 <a href="https://en.wikipedia.org/wiki/Computer_science" target="_blank">Computer Science — Wikipedia</a><br/>
          🔗 <a href="https://www.w3schools.com" target="_blank">W3Schools — Programming Basics</a><br/>
          🔗 <a href="https://www.coursera.org/courses?query=computer%20science" target="_blank">Coursera — CS Courses</a><br/>
          🔗 <a href="https://www.geeksforgeeks.org" target="_blank">GeeksforGeeks — DSA + Coding</a><br/>
          🔗 <a href="https://roadmap.sh" target="_blank">Roadmap.sh — Developer Roadmaps</a>
        </p>
        {/* TOP UNIVERSITIES */}

        <h2 className="college-title">Top Computer Science Universities Around the World</h2>

        <div className="college-grid">

          <div className="college-card">
            <h3>Massachusetts Institute of Technology (MIT)</h3>
            <p><b>Country:</b> USA</p>
            <p><b>Duration:</b> 4 Years</p>
            <p>
              One of the world's best universities for computer science,
              artificial intelligence, robotics and advanced research.
            </p>
            <p><b>Location:</b> Cambridge, USA</p>
            <a href="https://www.mit.edu" target="_blank">Explore University</a>
          </div>

          <div className="college-card">
            <h3>Stanford University</h3>
            <p><b>Country:</b> USA</p>
            <p><b>Duration:</b> 4 Years</p>
            <p>
              Famous for innovation and startups. Many Silicon Valley
              founders studied here.
            </p>
            <p><b>Location:</b> California, USA</p>
            <a href="https://www.stanford.edu" target="_blank">Explore University</a>
          </div>

          <div className="college-card">
            <h3>Carnegie Mellon University</h3>
            <p><b>Country:</b> USA</p>
            <p><b>Duration:</b> 4 Years</p>
            <p>
              Globally recognized for robotics, machine learning,
              cybersecurity and software engineering.
            </p>
            <p><b>Location:</b> Pittsburgh, USA</p>
            <a href="https://www.cmu.edu" target="_blank">Explore University</a>
          </div>

          <div className="college-card">
            <h3>University of Oxford</h3>
            <p><b>Country:</b> United Kingdom</p>
            <p><b>Duration:</b> 3 Years</p>
            <p>
              One of the oldest universities in the world with strong
              research programs in AI, computing and data science.
            </p>
            <p><b>Location:</b> Oxford, UK</p>
            <a href="https://www.ox.ac.uk" target="_blank">Explore University</a>
          </div>

          <div className="college-card">
            <h3>University of Toronto</h3>
            <p><b>Country:</b> Canada</p>
            <p><b>Duration:</b> 4 Years</p>
            <p>
              Known for machine learning research and strong AI programs.
            </p>
            <p><b>Location:</b> Toronto, Canada</p>
            <a href="https://www.utoronto.ca" target="_blank">Explore University</a>
          </div>

          <div className="college-card">
            <h3>Indian Institute of Technology (IIT Bombay)</h3>
            <p><b>Country:</b> India</p>
            <p><b>Duration:</b> 4 Years</p>
            <p>
              One of India's best institutes for computer science,
              engineering and technology innovation.
            </p>
            <p><b>Location:</b> Mumbai, India</p>
            <a href="https://www.iitb.ac.in" target="_blank">Explore University</a>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Cs;
