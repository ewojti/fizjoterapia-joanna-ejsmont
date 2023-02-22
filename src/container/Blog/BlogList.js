import React from "react";
import blogData from "../../constants/blogData";
import images from "../../constants/images";
import "./BlogList.scss";

const BlogList = () => {
  return (
    <div className="app__bloglist section__padding">
      <div className="app__bloglist-title">
        <div className="app__bloglist-title-logo">
          <img src={images.logo_footer} alt=""></img>
        </div>
        <hr className="horizontal-line"></hr>
        <h1 className="app__heading-h1">BLOG</h1>
      </div>
      <div className="app__bloglist-author">
        <div className="app__bloglist-author-img">
          <img src={images.blog} alt="" />
        </div>
        <div className="app__bloglist-author-name">
          <h2>Joanna Ejsmont</h2>
          <p>Magister Fizjoterapii</p>
        </div>
      </div>
      <div className="app__bloglist-items">
        {blogData.map((post) => (
          <div className="app__bloglist-item">
            <h1>{post.title}</h1>
            <h3>{post.date}</h3>
            <p className="p__lato">{post.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
