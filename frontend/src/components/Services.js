function Services() {
  const services = [
    {
      id: 1,
      title: "Interior Design & Styling",
      description: "Thoughtfully designed interiors that balance aesthetics, functionality, and comfort—tailored to your lifestyle.",
      icon: "🎨"
    },
    {
      id: 2,
      title: "Turnkey Home Solutions",
      description: "From concept to completion, we manage everything so you can enjoy a stress-free transformation.",
      icon: "🏠"
    },
    {
      id: 3,
      title: "Modular Kitchen Design",
      description: "Smart, stylish kitchens crafted for efficiency, durability, and everyday living.",
      icon: "🍳"
    },
    {
      id: 4,
      title: "Custom Furniture & Wardrobes",
      description: "Made-to-measure furniture that fits your space perfectly while enhancing visual harmony.",
      icon: "🛋️"
    },
    {
      id: 5,
      title: "Space Planning & Renovation",
      description: "Optimized layouts and modern upgrades that bring new life to existing spaces.",
      icon: "📐"
    },
    {
      id: 6,
      title: "Lighting & Décor Consultation",
      description: "Lighting and décor selections that elevate mood, highlight details, and complete the design story.",
      icon: "💡"
    }
  ];

  return (
    <section className="services" id="services">
      <div className="services-header">
        <h2>Our Services</h2>
        <p className="services-sub">
          Comprehensive design solutions crafted to transform your space and enhance your lifestyle.
        </p>
      </div>
      <div className="services-grid">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
