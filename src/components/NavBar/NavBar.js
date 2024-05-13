import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const NavBar = () => {
  return (
    <>
      <header>
        <input type="checkbox" name="" id="chk1" />
        <div className="logo">
          <div className="name-container">
            <div className="anime">Anime</div>
            <div className="name">OneTap</div>
          </div>
        </div>
        <div className="search-box">
          {/* <form>
            <input type="text" name="search" id="srch" placeholder="Search"   />
            <button type="submit">
              <i className="fa fa-search"></i>
            </button>
          </form> */}
        </div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/subbed-anime">Subbed Anime</Link>
          </li>
          <li>
            <Link to="/dubbed-anime">Dubbed Anime</Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
          <li>
            <Link to="/ova">OVA</Link>
          </li>
        </ul>
        <div className="menu">
          <label htmlFor="chk1">
            <i className="fa fa-bars"></i>
          </label>
        </div>
      </header>
    </>
  );
};

export default NavBar;
