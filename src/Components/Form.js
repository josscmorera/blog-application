import { useState } from 'react';
import '../App.css';

function Form({ addBlog }) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('');

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            addBlog({ title, content, author, createdAt: new Date() });
        }}>
            <input className="input" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
            <textarea className="textarea" value={content} onChange={(e) => setContent(e.target.value)} placeholder="Content" />
            <input className="input" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Author" />
            <button className="submit" type="submit">Publish</button>
        </form>
    );
}

export default Form;