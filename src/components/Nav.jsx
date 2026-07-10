import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Nav.css';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isPhoto = location.pathname === '/photography';

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner">
        <Link to="/" className="nav__logo hover-underline">
          Vivek G
        </Link>
        <ul className="nav__links">
          <li>
            {isPhoto ? (
              <Link to="/" className="nav__link hover-underline">Home</Link>
            ) : (
              <a href="#work" className="nav__link hover-underline">Work</a>
            )}
          </li>
          <li>
            <Link to="/photography" className="nav__link hover-underline">Photography</Link>
          </li>
          <li>
            {isPhoto ? (
              <Link to="/#about" className="nav__link hover-underline">About</Link>
            ) : (
              <a href="#about" className="nav__link hover-underline">About</a>
            )}
          </li>
          <li>
            {isPhoto ? (
              <Link to="/#contact" className="nav__link hover-underline">Contact</Link>
            ) : (
              <a href="#contact" className="nav__link hover-underline">Contact</a>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}
