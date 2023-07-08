import React from "react";

const About = () => {
  return (
    <div className="section-full p-t80 p-b50 bg-gray">
      <div className="about-section-one">
        <div className="container">
          <div className="section-content">
            <div className="row justify-content-center d-flex">
              <div className="col-lg-6 col-md-12 m-b30">
                <div className="about-drone-one">
                  <div className="about-drone-one-media">
                    <img
                      src="images/about-drone/Untitled-1.png"
                      alt=""
                      className="slide-top"
                    />
                  </div>
                  <div className="about-drone-one-info">
                    <span className="outline-title">HD 4K</span>
                    <strong>Resolution!</strong>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-md-12 m-b30">
                <div className="about-section-one-right">
                  {/* <!-- TITLE START--> */}
                  <div className="left wt-small-separator-outer">
                    <div className="wt-small-separator site-text-primary">
                      <div className="sep-leaf-left"></div>
                      <div>About</div>
                      <div className="sep-leaf-right"></div>
                    </div>
                    <h2>
                      Specializing in Drone Services, and Aerial Photography
                    </h2>
                    <p>
                      There are many variations of passages of lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly.
                    </p>
                  </div>
                  {/* <!-- TITLE END-->   */}
                  <ul className="site-list-style-one icon-style">
                    <li>
                      <i className="flaticon-drone-7"></i>Mobile Device
                      Supported
                    </li>
                    <li>
                      <i className="flaticon-remote-control-1"></i>Easy
                      integrative control
                    </li>
                    <li>
                      <i className="flaticon-control"></i>Customized Commands
                    </li>
                  </ul>

                  <a
                    href="about-1.html"
                    className="site-button site-btn-effect"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
