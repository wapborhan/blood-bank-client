import React from "react";
import Causes1 from "../../assets/images/resources/causes-1-1.jpg";
import Causes2 from "../../assets/images/resources/causes-1-2.jpg";
import Causes3 from "../../assets/images/resources/causes-1-3.jpg";

const index = () => {
  return (
    <section className="causes-one">
      <div className="container">
        <div className="section-title text-center">
          <span className="section-title__tagline">Help & donate us now</span>
          <h2 className="section-title__title">
            Find the popular cause <br /> and donate them
          </h2>
        </div>
        <div className="row">
          {/* <!--Causes One Single Start--> */}
          <div
            className="col-xl-4 col-lg-4 wow fadeInUp"
            data-wow-delay="100ms"
          >
            <div className="causes-one__single">
              <div className="causes-one__img">
                <img src={Causes1} alt="" />
                <div className="causes-one__cat">
                  <p>Education</p>
                </div>
              </div>
              <div className="causes-one__content">
                <h3 className="causes-one__title">
                  <a href="donation-details.html">
                    Let’s education for children get good life
                  </a>
                </h3>
                <p className="causes-one__text">
                  There are many of lorem, but majori have suffered alteration
                  in some form.
                </p>
                <div className="causes-one__progress">
                  <div
                    className="causes-one__progress-shape"
                    // style="background-image: url(assets/images/shapes/causes-one-progress-shape-1.png);"
                  ></div>
                  <div className="bar">
                    <div className="bar-inner count-bar" data-percent="36%">
                      <div className="count-text">36%</div>
                    </div>
                  </div>
                  <div className="causes-one__goals">
                    <p>
                      <span>$25,270</span> Raised
                    </p>
                    <p>
                      <span>$30,000</span> Goal
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!--Causes One Single End--> */}
          {/* <!--Causes One Single Start--> */}
          <div
            className="col-xl-4 col-lg-4 wow fadeInUp"
            data-wow-delay="200ms"
          >
            <div className="causes-one__single">
              <div className="causes-one__img">
                <img src={Causes2} alt="" />
                <div className="causes-one__cat">
                  <p>Medical</p>
                </div>
              </div>
              <div className="causes-one__content">
                <h3 className="causes-one__title">
                  <a href="donation-details.html">
                    It is a long established fact that a reader
                  </a>
                </h3>
                <p className="causes-one__text">
                  There are many of lorem, but majori have suffered alteration
                  in some form.
                </p>
                <div className="causes-one__progress">
                  <div
                    className="causes-one__progress-shape"
                    // style="background-image: url(assets/images/shapes/causes-one-progress-shape-1.png);"
                  ></div>
                  <div className="bar">
                    <div className="bar-inner count-bar" data-percent="36%">
                      <div className="count-text">36%</div>
                    </div>
                  </div>
                  <div className="causes-one__goals">
                    <p>
                      <span>$25,270</span> Raised
                    </p>
                    <p>
                      <span>$30,000</span> Goal
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!--Causes One Single End--> */}
          {/* <!--Causes One Single Start--> */}
          <div
            className="col-xl-4 col-lg-4 wow fadeInUp"
            data-wow-delay="300ms"
          >
            <div className="causes-one__single">
              <div className="causes-one__img">
                <img src={Causes3} alt="" />
                <div className="causes-one__cat">
                  <p>Food</p>
                </div>
              </div>
              <div className="causes-one__content">
                <h3 className="causes-one__title">
                  <a href="donation-details.html">
                    There are many variations of passages
                  </a>
                </h3>
                <p className="causes-one__text">
                  There are many of lorem, but majori have suffered alteration
                  in some form.
                </p>
                <div className="causes-one__progress">
                  <div
                    className="causes-one__progress-shape"
                    // style="background-image: url(assets/images/shapes/causes-one-progress-shape-1.png);"
                  ></div>
                  <div className="bar">
                    <div className="bar-inner count-bar" data-percent="36%">
                      <div className="count-text">36%</div>
                    </div>
                  </div>
                  <div className="causes-one__goals">
                    <p>
                      <span>$25,270</span> Raised
                    </p>
                    <p>
                      <span>$30,000</span> Goal
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!--Causes One Single End--> */}
        </div>
      </div>
    </section>
  );
};

export default index;
