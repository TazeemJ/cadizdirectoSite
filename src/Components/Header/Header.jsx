import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import headerBackImg from "../../Images/HeaderBackImage.jpg";

const Header = () => {
  return (
    <>
      <header
        className="site-header"
        id="masthead"
        style={{
          backgroundImage: `url(${headerBackImg})`,
        }}
      >
        <div className="inside-header"></div>
      </header>
      <nav
        className="main-navigation nav-align-center has-menu-bar-items sub-menu-right"
        id="site-navigation"
        aria-label="Principal"
      >
        <div className="inside-navigation">
          {/* Uncomment and handle the menu button for mobile view if necessary */}
          {/* <button
            className="menu-toggle"
            aria-controls="primary-menu"
            aria-expanded="false"
          >
            <span className="gp-icon icon-menu-bars">
              <svg
                viewBox="0 0 512 512"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
              >
                <path d="M0 96c0-13.255 10.745-24 24-24h464c13.255 0 24 10.745 24 24s-10.745 24-24 24H24c-13.255 0-24-10.745-24-24zm0 160c0-13.255 10.745-24 24-24h464c13.255 0 24 10.745 24 24s-10.745 24-24 24H24c-13.255 0-24-10.745-24-24zm0 160c0-13.255 10.745-24 24-24h464c13.255 0 24 10.745 24 24s-10.745 24-24 24H24c-13.255 0-24-10.745-24-24z"></path>
              </svg>
              <svg
                viewBox="0 0 512 512"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
              >
                <path d="M71.029 71.029c9.373-9.372 24.569-9.372 33.942 0L256 222.059l151.029-151.03c9.373-9.372 24.569-9.372 33.942 0 9.372 9.373 9.372 24.569 0 33.942L289.941 256l151.03 151.029c9.372 9.373 9.372 24.569 0 33.942-9.373 9.372-24.569 9.372-33.942 0L256 289.941l-151.029 151.03c-9.373 9.372-24.569 9.372-33.942 0-9.372-9.373-9.372-24.569 0-33.942L222.059 256 71.029 104.971c-9.372-9.373-9.372-24.569 0-33.942z"></path>
              </svg>
            </span>
            <span className="mobile-menu">Menú</span>
          </button> */}
          <div id="primary-menu" className="main-nav">
            <ul id="menu-principal" className="menu sf-menu">
              <li className="menu-item">
                <Link to="/">Cádiz</Link>
              </li>
              <li className="menu-item">
                <Link to="/noticias-chiclana">Chiclana</Link>
              </li>
              <li className="menu-item">
                <Link to="/noticias-san-fernando">San Fernando</Link>
              </li>
              <li className="menu-item current-menu-item">
                <Link to="/carnaval" aria-current="page">
                  Carnaval
                </Link>
              </li>
              <li className="menu-item">
                <Link to="/noticias-cadiz-club-futbol">Cádiz CF</Link>
              </li>
            </ul>
          </div>
          {/* <div className="menu-bar-items">
            <div className="gb-container gb-container-1a706be9">
              <a
                className="gb-button gb-button-db7a83ca"
                href="https://www.facebook.com/CadizDirecto"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="gb-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 496 512"
                    width="1.5em"
                    height="1.5em"
                    aria-hidden="true"
                  >
                    <path
                      d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>
              </a>
              <a
                className="gb-button gb-button-edd6364a"
                href="https://twitter.com/CadizDirecto"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="gb-icon">
                  <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z"></path>
                  </svg>
                </span>
              </a>
              <a
                className="gb-button gb-button-f5cc4564"
                href="https://www.youtube.com/@cadizdirecto"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="gb-icon">
                  <svg viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"></path>
                  </svg>
                </span>
              </a>
            </div>
          </div> */}
        </div>
      </nav>
    </>
  );
};

export default Header;
