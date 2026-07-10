import { motion } from 'framer-motion';
import { resumeData } from '../data/resumeData.js';
import './About.css';

const ease = [0.77, 0, 0.175, 1];

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="about__wrap container">
        <div className="about__left">
          <p className="eyebrow">About</p>
          <motion.h2
            className="display display-lg about__heading"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-15%' }}
            transition={{ duration: 0.9, ease }}
          >
            Building &amp;<br />observing.
          </motion.h2>
        </div>

        <div className="about__right">
          <motion.p
            className="body-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.9, ease, delay: 0.1 }}
          >
            {resumeData.intro} Currently owning end-to-end delivery for digital
            transformation programs at Weberon Solutions in Bengaluru, India.
          </motion.p>

          <div className="about__timeline">
            {resumeData.experience.map((e, i) => (
              <motion.div
                key={`${e.company}-${e.period}`}
                className="about__row"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10%' }}
                transition={{ duration: 0.7, ease, delay: 0.05 * i }}
              >
                <div className="about__period">{e.period}</div>
                <div className="about__job">
                  <div className="about__role">{e.role}</div>
                  <div className="about__company">{e.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
