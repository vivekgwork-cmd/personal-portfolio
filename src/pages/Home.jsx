import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { resumeData } from '../data/resumeData';
import { featuredPhotos } from '../data/photos';
import { getAllBlogs } from '../utils/blogLoader';

// ─── Fade-in wrapper ─────────────────────────────────────────────────
const Fade = ({ children, delay = 0 }) => (
    <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-30px' }}
        transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
        {children}
    </motion.div>
);

// ─── Role Cycler ─────────────────────────────────────────────────────
const roles = ['Full Stack Developer', 'DevOps Engineer', 'Solutions Specialist', 'Agency Builder'];

const RoleCycler = () => {
    const [idx, setIdx] = useState(0);
    useEffect(() => {
        const t = setInterval(() => setIdx(i => (i + 1) % roles.length), 3200);
        return () => clearInterval(t);
    }, []);
    return (
        <AnimatePresence mode="wait">
            <motion.span
                key={roles[idx]}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.28 }}
                style={{ display: 'block' }}
            >
                {roles[idx]}
            </motion.span>
        </AnimatePresence>
    );
};

// ─── Hero ─────────────────────────────────────────────────────────────
const HeroSection = () => (
    <section className="hero-section">
        <div className="hero">
            <div className="hero-inner">
                <motion.div
                    className="hero-text"
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                    <div className="hero-name">Vivek G.</div>
                    <div className="hero-role">
                        <RoleCycler />
                    </div>
                    <p className="hero-bio">
                        Full Stack Developer and Solutions Specialist with 3.8+ years
                        shipping production software. I build scalable systems and lead
                        teams that deliver.
                    </p>
                    <div className="hero-actions">
                        <a href="#book" className="btn-primary">Book a Call</a>
                        <Link to="/photography" className="btn-ghost">Photography →</Link>
                    </div>
                </motion.div>

                <motion.img
                    src="/bg-removed-personal-pic.png"
                    alt="Vivek G"
                    className="hero-photo"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.9 }}
                    transition={{ duration: 0.9, delay: 0.3 }}
                />
            </div>
        </div>
        <div className="hero-scroll">
            <div className="scroll-line" />
            <span>scroll</span>
        </div>
    </section>
);

// ─── About ────────────────────────────────────────────────────────────
const AboutSection = () => (
    <section id="about" className="section">
        <Fade>
            <div className="section-label">About</div>
        </Fade>
        <div className="about-grid">
            <Fade delay={0.08}>
                <div>
                    <p className="about-lead">
                        I build things that scale.<br />
                        I manage teams that ship.<br />
                        I run an agency that gets it done.
                    </p>
                    <p className="about-body">
                        3.8+ years of shipping production software — from re-architecting
                        legacy systems and cutting document generation time by 95%, to
                        containerizing full stacks and building CI/CD pipelines that hold
                        in production.
                    </p>
                    <p className="about-body">
                        As a Solutions Specialist at Weberon, I operate at the intersection
                        of engineering and management — leading client engagements, scoping
                        technical work, and driving delivery from brief to launch.
                    </p>
                    <div className="tags">
                        {['3.8+ yrs experience', 'Bengaluru, India', 'Open to collaboration', 'Tech & Management'].map(t => (
                            <span key={t} className="tag">{t}</span>
                        ))}
                    </div>
                </div>
            </Fade>

            <Fade delay={0.16}>
                <div className="skills-list">
                    {[
                        { name: 'Frontend', items: 'React, Next.js, Redux, JavaScript' },
                        { name: 'Backend', items: 'Node.js, Express, REST APIs, JWT' },
                        { name: 'DevOps', items: 'Docker, Kubernetes, Jenkins, AWS' },
                        { name: 'Monitoring', items: 'Prometheus, Grafana, Nagios' },
                        { name: 'Management', items: 'Team leadership, client delivery, project scoping, agency ops' },
                    ].map(s => (
                        <div key={s.name} className="skill-row">
                            <span className="skill-name-label">{s.name}</span>
                            <span className="skill-items">{s.items}</span>
                        </div>
                    ))}
                </div>
            </Fade>
        </div>
    </section>
);

