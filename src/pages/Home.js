import React from 'react'

import Header from '../container/Header/Header'
import AboutMe from '../container/AboutMe/AboutMe'
import Blog from '../container/Blog/Blog'
import Services from '../container/Services/Services'
import Contact from '../container/Contact/Contact'

const Home = () => {
  return (
    <div>
      <Header />
      <AboutMe />
      <Services />
      <Blog />
      <Contact />
    </div>
  );
}

export default Home