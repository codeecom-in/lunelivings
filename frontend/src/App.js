import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Features from './components/Features';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />

      <main>
        <Hero />
        <AboutUs />
        <Services />
        <Features />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}

export default App;
