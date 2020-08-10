import React from "react";
import "../App.css";
const Testimonials = (props) => {
  return (
    <section id="testimonials">
      <div className="text-container">
        <div className="row">
          <div className="two columns header-col">
            <h1>
              <span>Testimonials</span>
            </h1>
          </div>

          <div className="ten columns flex-container">
            <ul>
              <blockquote>
                <p>
                  Mitch is a graduate of the Eleven Fifty Academy's Accelerated
                  Learning Program, where I am responsible for the student and
                  instructor experience. From my perspective during the course,
                  Mitch is a growing developer who is quick to grasp concepts.
                  Mitch will be an asset to any team!
                </p>
                <cite>Jenn Williams</cite>
              </blockquote>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
