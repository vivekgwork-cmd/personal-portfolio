import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const scrollTo = (id) => {
        if (location.pathname !== '/') {
            navigate('/');
            setTimeout(() => {
                document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
            }, 120);
        } else {
            document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
            <Link to="/" className="nav-logo">Vivek G.</Link>

            <ul className="nav-links">
                <li>
                    <span className="nav-link" onClick={() => scrollTo('about')}>About</span>
                </li>
                <li>
                    <span className="nav-link" onClick={() => scrollTo('work')}>Work</span>
                </li>
                <li>
                    <span className="nav-link" onClick={() => scrollTo('blog')}>Blog</span>
                </li>
                <li>
                    <Link to="/photography" className="nav-link">Photos</Link>
                </li>
                <li>
                    <span className="nav-link nav-cta" onClick={() => scrollTo('book')}>Book a Call</span>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
