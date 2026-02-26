import React from 'react';

const LanguagesCard = ({ languages = [] }) => {
    const displayLanguages = languages.length > 0 ? languages : [
        { name: 'JavaScript', percent: 0, color: '#f1e05a' },
    ];

    return (
        <div className="bento-card">
            <h3 className="label-small" style={{ marginBottom: '8px' }}>Languages</h3>
            <div className="lang-bar">
                {displayLanguages.map((lang, i) => (
                    <div key={i} style={{ width: `${lang.percent}%`, backgroundColor: lang.color }}></div>
                ))}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4px' }}>
                {displayLanguages.map((lang, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', fontSize: '9px' }}>
                        <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: lang.color, marginRight: '4px' }}></span>
                        <span>{lang.name} <span style={{ color: '#fafafa', marginLeft: '2px' }}>{lang.percent}%</span></span>
                    </div>
                ))}
            </div>
        </div>
    );
};


export default LanguagesCard;
