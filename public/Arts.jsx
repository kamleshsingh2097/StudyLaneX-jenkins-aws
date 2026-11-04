import React from "react";
import "./Arts.css";

const Arts = () => {
  return (
    <div className="arts-wrapper">

      <a href="/courses" className="back-btn">← Back</a>

      <div className="arts-content">

        <h1>Arts, Media & Creative Courses</h1>

        <p className="intro">
          Arts, Media and Creative programs focus on imagination, expression,
          communication and design thinking. These fields combine creativity with
          modern digital tools—perfect for students who enjoy visual storytelling,
          designing, performing, or producing creative content.
          Creative industries are growing rapidly due to social media,
          entertainment platforms, digital marketing and global entertainment
          demand.
        </p>

        {/* MAIN STREAMS */}
        <h2>Popular Creative Streams</h2>
        <ul>
          <li>Graphic Design & Visual Communication</li>
          <li>Animation, VFX & Motion Graphics</li>
          <li>Film Making & Video Production</li>
          <li>Photography & Cinematography</li>
          <li>UI/UX Design & Digital Product Design</li>
          <li>Fine Arts (Painting, Sculpture, Drawing)</li>
          <li>Music, Acting & Performing Arts</li>
          <li>Digital Media & Content Creation</li>
          <li>Advertising & Creative Strategy</li>
          <li>Fashion Design & Textile Art</li>
        </ul>

        {/* DETAILED DESCRIPTIONS */}
        <h2>Detailed Program Insights</h2>

        <h3>Graphic Design & Visual Communication</h3>
        <p>
          Students learn typography, color theory, layout design, branding,
          poster creation, logo design and digital illustration. Training is
          done using tools like Adobe Photoshop, Illustrator, InDesign, Canva,
          and Figma. Projects include real brand mockups, packaging design,
          posters, and advertisements.
        </p>

        <h3>Animation & Motion Graphics</h3>
        <p>
          Covers 2D animation, 3D modeling, rigging, character design, VFX,
          rotoscoping, compositing and animation principles. Tools include
          Blender, Maya, After Effects, Animate and Cinema4D. Students create
          short films, motion posters, animated ads and character animations.
        </p>

        <h3>Film Making & Video Production</h3>
        <p>
          Teaches script-writing, storyboarding, direction, cinematography,
          lighting, sound design, editing (Premiere Pro, DaVinci Resolve),
          documentary making, and production planning. Real shoots, short films,
          YouTube production and corporate videos are part of the course.
        </p>

        <h3>Photography & Cinematography</h3>
        <p>
          Covers camera handling, composition, portrait photography, product
          photography, travel photography, studio setup, lighting techniques,
          color grading and photo editing (Lightroom & Photoshop). Students build
          full professional portfolios.
        </p>

        <h3>UI/UX Design & Digital Product Design</h3>
        <p>
          Students learn wireframing, prototyping, user research, usability
          testing, design systems, mobile-first design and responsive layouts.
          Tools include Figma, Adobe XD and Sketch. Projects involve app design,
          website redesigns and user-flow development.
        </p>

        <h3>Fine Arts</h3>
        <p>
          Includes traditional art forms such as sketching, watercolor, acrylics,
          sculpture, printmaking, portrait drawing and mural art. Students build
          strong aesthetic foundations and creative expression.
        </p>

        <h3>Digital Content Creation</h3>
        <p>
          Ideal for students wanting to work on social media. Covers video editing,
          scriptwriting, reels creation, YouTube content building, storytelling,
          branding, SEO for creators and influencer marketing.
        </p>

        <h3>Fashion Design</h3>
        <p>
          Includes garment construction, pattern making, textile science,
          illustration, runway styling, trend forecasting and fashion marketing.
          Students showcase collections through portfolio shows.
        </p>

        {/* CAREER OPTIONS */}
        <h2>Career Opportunities</h2>
        <ul>
          <li>Graphic Designer / Illustrator</li>
          <li>Animator / Motion Graphics Artist</li>
          <li>Video Editor / Film Director</li>
          <li>Photographer / Cinematographer</li>
          <li>UI/UX Designer / Product Designer</li>
          <li>Content Creator / Social Media Manager</li>
          <li>Art Director / Creative Strategist</li>
          <li>Fashion Designer / Stylist</li>
          <li>Studio Artist / Art Teacher</li>
        </ul>

        {/* WHY CHOOSE ARTS */}
        <h2>Why Choose Creative Courses?</h2>
        <p>
          ✔ High demand due to digital media boom <br />
          ✔ Huge freelance and remote work opportunities <br />
          ✔ Portfolio-based growth, not just degrees <br />
          ✔ Freedom to work in entertainment, marketing or tech <br />
          ✔ Perfect for creative, expressive students <br />
        </p>

        {/* EXTERNAL LINKS */}
        <h2>Helpful External Resources</h2>
        <p>
          🔗 <a href="https://www.behance.net" target="_blank">Behance — Creative Portfolios</a><br/>
          🔗 <a href="https://en.wikipedia.org/wiki/Creative_industries" target="_blank">Creative Industries — Wikipedia</a><br/>
          🔗 <a href="https://www.youtube.com/c/Adobe" target="_blank">Adobe Tutorials — YouTube</a><br/>
        </p>
           {/* TOP UNIVERSITIES */}

        <h2 className="college-title">Top Arts & Design Universities Around the World</h2>

        <div className="college-grid">

          <div className="college-card">
            <h3>Royal College of Art</h3>
            <p><b>Country:</b> United Kingdom</p>
            <p><b>Duration:</b> 2 Years</p>
            <p>
              One of the world's top art and design universities known for
              creative innovation, design research and modern visual arts.
            </p>
            <p><b>Location:</b> London, UK</p>
            <a href="https://www.rca.ac.uk" target="_blank">Explore University</a>
          </div>

          <div className="college-card">
            <h3>Rhode Island School of Design</h3>
            <p><b>Country:</b> USA</p>
            <p><b>Duration:</b> 4 Years</p>
            <p>
              Famous for graphic design, animation, illustration and fine arts.
              Many Disney and Pixar artists studied here.
            </p>
            <p><b>Location:</b> Rhode Island, USA</p>
            <a href="https://www.risd.edu" target="_blank">Explore University</a>
          </div>

          <div className="college-card">
            <h3>Parsons School of Design</h3>
            <p><b>Country:</b> USA</p>
            <p><b>Duration:</b> 4 Years</p>
            <p>
              Globally famous for fashion design, digital design,
              photography and creative industries.
            </p>
            <p><b>Location:</b> New York, USA</p>
            <a href="https://www.newschool.edu/parsons" target="_blank">Explore University</a>
          </div>

          <div className="college-card">
            <h3>University of the Arts London</h3>
            <p><b>Country:</b> United Kingdom</p>
            <p><b>Duration:</b> 3 Years</p>
            <p>
              One of the largest creative universities focusing on
              fashion, design, film making and media production.
            </p>
            <p><b>Location:</b> London, UK</p>
            <a href="https://www.arts.ac.uk" target="_blank">Explore University</a>
          </div>

          <div className="college-card">
            <h3>National Institute of Design</h3>
            <p><b>Country:</b> India</p>
            <p><b>Duration:</b> 4 Years</p>
            <p>
              One of India's best design institutes focusing on
              visual communication, animation and product design.
            </p>
            <p><b>Location:</b> Ahmedabad, India</p>
            <a href="https://www.nid.edu" target="_blank">Explore University</a>
          </div>

          <div className="college-card">
            <h3>California Institute of the Arts</h3>
            <p><b>Country:</b> USA</p>
            <p><b>Duration:</b> 4 Years</p>
            <p>
              Famous worldwide for animation, film making and
              creative storytelling programs.
            </p>
            <p><b>Location:</b> California, USA</p>
            <a href="https://calarts.edu" target="_blank">Explore University</a>
          </div>

        </div>

      </div>
   
    </div>
  );
};

export default Arts;