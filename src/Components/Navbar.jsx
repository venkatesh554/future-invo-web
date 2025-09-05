import React, { useState, useEffect } from 'react';
import "./Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import icon from "./icon.png";

export default function Navbar() {
  const [fix, setFix] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 8092) {
      setFix(true);
    } else {
      setFix(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={fix ? 'navbarfixed' : 'navbar'}>
      <img src={icon} alt="Logo" className="logo" />

      <ul>
        <li><Link to="/" id="home">Home</Link></li>
        <li><Link to="/About">About</Link></li>
        <li><Link to="/Services">Services</Link></li>
        <li><Link to="/Projects">Projects</Link></li>
        <li><Link to="/Blogs">Blogs</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
      </ul>
       <FontAwesomeIcon icon={faBars} id="bar" />
    </div>
  );
}
