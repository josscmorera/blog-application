import { useState } from 'react';
import '../App.css'

function BlogCard({ blog, deleteBlog }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className={`card ${isOpen ? 'open' : ''}`} onClick={handleOpen}>
            <h2>{blog.title}</h2>
            <p>{blog.author}</p>
            <p className="content">{blog.content}</p>
            <p>{blog.createdAt.toString()}</p>
            <button className="deleteBtn" onClick={(e) => { e.stopPropagation(); deleteBlog(blog); }}>Delete</button>
        </div>
    );
}

export default BlogCard;