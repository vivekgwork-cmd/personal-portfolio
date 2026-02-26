import React, { useState } from 'react';

const ExperienceCard = ({ experience }) => {
    const [expanded, setExpanded] = useState(null);

    return (
        <div className="bento-card">
            <h3 className="label-small" style={{ marginBottom: '12px' }}>Experience</h3>
            <div className="grid-column">
                {experience.map((job, i) => (
                    <div
                        key={i}
                        className="exp-item"
                        onClick={() => setExpanded(expanded === i ? null : i)}
                    >
                        <div className="exp-header">
                            <div>
                                <div className="exp-role">{job.role}</div>
                                <div className="exp-company">{job.company}</div>
                            </div>
                            <div className="exp-period">{job.period}</div>
                        </div>
                        {expanded === i && (
                            <ul className="exp-highlights">
                                {job.highlights.map((h, j) => (
                                    <li key={j}>{h}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ExperienceCard;