// ─── Experience ───────────────────────────────────────────────────────
const ExperienceSection = () => (
    <section id="experience" className="section">
        <Fade>
            <div className="section-label">Experience</div>
        </Fade>
        <div className="exp-list">
            {resumeData.experience.map((exp, i) => (
                <Fade key={exp.company} delay={i * 0.1}>
                    <div className="exp-item">
                        <div className="exp-period">{exp.period}<br />{exp.location}</div>
                        <div>
                            <div className="exp-role">{exp.role}</div>
                            <div className="exp-company">{exp.company}</div>
                            <ul className="exp-bullets">
                                {exp.highlights.map((h, j) => (
                                    <li key={j}>{h}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </Fade>
            ))}
        </div>
    </section>
);

// ─── Work / Projects ──────────────────────────────────────────────────
const projects = [
    {
        name: 'PDF Generation Engine',
        desc: 'Re-architected a legacy document platform using pdfme. Cut generation time by 95% and reduced server load significantly.',
        tech: 'TypeScript · pdfme · Node.js',
    },
    {
        name: 'FormFreedom CRM',
        desc: 'Full-stack CRM for lead tracking and automated follow-ups, with a Jenkins CI/CD pipeline and containerized deployment.',
        tech: 'React · Node.js · MongoDB · Docker',
    },
    {
        name: 'Next.js JAMstack Migration',
        desc: 'Migrated three production websites from legacy CMS to Next.js. 3x performance improvement, Lighthouse score 100.',
        tech: 'Next.js · Jenkins · AWS EC2',
    },
    {
        name: 'K8s Observability Stack',
        desc: 'Prometheus + Grafana + Alertmanager deployed on Kubernetes. Full observability for production microservices.',
        tech: 'Kubernetes · Prometheus · Grafana · YAML',
    },
    {
        name: 'Jenkins CI/CD Templates',
        desc: 'Reusable pipeline templates for multi-stage Docker builds, SonarQube analysis, and zero-downtime deployments.',
        tech: 'Jenkins · Docker · SonarQube · Groovy',
    },
    {
        name: 'Weberon Agency Platform',
        desc: 'Internal operations platform for managing client projects, timelines, and deliverables end-to-end at Weberon Solutions.',
        tech: 'React · Node.js · REST APIs',
    },
];

const WorkSection = () => (
    <section id="work" className="section">
        <Fade>
            <div className="section-label">Work</div>
            <h2 className="section-title">Selected Projects</h2>
        </Fade>
        <div className="projects-grid-wrap">
            {projects.map((p, i) => (
                <Fade key={p.name} delay={i * 0.05}>
                    <div className="proj-card">
                        <div className="proj-name">{p.name}</div>
                        <div className="proj-desc">{p.desc}</div>
                        <div className="proj-tech">{p.tech}</div>
                    </div>
                </Fade>
            ))}
        </div>
    </section>
);

// ─── Blog ─────────────────────────────────────────────────────────────
const BlogSection = () => {
    const blogs = getAllBlogs()
        .filter(b => !['test', 'daily-test'].includes(b.id))
        .slice(0, 4);

    return (
        <section id="blog" className="section">
            <Fade>
                <div className="section-label">Writing</div>
                <h2 className="section-title">From the blog</h2>
            </Fade>
            <div className="blog-list">
                {blogs.map((b, i) => (
                    <Fade key={b.id} delay={i * 0.07}>
                        <Link to={`/blog/${b.id}`} className="blog-row">
                            <div>
                                <div className="blog-row-title">{b.title}</div>
                                {b.excerpt && <div className="blog-row-excerpt">{b.excerpt}</div>}
                            </div>
                            <div className="blog-row-meta">
                                <div>{b.readTime || '3 min read'}</div>
                                <div>{b.date}</div>
                            </div>
                        </Link>
                    </Fade>
                ))}
            </div>
        </section>
    );
};

// ─── Photography Teaser ───────────────────────────────────────────────
const LensSection = () => {
    const navigate = useNavigate();
    return (
        <section id="photography" className="section">
            <Fade>
                <div className="section-label">Photography</div>
                <div className="lens-header">
                    <h2 className="section-title">Through the lens</h2>
                    <button className="btn-ghost" onClick={() => navigate('/photography')}>
                        View all →
                    </button>
                </div>
            </Fade>
            <Fade delay={0.1}>
                <div
                    className="photo-grid-home"
                    style={{ cursor: 'pointer' }}
                    onClick={() => navigate('/photography')}
                >
                    {featuredPhotos.map((photo) => (
                        <div key={photo.src} className="photo-item">
                            <img src={photo.src} alt="" loading="lazy" />
                        </div>
                    ))}
                </div>
            </Fade>
        </section>
    );
};

// ─── Book a Call ──────────────────────────────────────────────────────
const BookSection = () => {
    const [form, setForm] = useState({
        name: '', email: '', topic: '', date: '', time: '', message: '',
    });
    const [submitted, setSubmitted] = useState(false);

    const set = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

    const submit = (e) => {
        e.preventDefault();
        const subject = encodeURIComponent(`1hr Booking: ${form.topic || 'Consultation'}`);
        const body = encodeURIComponent(
            `Name: ${form.name}\nEmail: ${form.email}\nTopic: ${form.topic}\nDate: ${form.date}\nTime: ${form.time} IST\n\nMessage:\n${form.message}`
        );
        window.open(`mailto:vivekg.work@gmail.com?subject=${subject}&body=${body}`, '_blank');
        setSubmitted(true);
    };

    return (
        <section id="book" className="section">
            <Fade>
                <div className="section-label">Let's work together</div>
                <h2 className="section-title">Book a 1hr call</h2>
            </Fade>

            <div className="book-grid">
                <Fade delay={0.1}>
                    <div>
                        <p className="book-intro">
                            Got a project to scope, an architecture to review, or a team
                            to build? Book an hour — I'll show up prepared.
                        </p>
                        <div className="book-items">
                            {[
                                'Technical consulting & architecture review',
                                'DevOps setup & pipeline consulting',
                                'Project scoping & team planning',
                                'Agency & product strategy',
                            ].map(item => (
                                <div key={item} className="book-item">
                                    <span className="book-item-dash">—</span>
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </Fade>

                <Fade delay={0.15}>
                    <AnimatePresence mode="wait">
                        {submitted ? (
                            <motion.div
                                key="success"
                                className="success-box"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.4 }}
                            >
                                <p>Email client opened. Send the email and I'll confirm within 24 hours.</p>
                                <a
                                    href="mailto:vivekg.work@gmail.com"
                                    style={{ fontSize: '14px', color: 'var(--text)' }}
                                >
                                    vivekg.work@gmail.com
                                </a>
                                <br />
                                <button
                                    onClick={() => setSubmitted(false)}
                                    className="btn-ghost"
                                    style={{ marginTop: '24px' }}
                                >
                                    Book another slot
                                </button>
                            </motion.div>
                        ) : (
                            <motion.form
                                key="form"
                                className="booking-form"
                                onSubmit={submit}
                                initial={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            >
                                <div className="form-row">
                                    <div className="form-group">
                                        <label className="form-label">Name</label>
                                        <input
                                            className="form-input" type="text" name="name"
                                            placeholder="Your name" value={form.name}
                                            onChange={set} required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Email</label>
                                        <input
                                            className="form-input" type="email" name="email"
                                            placeholder="you@company.com" value={form.email}
                                            onChange={set} required
                                        />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="form-label">What do you want to work on?</label>
                                    <input
                                        className="form-input" type="text" name="topic"
                                        placeholder="e.g. architecture review, CI/CD setup, team planning..."
                                        value={form.topic} onChange={set} required
                                    />
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label className="form-label">Date</label>
                                        <input
                                            className="form-input" type="date" name="date"
                                            value={form.date} onChange={set} required
                                            min={new Date().toISOString().split('T')[0]}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Time (IST)</label>
                                        <select
                                            className="form-input" name="time"
                                            value={form.time} onChange={set} required
                                        >
                                            <option value="">Pick a time</option>
                                            <option value="10:00 AM">10:00 AM</option>
                                            <option value="11:00 AM">11:00 AM</option>
                                            <option value="12:00 PM">12:00 PM</option>
                                            <option value="2:00 PM">2:00 PM</option>
                                            <option value="3:00 PM">3:00 PM</option>
                                            <option value="4:00 PM">4:00 PM</option>
                                            <option value="5:00 PM">5:00 PM</option>
                                            <option value="7:00 PM">7:00 PM</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="form-label">Anything else? (optional)</label>
                                    <textarea
                                        className="form-input" name="message" rows="3"
                                        placeholder="Context, goals, questions..."
                                        value={form.message} onChange={set}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="btn-primary"
                                    style={{ alignSelf: 'flex-start' }}
                                >
                                    Book My Slot →
                                </button>
                            </motion.form>
                        )}
                    </AnimatePresence>
                </Fade>
            </div>
        </section>
    );
};

// ─── Footer ───────────────────────────────────────────────────────────
const Footer = () => (
    <footer className="footer">
        <div className="footer-inner">
            <div>
                <div className="footer-logo">Vivek G.</div>
                <p className="footer-sub">Building. Managing. Shipping.</p>
            </div>
            <div className="footer-links">
                <a href="https://github.com/vivekgwork-cmd" target="_blank" rel="noopener noreferrer" className="footer-link">GitHub</a>
                <a href="mailto:vivekg.work@gmail.com" className="footer-link">Email</a>
                <a href="https://www.linkedin.com/in/vivekgwork" target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a>
            </div>
        </div>
    </footer>
);

// ─── Home ─────────────────────────────────────────────────────────────
const Home = () => (
    <>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <WorkSection />
        <BlogSection />
        <LensSection />
        <BookSection />
        <Footer />
    </>
);

export default Home;
