import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resumeData';

const ContactItem = ({ icon, label, value, href }) => (
    <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ x: 10, color: 'var(--accent-primary)' }}
        style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '15px', borderRadius: '8px', background: 'rgba(255,255,255,0.02)', border: '1px solid var(--glass-border)' }}
    >
        <span style={{ fontSize: '1.2rem' }}>{icon}</span>
        <div>
            <p style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px' }}>{label}</p>
            <p style={{ fontSize: '1rem', fontWeight: '500' }}>{value}</p>
        </div>
    </motion.a>
);

const Contact = () => {
    const { personalInfo } = resumeData;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="page-container"
        >
            <motion.h2
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="futuristic-font neon-glow"
                style={{ fontSize: '2.5rem', marginBottom: '60px', textAlign: 'center' }}
            >
                ESTABLISH CONNECTION
            </motion.h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', maxWidth: '1000px', margin: '0 auto' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <h3 className="futuristic-font" style={{ fontSize: '1.2rem', marginBottom: '10px' }}>CONTACT INFO</h3>
                    <ContactItem icon="✉️" label="Neural Mail" value={personalInfo.email} href={`mailto:${personalInfo.email}`} />
                    <ContactItem icon="📞" label="Voice Link" value={personalInfo.phone} href={`tel:${personalInfo.phone}`} />
                    <ContactItem icon="📍" label="Geospatial Coord" value={personalInfo.location} href="#" />
                </div>

                <div className="glass-panel" style={{ padding: '30px' }}>
                    <h3 className="futuristic-font" style={{ fontSize: '1.2rem', marginBottom: '20px' }}>SEND TRANSMISSION</h3>
                    <form style={{ display: 'flex', flexDirection: 'column', gap: '15px' }} onSubmit={(e) => e.preventDefault()}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                            <label style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>IDENTIFIER</label>
                            <input type="text" placeholder="Your Name" style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid var(--glass-border)', padding: '10px', color: 'white', outline: 'none' }} className="neon-focus" />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                            <label style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>RETURN ADDRESS</label>
                            <input type="email" placeholder="Your Email" style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid var(--glass-border)', padding: '10px', color: 'white', outline: 'none' }} />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                            <label style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>DATA LOAD</label>
                            <textarea rows="4" placeholder="Your Message" style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid var(--glass-border)', padding: '10px', color: 'white', outline: 'none', resize: 'none' }}></textarea>
                        </div>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="futuristic-font"
                            style={{
                                marginTop: '10px',
                                background: 'var(--accent-primary)',
                                color: 'var(--bg-deep)',
                                border: 'none',
                                padding: '12px',
                                fontWeight: 'bold',
                                cursor: 'pointer',
                                boxShadow: '0 0 15px var(--accent-primary)'
                            }}
                        >
                            INITIALIZE SEND
                        </motion.button>
                    </form>
                </div>
            </div>

            <style>
                {`
          .neon-focus:focus { border-color: var(--accent-primary) !important; box-shadow: 0 0 10px var(--accent-primary); }
        `}
            </style>
        </motion.div>
    );
};

export default Contact;
