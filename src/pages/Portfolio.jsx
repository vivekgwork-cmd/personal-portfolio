import React, { useState, useEffect } from 'react';
import BentoGrid from '../components/layout/BentoGrid';
import ProfileCard from '../components/shared/ProfileCard';
import GitHubCard from '../components/shared/GitHubCard';
import LanguagesCard from '../components/shared/LanguagesCard';
import SystemStatusCard from '../components/shared/SystemStatusCard';
import ActivityCard from '../components/shared/ActivityCard';
import BlogCard from '../components/shared/BlogCard';
import BlogDetail from '../components/shared/BlogDetail';

import { resumeData } from '../data/resumeData';
import { blogPosts } from '../data/blogPosts';


const Portfolio = () => {

    const [portfolioData, setPortfolioData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [selectedBlogId, setSelectedBlogId] = useState(null);

    const selectedBlog = blogPosts.find(p => p.id === selectedBlogId);


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


    if (selectedBlog) {
        return <BlogDetail blog={selectedBlog} onBack={() => setSelectedBlogId(null)} />;
    }

    return (
        <div className="portfolio-page">
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

                    <div className="bento-card">
                        <h3 className="label-small" style={{ marginBottom: '8px' }}>Socials</h3>
                        <div className="grid-column" style={{ gap: '4px' }}>

                            <a href="#" className="social-btn"><span>GitHub</span><span>→</span></a>
                            <a href="#" className="social-btn"><span>Email</span><span>→</span></a>
                        </div>
                    </div>
                </div>

                {/* Column 3: Status & Activity */}
                <div className="grid-column col-status">


                    <SystemStatusCard repoCount={portfolioData?.repositories?.totalCount || 0} />
                    <ActivityCard latestRepos={portfolioData?.repositories?.nodes?.slice(0, 3) || []} />

                    <div className="bento-card">
                        <h3 className="label-small" style={{ marginBottom: '8px' }}>Starred</h3>
                        <div className="grid-column">

                            {portfolioData?.repositories?.nodes?.filter(r => r.stargazerCount > 0).slice(0, 2).map((repo, i) => (
                                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <div style={{ width: '24px', height: '24px', background: repo.languages?.edges?.[0]?.node?.color || '#333', borderRadius: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: 800, color: '#fff' }}>
                                        {repo.name.substring(0, 2).toUpperCase()}
                                    </div>
                                    <div>
                                        <div style={{ fontSize: '11px', fontWeight: 600, color: '#fafafa' }}>{repo.name}</div>
                                        <div className="text-small">{repo.stargazerCount} stars</div>
                                    </div>
                                </div>
                            )) || <div className="text-small">No starred repos found.</div>}
                        </div>
                    </div>
                </div>

                {/* Column 4: Blog */}
                <div className="col-blog">
                    <BlogCard onBlogClick={(id) => setSelectedBlogId(id)} />
                </div>
            </BentoGrid>

        </div>
    );

};

export default Portfolio;
