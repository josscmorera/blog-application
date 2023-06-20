import { useState } from "react";
import Form from "./Components/Form";
import AllBlogs from "./Components/AllBlogs";
import "./App.css";

function App() {
  const [blogs, setBlogs] = useState([]);

  const addBlog = (blog) => {
    blog.id = Date.now();
    setBlogs([blog, ...blogs]);
  };

  const deleteBlog = (blogToDelete) => {
    setBlogs(blogs.filter((blog) => blog.id !== blogToDelete.id));
  };

  return (
    <div className="app">
      <Form addBlog={addBlog} />
      <AllBlogs blogs={blogs} deleteBlog={deleteBlog} />
    </div>
  );
}

export default App;