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
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
            corrupti ut voluptatibus est voluptatem exercitationem, cum
            laboriosam in veniam placeat facilis unde, veritatis alias voluptas
            consequatur, dolorem recusandae expedita corporis! Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Tempore a quisquam soluta
            dolor sunt, ut itaque? Facere, autem quidem maxime aut porro
            repellat? Ratione eligendi sequi odio molestiae magnam quisquam.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea quos
            distinctio sint placeat culpa similique eligendi facilis? Voluptas
            recusandae quo modi doloribus. Tempora magnam a quasi illo? Eveniet,
            odio esse. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Nostrum autem dolore, delectus facere aut impedit, sint temporibus
            porro commodi sit culpa consectetur, provident iste doloribus
            exercitationem esse hic alias natus.
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
                  target="_blank"
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
