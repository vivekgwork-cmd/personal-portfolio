import React from 'react';
import { blogPosts } from '../../data/blogPosts';

const BlogCard = ({ onBlogClick }) => {
    return (
        <div className="bento-card">
            <h3 className="label-small" style={{ marginBottom: '12px' }}>Blog</h3>

            <div className="blog-list">
                {blogPosts.map((post) => (
                    <div
                        key={post.id}
                        className="blog-item"
                        onClick={() => onBlogClick(post.id)}
                        style={{ cursor: 'pointer' }}
                    >
                        <div className="blog-date">{post.date} · {post.readTime}</div>
                        <div className="blog-title">{post.title}</div>
                        <div className="blog-excerpt">{post.excerpt}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};


export default BlogCard;
