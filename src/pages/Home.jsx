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
const roles = [
    'Full Stack Developer',
    'Technical Program Manager',
    'Solutions Specialist',
    'Founder',
];

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
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                    <div className="hero-status">
                        <span className="status-dot" /> Available for consulting
                    </div>
                    <div className="hero-greet">Hey, I'm</div>
                    <h1 className="hero-name">Vivek G.</h1>
                    <div className="hero-role">
                        <RoleCycler />
                    </div>
                    <p className="hero-bio">
                        I build production software and lead the programs that deliver
                        it. Four years across engineering and program management —
                        MERN, DevOps, and cross-functional teams of up to 10.
                    </p>
                    <div className="hero-actions">
                        <a href="#book" className="btn-primary">Book a Call</a>
                        <a href="#work" className="btn-ghost">View Work →</a>
                    </div>
                </motion.div>

                <motion.div
                    className="hero-portrait"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                >
                    <img
                        src="/bg_for_personalpic.jpeg"
                        alt=""
                        className="hero-portrait-bg"
                        aria-hidden="true"
                    />
                    <img
                        src="/bg-removed-personal-pic.png"
                        alt="Vivek G"
                        className="hero-portrait-fg"
                    />
                </motion.div>
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
                        I lead teams that ship.<br />
                        I run programs that deliver.
                    </p>
                    <p className="about-body">
                        4 years of shipping production software — from re-architecting
                        legacy systems with a 95% performance gain, to containerizing
                        full stacks and managing CI/CD pipelines that hold in production.
                    </p>
                    <p className="about-body">
                        As a Solutions Specialist & TPM at Weberon, I sit at the
                        intersection of engineering and delivery management — owning
                        3–5 concurrent programs, coordinating teams of up to 10, and
                        driving execution from brief to launch with zero unplanned
                        rollbacks.
                    </p>
                    <div className="tags">
                        {[
                            '4 yrs experience',
                            'Bengaluru, India',
                            'Open to collaboration',
                            'Engineering + Program Management',
                        ].map(t => (
                            <span key={t} className="tag">{t}</span>
                        ))}
                    </div>
                </div>
            </Fade>

            <Fade delay={0.16}>
                <div className="skills-list">
                    {[
                        { name: 'Engineering', items: 'React, Next.js, Node.js, TypeScript, MongoDB, Redux' },
                        { name: 'DevOps', items: 'Docker, Kubernetes, Jenkins, AWS, GCP, CI/CD' },
                        { name: 'Program Mgmt', items: 'Agile / Scrum, Sprint Planning, Risk Management, Roadmapping' },
                        { name: 'Tools', items: 'Jira, OpenProject, Notion, Confluence, Cursor AI, Copilot' },
                        { name: 'Leadership', items: 'Cross-functional teams, stakeholder communication, release governance' },
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
                <Fade key={exp.company + exp.role} delay={i * 0.08}>
                    <div className="exp-item">
                        <div className="exp-period">
                            {exp.period}<br />{exp.location}
                        </div>
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

// ─── Projects ─────────────────────────────────────────────────────────
const projects = [
    {
        featured: true,
        name: 'Prformnce',
        badge: 'Latest · Live',
        desc: 'Lead-intelligence SaaS built around Smart Form Endpoints, a QR Campaign Generator, and Engagement Analytics — helping SMBs and event organizers capture and understand leads in one workflow. Own the product roadmap, infrastructure, and go-to-market positioning end to end.',
        tech: 'React · Node.js · MongoDB · QR Generation · Analytics',
        href: 'https://www.wbzard.com/prformnce/',
        linkLabel: 'wbzard.com/prformnce →',
    },
    {
        name: 'Document Automation Platform',
        desc: 'Re-architected a legacy marketing automation platform integrating pdfme for dynamic, print-ready PDF generation. Cut bulk generation from 2.5 hours to under 30 seconds — 95% reduction.',
        tech: 'TypeScript · pdfme · Node.js · WYSIWYG',
    },
    {
        name: 'JAMstack Modernization',
        desc: 'Migrated legacy HTML/CSS/JS properties to Next.js SSG architecture with a centralized Jenkins CI/CD pipeline capable of building and deploying 10–15 websites in a single execution.',
        tech: 'Next.js · Jenkins · Docker · Certbot · AWS',
    },
    {
        name: 'Blokz.store — E-Commerce Platform',
        desc: 'MERN stack e-commerce platform built with AI-assisted development, achieving a 70% reduction in development hours. Razorpay integration, Redux state management, Cloudinary media delivery.',
        tech: 'React · Node.js · MongoDB · Redux · Razorpay',
    },
    {
        name: 'K8s Observability Stack',
        desc: 'Prometheus + Grafana + Alertmanager deployed on Kubernetes for full observability across production microservices. Configured Nagios for disk, HTTP, and SSL expiry monitoring.',
        tech: 'Kubernetes · Prometheus · Grafana · Nagios',
    },
    {
        name: 'Enterprise React UI System',
        desc: 'Built a reusable React component library adopted across multiple enterprise project teams at Wipro, reducing duplicate development effort and improving cross-team consistency.',
        tech: 'React · TypeScript · REST APIs · Agile',
    },
];

const WorkSection = () => (
    <section id="work" className="section">
        <Fade>
            <div className="section-label">Work</div>
            <h2 className="section-title">Selected Projects</h2>
        </Fade>
        <div className="projects-grid-wrap">
            {projects.map((p, i) => {
                const Tag = p.href ? 'a' : 'div';
                const linkProps = p.href
                    ? { href: p.href, target: '_blank', rel: 'noopener noreferrer' }
                    : {};
                return (
                    <Fade key={p.name} delay={i * 0.05}>
                        <Tag
                            className={`proj-card${p.featured ? ' proj-featured' : ''}`}
                            {...linkProps}
                        >
                            {p.badge && <span className="proj-badge">{p.badge}</span>}
                            <div className="proj-name">{p.name}</div>
                            <div className="proj-desc">{p.desc}</div>
                            <div className="proj-tech">{p.tech}</div>
                            {p.linkLabel && (
                                <span className="proj-link-hint">{p.linkLabel}</span>
                            )}
                        </Tag>
                    </Fade>
                );
            })}
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
                            Need a technical second opinion, architecture review, or someone
                            to scope and lead your next program? Book an hour — I'll show up
                            prepared.
                        </p>
                        <div className="book-items">
                            {[
                                'Technical consulting & architecture review',
                                'DevOps setup & CI/CD pipeline consulting',
                                'Program scoping, risk assessment & team planning',
                                'Product strategy & go-to-market for SaaS',
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
                                <a href="mailto:vivekg.work@gmail.com" style={{ fontSize: '14px', color: 'var(--text)' }}>
                                    vivekg.work@gmail.com
                                </a>
                                <br />
                                <button onClick={() => setSubmitted(false)} className="btn-ghost" style={{ marginTop: '24px' }}>
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
                                        placeholder="e.g. architecture review, program scoping, CI/CD setup..."
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
                                        <select className="form-input" name="time" value={form.time} onChange={set} required>
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

                                <button type="submit" className="btn-primary" style={{ alignSelf: 'flex-start' }}>
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
                <a href={resumeData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a>
                <a href={resumeData.contact.github} target="_blank" rel="noopener noreferrer" className="footer-link">GitHub</a>
                <a href={`mailto:${resumeData.contact.email}`} className="footer-link">Email</a>
                <a href="tel:+919606619285" className="footer-link">+91 9606619285</a>
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
