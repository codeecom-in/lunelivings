function AboutUs() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <h2>About Lune Livings</h2>

        {/* Brand Story */}
        <div className="about-section">
          <h3>Brand Story</h3>
          <p>
            Lune Livings was founded with a simple belief — a well-designed home should feel effortless, calm, and deeply personal.
          </p>
          <p>
            Inspired by the quiet beauty of light, balance, and modern living, Lune Livings creates interiors that are not only visually refined but also practical for everyday life. We focus on thoughtful planning, clean aesthetics, and quality craftsmanship to design spaces that stand the test of time.
          </p>
          <p>
            From compact apartments to complete home transformations, every project is approached with care, clarity, and attention to detail.
          </p>
        </div>

        {/* Our Philosophy */}
        <div className="about-section">
          <h3>Our Philosophy</h3>
          <p>
            We believe great design is not about excess — it's about intention.
          </p>
          <p>
            At Lune Livings, design begins with understanding how you live. Every layout, material, and finish is selected to create harmony between form and function. We avoid fleeting trends and instead focus on timeless design that feels relevant today and comfortable tomorrow.
          </p>
          <p className="about-highlight">Our philosophy is rooted in:</p>
          <ul className="about-list">
            <li>Simplicity over clutter</li>
            <li>Function before decoration</li>
            <li>Balance between beauty and usability</li>
          </ul>
        </div>

        {/* Vision & Values */}
        <div className="about-section">
          <h3>Vision & Values</h3>

          <div className="about-subsection">
            <h4>Our Vision</h4>
            <p>
              To create meaningful living spaces that enhance everyday life through thoughtful, timeless design.
            </p>
          </div>

          <div className="about-subsection">
            <h4>Our Core Values</h4>
            <div className="values-grid">
              <div className="value-card">
                <h5>Design with Purpose</h5>
                <p>Every decision is intentional, ensuring spaces are both beautiful and functional.</p>
              </div>
              <div className="value-card">
                <h5>Quality & Craftsmanship</h5>
                <p>We work with trusted materials and skilled professionals to deliver lasting results.</p>
              </div>
              <div className="value-card">
                <h5>Personalized Approach</h5>
                <p>Each home reflects the people who live in it — no templates, no shortcuts.</p>
              </div>
              <div className="value-card">
                <h5>Transparency & Trust</h5>
                <p>Clear communication, honest pricing, and realistic timelines at every stage.</p>
              </div>
              <div className="value-card">
                <h5>Calm, Modern Aesthetic</h5>
                <p>Spaces designed to feel balanced, warm, and effortlessly elegant.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Process & Team */}
        <div className="about-section">
          <h3>Our Process & Team</h3>

          <div className="about-subsection">
            <h4>Our Process</h4>
            <ol className="process-list">
              <li>
                <strong>Consultation & Understanding</strong>
                <p>We begin by listening — understanding your needs, lifestyle, and vision.</p>
              </li>
              <li>
                <strong>Concept & Design Planning</strong>
                <p>Layouts, mood boards, and material selections are carefully curated to align with your goals.</p>
              </li>
              <li>
                <strong>Detailed Execution</strong>
                <p>Our team coordinates every stage of execution, ensuring quality and precision.</p>
              </li>
              <li>
                <strong>Final Styling & Handover</strong>
                <p>We refine the details and deliver a space that feels complete and ready to live in.</p>
              </li>
            </ol>
          </div>

          <div className="about-subsection">
            <h4>Our Team</h4>
            <p>
              Lune Livings is driven by a passionate team of designers, craftsmen, and project coordinators who share a love for thoughtful design and quality execution.
            </p>
            <p>
              We collaborate closely, combining creativity with technical expertise to ensure every project is delivered seamlessly — on time and with care.
            </p>
          </div>
        </div>

        {/* Closing Statement */}
        <div className="about-closing">
          <p>
            At Lune Livings, we don't just design homes — we design the way you live.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
