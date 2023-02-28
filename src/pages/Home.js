import React from 'react'
import Header from '../container/Header/Header'
import AboutMe from '../container/AboutMe/AboutMe'
import Separator from '../container/Separator/Separator'
import Blog from '../container/Blog/Blog'
import Services from '../container/Services/Services'
import Contact from '../container/Contact/Contact'
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <div id="home" className="app__home">
      <Navbar />
      <Header />
      <Services />
      <AboutMe />
      <Separator />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home