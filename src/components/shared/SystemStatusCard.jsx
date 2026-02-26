import React from 'react';

const SystemStatusCard = ({ repoCount }) => {
    const processes = [
        { name: 'Repositories', uptime: 'Active', ram: `${repoCount} count` },
        { name: 'Auth', uptime: '30d', ram: 'GitHub GraphQL' },
        { name: 'Network', uptime: 'Live', ram: 'Edge Proxy' },
    ];

    return (
        <div className="bento-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-green)' }}></div>
                    <span className="label-small" style={{ color: 'var(--accent-green)' }}>GitHub Data Connected</span>
                </div>
            </div>

            <div>
                {processes.map((proc, i) => (
                    <div key={i} className="process-item">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-green)' }}></div>
                            <div>
                                <div style={{ color: '#fafafa', fontWeight: 600 }}>{proc.name}</div>
                                <div style={{ color: 'var(--text-secondary)', fontSize: '9px' }}>{proc.ram}</div>
                            </div>
                        </div>
                        <div style={{ color: 'var(--text-secondary)' }}>{proc.uptime}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};


export default SystemStatusCard;
