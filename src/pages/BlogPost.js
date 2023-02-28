import React from 'react'
import { useLocation } from "react-router-dom";

const BlogPost = () => {
      const location = useLocation();
      const { from } = location.state;
  return (
    <div id="blog-post" className='section__padding'>
      <h1 className="app__heading-h1">{from.title}</h1>
      <h3 className="app__heading-h3">{from.description}</h3>
      <p className="p__lato">{from.date}</p>
      <p className="p__lato">{from.text}</p>
    </div>
  );
}

export default BlogPost