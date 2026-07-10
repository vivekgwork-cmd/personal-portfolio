import { useEffect } from 'react';
import Hero from '../sections/Hero.jsx';
import Intro from '../sections/Intro.jsx';
import Work from '../sections/Work.jsx';
import PhotoTeaser from '../sections/PhotoTeaser.jsx';
import About from '../sections/About.jsx';
import Contact from '../sections/Contact.jsx';
import Footer from '../sections/Footer.jsx';
import { useLocation } from 'react-router-dom';

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      const el = document.getElementById(id);
      if (el) {
        // small delay to let sections mount
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 60);
      }
    }
  }, [location.hash]);

  return (
    <main>
      <Hero />
      <Intro />
      <Work />
      <PhotoTeaser />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
