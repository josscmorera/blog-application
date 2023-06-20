import React from 'react';
import BlogCard from './BlogCard';
import '../App.css';

function AllBlogs({ blogs, deleteBlog }) {
    return (
        <div className="allBlogs">
            {blogs.map((blog) => <BlogCard key={blog.id} blog={blog} deleteBlog={deleteBlog} />)}
        </div>
    );
}

export default AllBlogs;