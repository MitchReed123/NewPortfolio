import React from "react";
import {
  GithubOutlined,
  LinkedinOutlined,
  DownOutlined,
} from "@ant-design/icons";
const Header = (props) => {
  return (
    <header id="home">
      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show Navigation">
          Show Navigation
        </a>
        <a className="mobile-btn" href="#home" title="Hide Navigation">
          Hide Navigation
        </a>

        <ul id="nav" className="nav">
          <li className="current">
            <a className="smoothscroll" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#resume">
              Resume
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#portfolio">
              Works
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#testimonials">
              Testimonials
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <div className="row banner">
        <div className="banner-text">
          <h1 className="responsive-headline">I'm Mitchell Reed.</h1>
          <h3>
            I'm a Indianapolis based <span>Developer</span>. Who works in
            <span style={{ color: "#5dbcd2" }}> ReactJS</span>,
            <span style={{ color: "#00273f" }}>TypeScript</span> and
            <span style={{ color: "	#a178db" }}>C#</span>.
          </h3>
          <hr />
          <ul className="social">
            <a
              href="https://github.com/mitchReed123?tab=repositories"
              target="_blank"
            >
              <GithubOutlined />
            </a>
            <a
              href="https://www.linkedin.com/in/mitchell-reed-7923a9aa/"
              target="_blank"
            >
              <LinkedinOutlined />
            </a>
          </ul>
        </div>
      </div>

      <p className="scrolldown">
        <a className="smoothscroll" href="#about">
          <DownOutlined className="icon-down-circle" />
        </a>
      </p>
    </header>
  );
};

export default Header;
