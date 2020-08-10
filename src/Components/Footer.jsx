import React from "react";
import {
  GithubOutlined,
  LinkedinOutlined,
  UpOutlined,
} from "@ant-design/icons";
const Footer = (props) => {
  return (
    <footer>
      <div className="row">
        <div className="twelve columns">
          <ul className="social-links">
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
        <div id="go-top">
          <a className="smoothscroll" title="Back to Top" href="#home">
            <UpOutlined className="icon-up-open" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
