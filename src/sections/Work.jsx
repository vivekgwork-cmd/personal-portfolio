import { motion } from 'framer-motion';
import { projects } from '../data/resumeData.js';
import './Work.css';

const ease = [0.77, 0, 0.175, 1];

export default function Work() {
  return (
    <section className="work section" id="work">
      <div className="work__header container">
        <p className="eyebrow">Selected Work</p>
        <motion.h2
          className="display display-lg work__heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15%' }}
          transition={{ duration: 0.9, ease }}
        >
          A project<br />I keep coming<br />back to.
        </motion.h2>
      </div>

      <div className="work__list container">
        {projects.map((p, i) => (
          <motion.a
            key={p.title}
            href={p.href}
            target="_blank"
            rel="noreferrer noopener"
            className="work__item"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.9, ease, delay: i * 0.1 }}
          >
            <div className="work__row">
              <div className="work__num">0{i + 1}</div>
              <div className="work__meta">
                <div className="work__title-wrap">
                  <span className="work__title">{p.title}</span>
                  <span className="work__year">{p.year}</span>
                </div>
                <p className="work__cat">{p.category}</p>
                <p className="work__desc">{p.description}</p>
              </div>
              <div className="work__arrow" aria-hidden>↗</div>
            </div>
            <div className="work__underline" />
          </motion.a>
        ))}
      </div>
    </section>
  );
}
