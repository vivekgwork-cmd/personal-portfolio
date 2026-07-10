import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { photos, categories } from '../data/photos.js';
import Lightbox from '../components/Lightbox.jsx';
import Footer from '../sections/Footer.jsx';
import './Photography.css';

const ease = [0.77, 0, 0.175, 1];

export default function Photography() {
  const [active, setActive] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filtered = useMemo(() => {
    if (active === 'all') return photos;
    return photos.filter((p) => p.category === active);
  }, [active]);

  const counts = useMemo(() => {
    const map = { all: photos.length };
    for (const p of photos) map[p.category] = (map[p.category] || 0) + 1;
    return map;
  }, []);

  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [lightboxIndex]);

  return (
    <main className="photo-page">
      <section className="photo-hero container">
        <p className="eyebrow">Photography</p>
        <h1 className="display display-lg photo-hero__title">
          Seen, framed,<br />and kept.
        </h1>
        <p className="body-lg photo-hero__intro">
          A living archive of moments from the streets of Bengaluru, quiet interiors,
          and the occasional long exposure. Filter by category below.
        </p>
      </section>

      <div className="photo-filter container">
        <ul className="photo-filter__list">
          {categories.map((c) => (
            <li key={c.id}>
              <button
                className={`photo-filter__btn ${active === c.id ? 'is-active' : ''}`}
                onClick={() => setActive(c.id)}
              >
                <span>{c.label}</span>
                <sup>{counts[c.id] || 0}</sup>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <section className="photo-grid container">
        <AnimatePresence mode="popLayout">
          {filtered.map((p, i) => (
            <motion.button
              layout
              key={p.file}
              className="photo-grid__item"
              onClick={() => setLightboxIndex(i)}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease, delay: Math.min(i * 0.02, 0.3) }}
            >
              <img src={p.src} alt="" loading="lazy" />
              <span className="photo-grid__cat">{categoryLabel(p.category)}</span>
            </motion.button>
          ))}
        </AnimatePresence>
      </section>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            items={filtered}
            index={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
            onIndex={setLightboxIndex}
          />
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
}

function categoryLabel(id) {
  const c = categories.find((c) => c.id === id);
  return c ? c.label : id;
}
