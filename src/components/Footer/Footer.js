import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const Footer = () => (
  <>
    <footer>
      <div className="top">
        <div className="pages">
          <ul>
            <h3>OneTap</h3>
            <li className="list">
              <Link to="/">Home</Link>
            </li>
            <li className="list">
              <Link to="/subbed-anime">Subbed Anime</Link>
            </li>
            <li className="list">
              <Link to="/dubbed-anime">Dubbed Anime</Link>
            </li>
            <li className="list">
              <Link to="/movies">Movies</Link>
            </li>
            <li className="list">
              <Link to="/ova">OVA</Link>
            </li>
          </ul>

          <ul>
            <h3>categories</h3>
            <li className="list">
              <Link to="/most-favorite">Most Favorite</Link>
            </li>
            <li className="list">
              <Link to="/most-popular">Most Popular</Link>
            </li>
            <li className="list">
              <Link to="/recently-updated">Recently Updated</Link>
            </li>
            <li className="list">
              <Link to="/recently-added">Recently Added</Link>
            </li>
          </ul>

          <ul>
            <li className="list" style={{ marginTop: "25px" }}>
              <Link to="/tv">TV</Link>
            </li>

            <li className="list">
              <Link to="/ona">ONA</Link>
            </li>

            <li className="list">
              <Link to="/special">Special</Link>
            </li>

            <li className="list">
              <Link to="/completed">Completed</Link>
            </li>
          </ul>

          <ul>
            <h3>Who We Are</h3>
            <li className="list">
              <Link to="/about">About Us</Link>
            </li>
            <li className="list">
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="newsletter">
          <h3>Coming Soon...</h3>
          <button className="glowing-btn">
            <span className="glowing-txt">
              L<span className="faulty-letter">O</span>GIN!
            </span>
          </button>
        </div>
      </div>
      <div className="social">
        <i className="fab fa-facebook"></i>
        <i className="fab fa-instagram"></i>
        <i className="fab fa-youtube"></i>
      </div>
      <div className="info">
        <div className="legal">
          <a href="/" className="item">
            Terms & Conditions
          </a>
          <a href="/" className="item">
            Privacy Policy
          </a>
        </div>
        <div className="copyright">2024 Copyright &copy; OneTap</div>
      </div>
    </footer>
  </>
);

export default Footer;
