import React from "react";
import "./Blog.scss";
import blogData from "../../constants/blogData";

const Blog = () => {
  return (
    <div className="app__blog section__padding">
      <div className="app__blog-title">
        <h1 className="app__heading-h1">Mój Blog</h1>
        <button className="app__blog-button p__inter">
          Zobacz wszystkie posty
        </button>
      </div>
      <div className="app__blog-posts">
        {blogData.map((post) => (
          <div className="app__blog-post">
            <div className="app__blog-post-text">
              <div className="app__blog-post-date">
                <p>{post.date}</p>
              </div>
              <h3 className="app__heading-h3">{post.title}</h3>
              <p>{post.description}</p>
            </div>
            <div className="app__blog-post-read">
              <a href="blank">Przeczytaj</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
