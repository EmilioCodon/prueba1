/* import React from "react";
import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";
import { FaBars, FaTimes , FaSignInAlt} from "react-icons/fa";
import { useHistory } from "react-router-dom";
import { useAuth } from "../utils/AuthContex";


function Navbar() {
  const history = useHistory();
  const { user, logoutUser } = useAuth();

  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  useEffect(() => {
    if (user) {
      history.push("/profile");
    }
  }, [user, history]);

  return (

    <header>
      {user ? (
        <div className="barra">
          <div className="logo">
          <h3>Emilio<span class="highlight">´s</span> Portfolio</h3>
            <button className="out" onClick={logoutUser}>
              <FaSignInAlt />
            </button>
          </div>

          <nav ref={navRef}>
            <Link  to="/">Home</Link>

            <Link to="/profile">Profile</Link>
            <Link to="/mywork" >My work</Link>
            <Link to="/schooling">Schooling</Link>
            <Link to="/news">News</Link>
            <Link to="/guestbook">Guest Book</Link>
            <button className="nav-btn nav-close-btn" onClick={showNavbar}>
              <FaTimes />
            </button>
          </nav>

          <button className="nav-btn" onClick={showNavbar}>
            <FaBars />
          </button>
        </div>
      ) : (
        <div className="barra">
          <h3>Emilio<span class="highlight">´s</span> Portfolio</h3>
          <nav ref={navRef}>
            <Link  to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/mywork">My work</Link>
            <Link to="/schooling">Schooling</Link>
            <Link to="/news">News</Link>
            <button className="nav-btn nav-close-btn" onClick={showNavbar}>
              <FaTimes />
            </button>
          </nav>
          <button className="nav-btn" onClick={showNavbar}>
            <FaBars />
          </button>
        </div>
      )}
    </header>
  );
}

export default Navbar;
 */


import React, { useRef, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FaBars, FaTimes, FaSignInAlt } from "react-icons/fa";
import { useAuth } from "../utils/AuthContex";

function Navbar() {
  const history = useHistory();
  const { user, logoutUser } = useAuth();

  const navRef = useRef();

  const [isNavOpen, setIsNavOpen] = useState(false);

  const showNavbar = () => {
    setIsNavOpen(true);
  };

  const hideNavbar = () => {
    setIsNavOpen(false);
  };

  const handleLinkClick = () => {
    hideNavbar();
  };

  useEffect(() => {
    if (user) {
      history.push("/profile");
    }
  }, [user, history]);

  return (
    <header>
      {user ? (
        <div className="barra">
          <div className="logo">
          <h3>
          
          Emilio<span className="highlight"><Link className="highlight" to="/" onClick={handleLinkClick}>´s</Link></span> Portfolio
          
        </h3>
            <button className="out" onClick={logoutUser}>
              <FaSignInAlt />
            </button>
          </div>

          <nav ref={navRef} className={isNavOpen ? "responsive_nav" : ""}>
            <Link to="/" onClick={handleLinkClick}>
              Home
            </Link>
            <Link to="/profile" onClick={handleLinkClick}>
              Profile
            </Link>
            <Link to="/mywork" onClick={handleLinkClick}>
              My work
            </Link>
            <Link to="/schooling" onClick={handleLinkClick}>
              Schooling
            </Link>
            <Link to="/news" onClick={handleLinkClick}>
              News
            </Link>
            <Link to="/guestbook" onClick={handleLinkClick}>
              Guest Book
            </Link>
            <button className="nav-btn nav-close-btn" onClick={hideNavbar}>
              <FaTimes />
            </button>
          </nav>

          <button className="nav-btn" onClick={showNavbar}>
            <FaBars />
          </button>
        </div>
      ) : (
        <div className="barra">
           
          <h3>
          
            Emilio<span className="highlight"><Link className="highlight" to="/" onClick={handleLinkClick}>´s</Link></span> Portfolio
            
          </h3>
          
          <nav ref={navRef} className={isNavOpen ? "responsive_nav" : ""}>
            <Link to="/" onClick={handleLinkClick}>
              Home
            </Link>
            <Link to="/login" onClick={handleLinkClick}>
              Login
            </Link>
            <Link to="/mywork" onClick={handleLinkClick}>
              My work
            </Link>
            <Link to="/schooling" onClick={handleLinkClick}>
              Schooling
            </Link>
            <Link to="/news" onClick={handleLinkClick}>
              News
            </Link>
            <button className="nav-btn nav-close-btn" onClick={hideNavbar}>
              <FaTimes />
            </button>
          </nav>
          <button className="nav-btn" onClick={showNavbar}>
            <FaBars />
          </button>
        </div>
      )}
    </header>
  );
}

export default Navbar;
