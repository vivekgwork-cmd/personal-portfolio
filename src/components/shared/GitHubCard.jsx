import React from 'react';

const GitHubCard = ({ stats, calendar }) => {
    const repoCount = stats?.public_repos || 0;
    const followerCount = stats?.followers || 0;
    const followingCount = stats?.following || 0;
    const starCount = stats?.stars || 0;

    // Flatten weeks into days for the grid
    // Use the last 140 days to fit the grid design (approx 20 weeks)
    const allDays = calendar?.weeks?.flatMap(w => w.contributionDays) || [];
    const displayDays = allDays.slice(-140); // Last 140 days

    return (
        <div className="bento-card">
            <div className="graph-grid">
                {displayDays.length > 0 ? (
                    displayDays.map((day, i) => (
                        <div
                            key={i}
                            className="graph-cell"
                            style={{ backgroundColor: day.color }}
                            title={`${day.contributionCount} contributions on ${day.date}`}
                        ></div>
                    ))
                ) : (
                    // Fallback to empty cells if no calendar data
                    Array.from({ length: 140 }).map((_, i) => (
                        <div key={i} className="graph-cell"></div>
                    ))
                )}
            </div>

            <div className="stats-row">
                <div>
                    <div className="stat-value">{repoCount}</div>
                    <div className="stat-label">Repos</div>
                </div>
                <div>
                    <div className="stat-value">{starCount}</div>
                    <div className="stat-label">Stars</div>
                </div>
                <div>
                    <div className="stat-value">{followerCount}</div>
                    <div className="stat-label">Followers</div>
                </div>
                <div>
                    <div className="stat-value">{followingCount}</div>
                    <div className="stat-label">Following</div>
                </div>
            </div>
        </div>
    );
};

export default GitHubCard;
