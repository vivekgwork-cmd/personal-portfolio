import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { featured } from '../data/photos.js';
import './PhotoTeaser.css';

const ease = [0.77, 0, 0.175, 1];

export default function PhotoTeaser() {
  return (
    <section className="teaser section" id="photography">
      <div className="teaser__head container">
        <p className="eyebrow">Photography</p>
        <motion.h2
          className="display display-lg teaser__heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15%' }}
          transition={{ duration: 0.9, ease }}
        >
          Quiet corners,<br />in colour and grey.
        </motion.h2>
      </div>

      <div className="teaser__strip">
        {featured.map((p, i) => (
          <motion.div
            key={p.file}
            className="teaser__cell"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.9, ease, delay: i * 0.06 }}
          >
            <img src={p.thumb} alt="" loading="lazy" decoding="async" />
          </motion.div>
        ))}
      </div>

      <div className="teaser__cta container">
        <Link to="/photography" className="teaser__link hover-underline">
          View full gallery
          <span aria-hidden> ↗</span>
        </Link>
      </div>
    </section>
  );
}
