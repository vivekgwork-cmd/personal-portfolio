import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { getBlogById } from '../utils/blogLoader';

const BlogPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        const data = getBlogById(id);
        setBlog(data);
    }, [id]);

    if (!blog) {
        return (
            <div className="blog-detail-view" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '48px', marginBottom: '16px' }}>404</div>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>Blog post not found.</p>
                    <button className="back-btn" onClick={() => navigate('/')} style={{ margin: '0 auto' }}>
                        ← Back to Portfolio
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="blog-detail-view">
            <div className="blog-detail-container">
                <button className="back-btn" onClick={() => navigate('/')}>
                    <span>←</span> Back to Portfolio
                </button>

                {blog.heroImage && (
                    <div className="blog-hero">
                        <img src={blog.heroImage} alt={blog.title} />
                    </div>
                )}

                <div className="blog-meta">
                    <span className="blog-date">{blog.date}</span>
                    <span className="dot">·</span>
                    <span className="blog-read-time">{blog.readTime}</span>
                </div>

                <div className="markdown-body">
                    {blog.content ? (
                        <ReactMarkdown>{blog.content}</ReactMarkdown>
                    ) : (
                        <p style={{ color: 'var(--text-secondary)' }}>No content available for this post.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BlogPage;
