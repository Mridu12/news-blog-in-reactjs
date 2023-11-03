import React, { useState, useEffect } from 'react';
import './header.css'; // Create a CSS file for your component styles
import { Link } from 'react-router-dom';

const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (prevScrollPos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
      } else {
        document.getElementById("navbar").style.top = "-50px";
      }
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <div>
      <div id="navbar">
        <a href="/Main">Home</a>
        <a href="/News">News</a>
        <a href="/Contact">Contact</a>
      </div>
       {/* <nav>
        <ul>
          <li>
            <Link to="/">Layout</Link>
          </li>
          <li>
            <Link to="/News">News</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav> */}


    </div>
  );
};

export default Header;
