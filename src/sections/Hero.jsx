import { motion } from 'framer-motion';
import './Hero.css';

const ease = [0.77, 0, 0.175, 1];

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__inner container">
        <motion.p
          className="eyebrow hero__eyebrow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.4 }}
        >
          Vivek G — Bengaluru, India
        </motion.p>

        <h1 className="display-xl hero__title">
          <span className="hero__line">
            <motion.span
              initial={{ y: '110%' }}
              animate={{ y: '0%' }}
              transition={{ duration: 1.1, ease, delay: 0.55 }}
            >
              Thoughtful
            </motion.span>
          </span>
          <span className="hero__line">
            <motion.span
              initial={{ y: '110%' }}
              animate={{ y: '0%' }}
              transition={{ duration: 1.1, ease, delay: 0.7 }}
            >
              Programs,
            </motion.span>
          </span>
          <span className="hero__line">
            <motion.span
              initial={{ y: '110%' }}
              animate={{ y: '0%' }}
              transition={{ duration: 1.1, ease, delay: 0.85 }}
            >
              Quiet Frames.
            </motion.span>
          </span>
        </h1>

        {/* <motion.div
          className="hero__meta"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease, delay: 1.2 }}
        >
          <span>Selected work</span>
          <span className="hero__meta-divider" />
          <span>Photography — 2020 → Present</span>
        </motion.div> */}
      </div>

      <motion.div
        className="hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease, delay: 1.5 }}
      >
        <span>Scroll</span>
        <span className="hero__scroll-bar" />
      </motion.div>
    </section>
  );
}
