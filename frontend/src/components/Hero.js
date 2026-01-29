import { useEffect, useState } from 'react';

const SLIDES = [
  {
    heading: "Spaces designed for ",
    headingSpan: "how you live",
    paragraph: "Thoughtfully crafted homes in sought‑after neighborhoods. Move in ready, with community and comfort built in."
  },
  {
    heading: "Designing Homes With ",
    headingSpan: "Soul",
    paragraph: "From concept to completion, Lune Livings transforms spaces into meaningful experiences."
  },
  {
    heading: "Where Design Meets ",
    headingSpan: "Serenity",
    paragraph: "Elevated living spaces inspired by light, balance, and contemporary aesthetics."
  }
];

function Hero() {
  const [animate, setAnimate] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    setAnimate(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % SLIDES.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const currentSlide = SLIDES[slideIndex];

  return (
    <section className="hero">
      <picture>
        <source media="(max-width: 640px)" srcSet="a1-mobile.jpg" />
        <img alt="Modern living space" className="hero-image p-0 b-0 m-0" src="a1.jpg" />
      </picture>
      <div className="hero-content">
        <span className="hero-tag">Modern living</span>
        <h1 className={`${animate ? 'animated' : ''} fade-in`}>
          {currentSlide.heading}<span>{currentSlide.headingSpan}</span>
        </h1>
        <p className="fade-in">
          {currentSlide.paragraph}
        </p>
        <div className="hero-buttons">
          <button type="button" className="hero-btn-primary">
            Explore homes
          </button>
          <button type="button" className="hero-btn-secondary">
            Schedule a tour
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
