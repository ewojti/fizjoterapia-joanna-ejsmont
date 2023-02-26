import React from "react";
import "./Blog.scss";
import blogData from "../../constants/blogData";

const Blog = () => {
  const threeLastPost = blogData.slice(0, 3)
  return (
    <div id='blog' className="app__blog section__padding">
      <div className="app__blog-title">
        <h1 className="app__heading-h1">Mój Blog</h1>
        <h3 className="app__blog-title-last-posts app__heading-h3">
          Ostatnio dodane posty...
        </h3>
      </div>
      <div className="app__blog-posts">
        {threeLastPost.map((post) => (
          <div className="app__blog-post">
            <div className="app__blog-post-text">
              <div className="app__blog-post-date">
                <p>{post.date}</p>
              </div>
              <h3 className="app__heading-h3">{post.title}</h3>
              <p>{post.description}</p>
            </div>
            <div className="app__blog-post-read">
              <a href="blank">Przeczytaj wpis</a>
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
