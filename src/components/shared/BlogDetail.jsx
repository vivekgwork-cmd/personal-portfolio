import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

const BlogDetail = ({ blog, onBack }) => {
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (blog?.markdownFile) {
            fetch(blog.markdownFile)
                .then(res => res.text())
                .then(text => {
                    setContent(text);
                    setLoading(false);
                })
                .catch(err => {
                    console.error("Failed to load blog content:", err);
                    setLoading(false);
                });
        }
    }, [blog]);

    if (!blog) return null;

    return (
        <div className="blog-detail-view">
            <div className="blog-detail-container">
                <button className="back-btn" onClick={onBack}>
                    <span>←</span> Back to Portfolio
                </button>

                <div className="blog-hero">
                    <img src={blog.heroImage} alt={blog.title} />
                </div>

                <div className="blog-meta">
                    <span className="blog-date">{blog.date}</span>
                    <span className="dot">·</span>
                    <span className="blog-read-time">{blog.readTime}</span>
                </div>

                <div className="markdown-body">
                    {loading ? (
                        <div className="loading-text">Deciphering content...</div>
                    ) : (
                        <ReactMarkdown>{content}</ReactMarkdown>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BlogDetail;
