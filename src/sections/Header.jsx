import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { AiOutlineMenuUnfold, AiOutlineMenuFold } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="header">
      <div className="title-div">
        <Link to="/" className="link-router">
          Daily News
        </Link>
      </div>
      <div className={`links-div ${menuOpen && "show-links-div"}`}>
        <ul className="category-div">
          <h1>Daily News</h1>
          <NavLink to="/category/india" className="link-router"  activeclassname='active' onClick={() => setMenuOpen(false)}>
            <li>India</li>
          </NavLink>
          <NavLink to="/category/sports" className="link-router"  activeclassname='active' onClick={() => setMenuOpen(false)}>
            <li>Sports</li>
          </NavLink>
          <NavLink to="/category/politics" className="link-router"  activeclassname='active' onClick={() => setMenuOpen(false)}>
            <li>Politics</li>
          </NavLink>
          <NavLink to="/category/business" className="link-router"  activeclassname='active' onClick={() => setMenuOpen(false)}>
            <li>Business</li>
          </NavLink>
          <NavLink to="/category/fashion" className="link-router"  activeclassname='active' onClick={() => setMenuOpen(false)}>
            <li>Fashion</li>
          </NavLink>
          <NavLink to="/category/shareMarket" className="link-router"  activeclassname='active' onClick={() => setMenuOpen(false)}>
            <li>Market</li>
          </NavLink>
          <NavLink to="/category/travel" className="link-router"  activeclassname='active' onClick={() => setMenuOpen(false)}>
            <li>Travel</li>
          </NavLink>
          <NavLink to="/category/culture" className="link-router"  activeclassname='active' onClick={() => setMenuOpen(false)}>
            <li>Culture</li>
          </NavLink>
          <NavLink to="/category/weather" className="link-router"  activeclassname='active' onClick={() => setMenuOpen(false)}>
            <li>Weather</li>
          </NavLink>
        </ul>
        <Link className="link-router" to='/search'  onClick={() => setMenuOpen(false)}>
          <span className="search-icon-div">
            <FaSearch />
          </span>
        </Link>
      </div>
      <div className="menu-close-div" onClick={() => setMenuOpen(!menuOpen)}>
        {!menuOpen ? (
          <span className="menu-div">
            <AiOutlineMenuUnfold />
          </span>
        ) : (
          <span>
            <AiOutlineMenuFold />
          </span>
        )}
      </div>
    </div>
  );
};

export default Header;
