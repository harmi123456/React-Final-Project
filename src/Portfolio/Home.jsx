import React, { useState } from 'react'

export default function Home() {
  const [activeSection, setActiveSection] = useState(''); 
  const handleNavigation = (section) => {
    setActiveSection(section);
  };

  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };


  return (
    <div>
      <div className="home">

        <div className="header">

          <div className="bars" onClick={toggleNav}>
            <i class="fa-solid fa-bars-staggered"></i>
          </div>

          <div className={`nav1 ${isNavVisible ? "show" : ""}`}>
            <a href="">PROFILE</a>
            <a href="">SERVICES</a>
            <a href="">ABOUT ME</a>
            <a href="">RESUME</a>
            <a href="">PROJECT</a>
            <a href="">SKILLS</a>
            <a href="">CONTACT</a>
          </div>

          <div className="nav">
            <div className="blue"></div> &nbsp;&nbsp;&nbsp;
            <h1>Harmi Pagada / <span style={{ fontSize: '20px', fontWeight: "lighter" }} >DEVELOPER</span> </h1>
          </div>
          <div className="nav" id='nav'>
            <a href="/profile">PROFILE</a>
            <a href="/services">SERVICES</a>
            <a href="/aboutme">ABOUT ME</a>
            <a href="/project">PROJECT</a>
            <a href="">RESUME</a>
            <a href="/skill">SKILLS</a>
            <a href="/contact">CONTACT</a>
          </div>
        </div>

      </div>
    </div>
  )
}
