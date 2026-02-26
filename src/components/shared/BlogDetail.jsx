import React from 'react';
import ReactMarkdown from 'react-markdown';

const BlogDetail = ({ blog, onBack }) => {
    if (!blog) return null;

    return (
        <div className="blog-detail-view">
            <div className="blog-detail-container">
                <button className="back-btn" onClick={onBack}>
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

export default BlogDetail;

