import React from "react";

const Resume = (props) => {
  return (
    <section id="resume">
      <div className="row education">
        <div className="three columns header-col">
          <h1>
            <span>Education</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">
              <div>
                <h3>Eleven Fifty Academy</h3>
                <p className="info">
                  Red Badge Certification<span>&bull;</span>
                  <em className="date">07-27-2020</em>
                </p>
                <p>
                  The Eleven Fifty Web Development course was a 3 month all day
                  everyday course where you learn a whole new language and how
                  to implement it in various different ways. The Web
                  Developement course I took tought you JS, ReactJS and TSX
                </p>
              </div>
              <div>
                <h3>Eleven Fifty Academy</h3>
                <p className="info">
                  Red Badge Certification<span>&bull;</span>
                  <em className="date">10-27-2016</em>
                </p>
                <p>
                  The Eleven Fifty Software Development course was a 3 month all
                  day everyday course where learn a whole language and how to
                  implement it in different ways. The Software Developement
                  course I took used .NET, C#, SQL, HTML and CSS.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row work">
        <div className="three columns header-col">
          <h1>
            <span>Work</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <div>
            <h3>Vapor Madness</h3>
            <p className="info">
              Sales/Ordering Manager<span>&bull;</span>{" "}
              <em className="date">2.5 years</em>{" "}
            </p>
            <p>
              I worked as a Retail Salesmen and Ordering Manager achieving sales
              growth and expansion goals within first year of employment.
            </p>
          </div>
          <div>
            <h3>Eleven Fifty Consulting</h3>
            <p className="info">
              Data Visualization Team Member<span>&bull;</span>
              <em className="date">6 months</em>
            </p>
            <p>
              While working at Vectren Gas/Electric I Collaborated with the Data
              Visualization team using OBIEE to enhance data retrieval and
              analysis. Performed Data Visualization and Analysis utilizing a
              big data environment.
            </p>
          </div>
        </div>
      </div>

      <div className="row skill">
        <div className="three columns header-col">
          <h1>
            <span>Skills</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <p>Here is a list of some of my Skills</p>

          <div className="bars">
            <ul className="skills">
              <li>
                <span style={{ width: "75%" }} className="bar-expand"></span>
                <em>GIT</em>
              </li>
              <li>
                <span style={{ width: "75%" }} className="bar-expand"></span>
                <em>HTML</em>
              </li>
              <li>
                <span style={{ width: "40%" }} className="bar-expand"></span>
                <em>CSS</em>
              </li>
              <li>
                <span style={{ width: "90%" }} className="bar-expand"></span>
                <em>React</em>
              </li>
              <li>
                <span style={{ width: "80%" }} className="bar-expand"></span>
                <em>TSX</em>
              </li>
              <li>
                <span style={{ width: "60%" }} className="bar-expand"></span>
                <em>C#</em>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
