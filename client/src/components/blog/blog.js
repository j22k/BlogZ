import React from 'react';
import Blog from './blogparent';

const BlogList = () => {
  const blogs = [
    {
      title: 'Blog Title 1',
      content: 'This is the content of the first blog.'
    },
    {
      title: 'Blog Title 2',
      content: 'This is the content of the second blog.'
    }
    // Add more blogs here
  ];

  return (
    <div>
      {blogs.map((blog, index) => (
        <Blog key={index} title={blog.title} content={blog.content} />
      ))}
    </div>
  );
};

export default BlogList;
