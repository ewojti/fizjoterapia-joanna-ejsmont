import React from "react";
import blogData from "../../constants/blogData";
import "./BlogList.scss";
import BlogHead from "../../components/BlogHead.js/BlogHead";
import { Link } from "react-router-dom";
import NavigateBtn from "../../components/NavigateBtn/NavigateBtn";

const BlogList = () => {
  return (
    <div className="app__blogList app__blogPage section__padding">
      <NavigateBtn />
      <BlogHead />
      <div className="app__blogList-items">
        {blogData.map((post) => (
          <div className="app__blogList-item">
            <Link to="/blog-post" state={{ from: post }}>
              <h1>{post.title}</h1>
              <h3>{post.date}</h3>
              <p className="p__lato">{post.description}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
