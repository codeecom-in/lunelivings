function Features() {
  const features = [
    {
      title: "Thoughtful Design Approach",
      description: "We don't follow trends blindly. Every design is carefully planned to suit your lifestyle, space, and long-term comfort."
    },
    {
      title: "End-to-End Execution",
      description: "From initial concept to final handover, we manage the entire process so you enjoy a smooth, stress-free experience."
    },
    {
      title: "Quality Without Compromise",
      description: "Premium materials, skilled craftsmanship, and refined finishes — because your home deserves the best."
    },
    {
      title: "Personalized Solutions",
      description: "No two homes are the same. We design around your needs, taste, and budget to create truly unique spaces."
    },
    {
      title: "Transparent Process",
      description: "Clear communication, realistic timelines, and honest pricing at every stage."
    },
    {
      title: "Designed for Real Living",
      description: "Beautiful, functional spaces that work effortlessly in everyday life."
    }
  ];

  return (
    <section className="features" id="features">
      <h2>Why Lune Livings</h2>
      <p className="features-intro">
        At Lune Livings, we believe a home should reflect who you are — calm, functional, and timeless. Every space we design is guided by purpose, attention to detail, and a deep understanding of modern living.
      </p>

      <div className="features-separator"></div>

      <h3 className="features-subtitle">What Sets Us Apart</h3>

      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <h4>{feature.title}</h4>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
