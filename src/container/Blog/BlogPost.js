import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import BlogHead from "../../components/BlogHead.js/BlogHead";
import NavigateBtn from "../../components/NavigateBtn/NavigateBtn";

const BlogPost = () => {
  const location = useLocation();
  const { from } = location.state;
  // 	const navigate = useNavigate();
  // const goBack = () => {
  // 	navigate(-1);
  // }
  return (
    <div className="app__blogPage section__padding">
      {/* <button className="custom__button" onClick={goBack}>
        wróć
      </button> */}
      <NavigateBtn />
      <BlogHead />
      <h1 className="app__heading-h1">{from.title}</h1>
      <h3 className="app__heading-h3">{from.description}</h3>
      <p className="p__lato">{from.date}</p>
      <p className="p__lato">{from.text}</p>
    </div>
  );
};

export default BlogPost;
