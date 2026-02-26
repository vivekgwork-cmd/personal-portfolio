import React from 'react';

const ActivityCard = ({ latestRepos = [] }) => {
    const latest = latestRepos[0];

    return (
        <div className="bento-card">
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <div style={{ position: 'relative' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '4px', background: 'var(--accent-green)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px' }}>🚀</div>
                    <div style={{ position: 'absolute', bottom: '-1px', right: '-1px', width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-green)', border: '2px solid var(--card-bg)' }}></div>
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                    <div className="label-small" style={{ color: 'var(--accent-green)', fontWeight: 800 }}>Active</div>
                    <div style={{ fontSize: '11px', fontWeight: 600, color: '#fafafa', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {latest?.name || "No activity"}
                    </div>
                    <div className="text-small" style={{ color: 'var(--text-secondary)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {latest?.description || "Developing..."}
                    </div>
                </div>
            </div>
            <div className="text-small" style={{ marginTop: '8px', opacity: 0.8 }}>Latest Activity</div>
        </div>
    );
};


export default ActivityCard;
