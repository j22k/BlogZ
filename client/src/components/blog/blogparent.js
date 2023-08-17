import React from 'react';
import '../blogparent.css'; // Import your CSS file for styling

const Blog = ({ title, content }) => {
  return (
    <div className="blog-card">
      <div className="blog-header">
        <h2 className="blog-title">{title}</h2>
        <div className="user-profile-icon">User Icon</div>
      </div>
      <div className="blog-content">{content}</div>
    </div>
  );
};

export default Blog;
