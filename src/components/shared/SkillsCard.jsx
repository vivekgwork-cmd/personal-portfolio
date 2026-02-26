import React from 'react';

const categoryColors = {
    frontend: '#61dafb',
    backend: '#68d391',
    devops: '#f68019',
    database: '#4db33d',
    monitoring: '#e05353',
    tools: '#a78bfa',
};

const SkillsCard = ({ skills }) => {
    return (
        <div className="bento-card">
            <h3 className="label-small" style={{ marginBottom: '12px' }}>Skills</h3>
            <div className="skills-grid">
                {Object.entries(skills).map(([category, items]) => (
                    <div key={category} className="skill-group">
                        <div
                            className="skill-category-label"
                            style={{ color: categoryColors[category] || '#888' }}
                        >
                            {category}
                        </div>
                        <div className="skill-tags">
                            {items.map((skill, i) => (
                                <span key={i} className="skill-tag">{skill}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SkillsCard;
