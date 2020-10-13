import React from "react";
import "../App.css";
import { DownloadOutlined, LinkOutlined } from "@ant-design/icons";
const About = (props) => {
  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          <img
            className="profile-pic"
            src={require("../images/me.jpg")}
            alt="Mitchell Reed"
          />
        </div>
        <div className="nine columns main-col">
          <h2>About Me</h2>

          <p>
            Hello, I'm a Indianapolis based developer using React/TSX and C#.
          </p>
          <div className="row">
            <div className="columns contact-details">
              <h2>Contact Details</h2>
              <p className="address">
                <span>Mitchell Reed</span>
                <br />
                <span>317-605-7387</span>
                <br />
                <span>reed.mitch@live.com</span>
              </p>
            </div>
            <div className="columns download">
              <p>
                <a
                  href="https://drive.google.com/file/d/12J975PMDuEBR7fg2541ZW7oRS2v6pjsl/view?ths=true"
                  className="button"
                >
                  <LinkOutlined className="fa fa-download" />
                  My Resume
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
