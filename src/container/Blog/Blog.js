import React from "react";
import "./Blog.scss";
import blogData from "../../constants/blogData";

const Blog = () => {
  return (
    <div className="app__blog section__padding">
      <h1 className="app__heading-h1">Mój Blog</h1>
      <div className="app__blog-posts">
        {blogData.map((post) => (
          <div className="app__blog-post">
            <div className="app__blog-post-text">
              <h3>{post.title}</h3>
              <p>{post.description}</p>
            </div>
            <div className="app__blog-post-date">
              <p>{post.date}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="app__blog-button p__inter">
        Zobacz wszystkie posty
      </button>
    </div>
  );
};

export default Blog;
