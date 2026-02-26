import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resumeData';

const ProjectCard = ({ project, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.02 }}
        className="glass-panel"
        style={{
            padding: '0',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            border: '1px solid var(--glass-border)',
            position: 'relative'
        }}
    >
        {/* Animated Scanline Effect on Hover */}
        <div className="project-image" style={{
            height: '180px',
            background: 'linear-gradient(45deg, var(--bg-deep), #1a1a1a)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden'
        }}>
            <div className="futuristic-font" style={{ fontSize: '3rem', opacity: 0.1 }}>{project.title.charAt(0)}</div>

            {/* Decorative lines */}
            <div style={{ position: 'absolute', top: '10px', right: '10px', display: 'flex', gap: '5px' }}>
                <div style={{ width: '4px', height: '4px', background: 'var(--accent-primary)', borderRadius: '50%' }}></div>
                <div style={{ width: '4px', height: '4px', background: 'var(--accent-primary)', borderRadius: '50%', opacity: 0.5 }}></div>
                <div style={{ width: '4px', height: '4px', background: 'var(--accent-primary)', borderRadius: '50%', opacity: 0.2 }}></div>
            </div>
        </div>

        <div style={{ padding: '20px' }}>
            <h3 className="futuristic-font" style={{ color: 'var(--accent-primary)', marginBottom: '10px', fontSize: '1rem' }}>{project.title}</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '15px', height: '60px', overflow: 'hidden' }}>{project.description}</p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '15px' }}>
                {project.techStack.map(tech => (
                    <span key={tech} style={{
                        fontSize: '0.7rem',
                        border: '1px solid var(--accent-secondary)',
                        padding: '2px 8px',
                        borderRadius: '10px',
                        color: 'var(--accent-secondary)'
                    }}>
                        {tech}
                    </span>
                ))}
            </div>

            <div style={{ fontSize: '0.85rem', color: 'var(--text-primary)', borderTop: '1px solid var(--glass-border)', paddingTop: '10px' }}>
                {project.details}
            </div>
        </div>
    </motion.div>
);

const Projects = () => {
    const { projects } = resumeData;

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
                style={{ fontSize: '2.5rem', marginBottom: '40px', textAlign: 'center' }}
            >
                SELECT WORKS
            </motion.h2>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '24px',
                paddingBottom: '80px'
            }}>
                {projects.map((project, index) => (
                    <ProjectCard key={project.title} project={project} index={index} />
                ))}
            </div>
        </motion.div>
    );
};

export default Projects;
