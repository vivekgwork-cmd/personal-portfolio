import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resumeData.js';
import './Contact.css';

const ease = [0.77, 0, 0.175, 1];

const prompts = [
  'Project in mind?',
  'Something to build?',
  'Curious about a shot?',
  'Want to collaborate?',
  'Just want to say hi?',
];

export default function Contact() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % prompts.length), 2600);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="contact section" id="contact">
      <div className="contact__inner container">
        <p className="eyebrow">Contact</p>

        <div className="contact__prompt">
          {prompts.map((p, idx) => (
            <span
              key={p}
              className={`contact__prompt-word display display-lg ${
                idx === i ? 'is-active' : ''
              }`}
            >
              {p}
            </span>
          ))}
        </div>

        <motion.div
          className="contact__cta"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.9, ease }}
        >
          <span className="contact__prefix">Just say</span>
          <a href={`mailto:${resumeData.contact.email}`} className="contact__mail">
            hello<span className="contact__mail-suffix">@vivekg</span>
          </a>
        </motion.div>

        <div className="contact__links">
          <a
            href={resumeData.contact.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="hover-underline"
          >
            LinkedIn
          </a>
          <a
            href={resumeData.contact.github}
            target="_blank"
            rel="noreferrer noopener"
            className="hover-underline"
          >
            GitHub
          </a>
          <a href={`mailto:${resumeData.contact.email}`} className="hover-underline">
            Email
          </a>
          <a href={`tel:${resumeData.contact.phone.replace(/\s/g, '')}`} className="hover-underline">
            {resumeData.contact.phone}
          </a>
        </div>

        <div className="contact__marquee" aria-hidden>
          <div className="contact__marquee-track">
            {Array.from({ length: 6 }).map((_, k) => (
              <span key={k} className="contact__marquee-item">
                <span>vivekg.work@gmail.com</span>
                <span className="contact__marquee-dot" />
                <span>Bengaluru, India</span>
                <span className="contact__marquee-dot" />
                <span>Available for select projects</span>
                <span className="contact__marquee-dot" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
