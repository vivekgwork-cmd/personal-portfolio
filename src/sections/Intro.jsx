import { motion } from 'framer-motion';
import './Intro.css';

const ease = [0.77, 0, 0.175, 1];

const shuffle = ['engineer.', 'program manager.', 'builder.', 'photographer.', 'engineer.'];

export default function Intro() {
  return (
    <section className="intro section container" id="intro">
      <motion.div
        className="intro__grid"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-15%' }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
        }}
      >
        <motion.p
          className="display display-lg"
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease } },
          }}
        >
          Vivek G is a
        </motion.p>

        <div className="display display-lg intro__shuffle-wrap">
          <div className="intro__shuffle">
            {shuffle.map((word) => (
              <span key={word} className="intro__word">
                {word}
              </span>
            ))}
          </div>
        </div>

        <motion.p
          className="display display-lg intro__soft"
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease } },
          }}
        >
          Shipping thoughtful digital
        </motion.p>
        <motion.p
          className="display display-lg intro__soft"
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease } },
          }}
        >
          products and capturing quiet
        </motion.p>
        <motion.p
          className="display display-lg intro__soft"
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease } },
          }}
        >
          corners of everyday life —
        </motion.p>
        <motion.p
          className="display display-lg"
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease } },
          }}
        >
          based in Bengaluru, India.
        </motion.p>
      </motion.div>
    </section>
  );
}
