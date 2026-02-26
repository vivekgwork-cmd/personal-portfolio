import React, { useState, useEffect } from 'react';

const ProfileCard = ({ name, role, githubData }) => {
    const avatarUrl = githubData?.avatarUrl || "https://avatars.githubusercontent.com/u/101880590?v=4";
    const bioText = "Curious mind, builder by instinct — I enjoy figuring things out, simplifying the complex, and making ideas actually work.";
    const [displayText, setDisplayText] = useState('');
    const [index, setIndex] = useState(0);

    const locationStr = githubData?.location || "Bengaluru, IND";

    useEffect(() => {
        if (index < bioText.length) {
            const timeout = setTimeout(() => {
                setDisplayText((prev) => prev + bioText[index]);
                setIndex((prev) => prev + 1);
            }, 30); // Speed of typing
            return () => clearTimeout(timeout);
        }
    }, [index, bioText]);

    return (
        <div className="bento-card" style={{ alignItems: 'center', textAlign: 'center' }}>
            <img src={avatarUrl} alt="Avatar" className="avatar" />
            <h1 style={{ fontSize: '20px', marginBottom: '4px' }}>{name}</h1>
            <p className="text-small" style={{
                color: 'var(--text-secondary)',
                minHeight: '2.8em', // Prevent layout shift
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap'
            }}>
                {displayText}
                <span className="typewriter-cursor"></span>
            </p>
            <p className="text-small" style={{ marginTop: '4px' }}>
                {new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })} · {locationStr}
            </p>



            <div className="status-badge">
                <span className="status-dot"></span>
                All Systems Operational
            </div>
        </div>
    );
};

export default ProfileCard;
