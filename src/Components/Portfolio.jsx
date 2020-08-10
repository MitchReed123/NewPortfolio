import React from "react";

const Portfolio = (props) => {
  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check out my Work</h1>
          <div
            id="portfolio-wrapper"
            className="bgrid-quarters s-bgrid-thirds cf"
          >
            <div className="columns portoflio-item">
              <div className="item-wrap">
                <a
                  href="https://github.com/MitchReed123/APIProject"
                  title="NASA API"
                  target="_blank"
                >
                  <img
                    alt="title here"
                    src={require("../images/portImages/APIProj.png")}
                    className="itemImages"
                  />
                  <div className="overlay">
                    <div className="portfolio-item-meta">
                      <h5>NASA API</h5>
                      <p>API using NASAs API</p>
                    </div>
                  </div>
                  <div className="link-icon"></div>
                </a>
              </div>
            </div>
            {/* Second Item */}
            <div className="columns portoflio-item">
              <div className="item-wrap">
                <a
                  href="https://github.com/MitchReed123/GigHub"
                  title="NASA API"
                  target="_blank"
                >
                  <img
                    alt="title here"
                    src={require("../images/portImages/GigHubCreate.jpg")}
                    className="itemImages"
                  />
                  <div className="overlay">
                    <div className="portfolio-item-meta">
                      <h5>GigHub App</h5>
                      <p>App to create a share Gigs</p>
                    </div>
                  </div>
                  <div className="link-icon"></div>
                </a>
              </div>
            </div>
            {/* Third Item */}
            <div className="columns portoflio-item">
              <div className="item-wrap">
                <a
                  href="https://lottoclient.herokuapp.com/#/"
                  title="Lotto App"
                  target="_blank"
                >
                  <img
                    alt="Lotto App"
                    src={require("../images/portImages/lottoApp.png")}
                    className="itemImages"
                  />
                  <div className="overlay">
                    <div className="portfolio-item-meta">
                      <h5>Lotto App</h5>
                      <p>
                        Lotto Number Picker Application that also displays
                        lottery locations on google maps
                      </p>
                    </div>
                  </div>
                  <div className="link-icon"></div>
                </a>
              </div>
            </div>
            {/* Fourth Item */}
            <div className="columns portoflio-item">
              <div className="item-wrap">
                <a
                  href="https://mr-ratings.herokuapp.com/"
                  title="Movie Rating"
                  target="_blank"
                >
                  <img
                    alt="Movie Rating"
                    src={require("../images/portImages/moviePortfolio.png")}
                    className="itemImages"
                  />
                  <div className="overlay">
                    <div className="portfolio-item-meta">
                      <h5>Movie Ratings App</h5>
                      <p>
                        A web application that lets the user store their movie
                        ratings and display them on a profile
                      </p>
                    </div>
                  </div>
                  <div className="link-icon"></div>
                </a>
              </div>
            </div>
            {/* Fifth Item */}
            <div className="columns portoflio-item">
              <div className="item-wrap">
                <a
                  href="https://github.com/MitchReed123/Invest-Client"
                  title="Invest Client"
                  target="_blank"
                >
                  <img
                    alt="Invest"
                    src={require("../images/portImages/investPic.png")}
                    className="itemImages"
                  />
                  <div className="overlay">
                    <div className="portfolio-item-meta">
                      <h5>Invest App</h5>
                      <p>
                        A web application to store the amount of various
                        investments you have
                      </p>
                    </div>
                  </div>
                  <div className="link-icon"></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
