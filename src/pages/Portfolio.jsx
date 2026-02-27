import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import BentoGrid from '../components/layout/BentoGrid';
import ProfileCard from '../components/shared/ProfileCard';
import GitHubCard from '../components/shared/GitHubCard';
import LanguagesCard from '../components/shared/LanguagesCard';
import SystemStatusCard from '../components/shared/SystemStatusCard';
import ActivityCard from '../components/shared/ActivityCard';
import BlogCard from '../components/shared/BlogCard';
import BlogDetail from '../components/shared/BlogDetail';
import ExperienceCard from '../components/shared/ExperienceCard';
import SkillsCard from '../components/shared/SkillsCard';


import { resumeData } from '../data/resumeData';
import { blogPosts } from '../data/blogPosts';


const Portfolio = () => {

    const [portfolioData, setPortfolioData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState('status');
    const navigate = useNavigate();



    useEffect(() => {
        const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

        const query = `
        {
          viewer {
            login
            name
            avatarUrl
            bio
            location
            followers { totalCount }

            following { totalCount }
            repositories(first: 50, orderBy: {field: PUSHED_AT, direction: DESC}) {
              totalCount
              nodes {
                name
                description
                url
                stargazerCount
                languages(first: 5, orderBy: {field: SIZE, direction: DESC}) {
                  edges {
                    size
                    node {
                      name
                      color
                    }
                  }
                }
              }
            }
            pinnedItems(first: 6) {
              nodes {
                ... on Repository {
                  name
                  description
                  url
                  stargazerCount
                  primaryLanguage {
                    name
                    color
                  }
                }
              }
            }
            contributionsCollection {
              contributionCalendar {
                totalContributions
                weeks {
                  contributionDays {
                    contributionCount
                    color
                    date
                  }
                }
              }
            }
          }
        }

        `;

        fetch('https://api.github.com/graphql', {
            method: 'POST',
            headers: {
                'Authorization': `bearer ${GITHUB_TOKEN}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ query }),
        })
            .then(res => res.json())
            .then(res => {
                if (res.data && res.data.viewer) {
                    setPortfolioData(res.data.viewer);
                }
                setLoading(false);
            })
            .catch(err => {
                console.error("Failed to fetch Github data:", err);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className="loading-screen">
                <div className="premium-loader"></div>
                <div className="loading-text-premium">Initiating Data Protocol</div>
            </div>
        );
    }


    const pinnedRepos = portfolioData?.pinnedItems?.nodes?.length > 0
        ? portfolioData.pinnedItems.nodes
        : portfolioData?.repositories?.nodes?.slice(0, 3) || [];

    // Calculate language percentages
    const langStats = {};
    portfolioData?.repositories?.nodes?.forEach(repo => {
        repo.languages?.edges?.forEach(edge => {
            const lang = edge.node.name;
            langStats[lang] = (langStats[lang] || 0) + edge.size;
        });
    });

    const totalSize = Object.values(langStats).reduce((a, b) => a + b, 0);
    const sortedLanguages = Object.entries(langStats)
        .map(([name, size]) => ({
            name,
            percent: parseFloat(((size / totalSize) * 100).toFixed(1)),
            color: portfolioData?.repositories?.nodes?.find(r => r.languages.edges.some(e => e.node.name === name))?.languages.edges.find(e => e.node.name === name).node.color || '#888'
        }))
        .sort((a, b) => b.percent - a.percent)
        .slice(0, 6);

    const totalStars = portfolioData?.repositories?.nodes?.reduce((acc, repo) => acc + repo.stargazerCount, 0) || 0;


    return (
        <div className="portfolio-page">
            <div className="social-bar-centered">
                <a href="https://github.com/vivekgwork-cmd" target="_blank" rel="noopener noreferrer" title="GitHub">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                </a>
                <a href="https://twitter.com/vivekgwork" target="_blank" rel="noopener noreferrer" title="Twitter">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                </a>
                <a href="mailto:vivekg.work@gmail.com" title="Email">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </a>
            </div>
            <BentoGrid>
                {/* Column 1: Development & Stats */}
                <div className="grid-column col-dev">


                    <GitHubCard
                        stats={{
                            public_repos: portfolioData?.repositories?.totalCount || 0,
                            followers: portfolioData?.followers?.totalCount || 0,
                            following: portfolioData?.following?.totalCount || 0,
                            stars: totalStars
                        }}
                        calendar={portfolioData?.contributionsCollection?.contributionCalendar}
                    />


                    <div className="bento-card">
                        <h3 className="label-small" style={{ marginBottom: '8px' }}>Pinned Projects</h3>
                        <div className="grid-column">

                            {pinnedRepos.map((repo, i) => (
                                <a key={i} href={repo.url} target="_blank" rel="noopener noreferrer" className="project-item" style={{ border: 'none', padding: '0', textDecoration: 'none' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                        <span style={{ fontSize: '12px' }}>📦</span>
                                        <div style={{ fontSize: '12px', fontWeight: 600, color: '#fafafa' }}>{repo.name}</div>
                                    </div>
                                    <div className="text-small">{repo.description || "No description available."}</div>
                                </a>
                            ))}
                        </div>
                    </div>

                    <LanguagesCard languages={sortedLanguages} />
                </div>

                {/* Column 2: Identity & Center */}
                <div className="grid-column col-identity">


                    <ProfileCard
                        name={portfolioData?.name || resumeData.name}
                        role={resumeData.title}
                        githubData={{ ...portfolioData, public_repos: portfolioData?.repositories?.totalCount }}
                    />


                </div>

                {/* Column 3: Tabbed — Status / Experience / Skills */}
                <div className="grid-column col-status">

                    {/* Tab switcher card */}
                    <div className="bento-card tab-card">
                        <div className="tab-bar">
                            {['status', 'exp', 'skills'].map(t => (
                                <button
                                    key={t}
                                    className={`tab-btn ${activeTab === t ? 'active' : ''}`}
                                    onClick={() => setActiveTab(t)}
                                >
                                    {t === 'status' ? 'Status' : t === 'exp' ? 'Experience' : 'Skills'}
                                </button>
                            ))}
                        </div>

                        {activeTab === 'status' && (
                            <div className="tab-panel">
                                <SystemStatusCard repoCount={portfolioData?.repositories?.totalCount || 0} inline />
                            </div>
                        )}
                        {activeTab === 'exp' && (
                            <div className="tab-panel">
                                <ExperienceCard experience={resumeData.experience} />
                            </div>
                        )}
                        {activeTab === 'skills' && (
                            <div className="tab-panel">
                                <SkillsCard skills={resumeData.skills} />
                            </div>
                        )}
                    </div>

                    <ActivityCard latestRepos={portfolioData?.repositories?.nodes?.slice(0, 3) || []} />

                </div>


                {/* Column 4: Blog */}
                <div className="col-blog">
                    <BlogCard onBlogClick={(id) => navigate(`/blog/${id}`)} />
                </div>

            </BentoGrid>

        </div>
    );

};

export default Portfolio;
