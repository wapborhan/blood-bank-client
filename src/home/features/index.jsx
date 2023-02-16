import React from "react";

const index = () => {
  return (
    <section className="feature-one">
      <div className="container">
        <div className="row">
          <div
            className="col-xl-6 col-lg-6  wow slideInLeft"
            data-wow-delay="100ms"
            data-wow-duration="2500ms"
          >
            <div className="feature-one__single">
              <div
                className="feature-one__single-bg"
                // style="background-image: url(assets/images/shapes/feature-one-shape-1.png);"
              ></div>
              <div className="feature-one__top">
                <div className="feature-one__top-inner">
                  <div className="feature-one__top-icon">
                    <span className="icon-help"></span>
                  </div>
                  <div className="feature-one__top-title-box">
                    <h3 className="feature-one__top-title">
                      <a href="donation-details.html">
                        Join us & become <br /> a volunteer
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
              <p className="feature-one__text">
                Mauris feugiat at orci ac congue. mauris ut <br /> lacus quis
                proin diam.
              </p>
              <ul className="list-unstyled feature-one__point">
                <li>
                  <div className="icon">
                    <span className="fa fa-check"></span>
                  </div>
                  <div className="text">
                    <p>Sed et nulla a nunc finibus eleifend.</p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <span className="fa fa-check"></span>
                  </div>
                  <div className="text">
                    <p>Mauris nulla nisl, pellentesque vetae.</p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <span className="fa fa-check"></span>
                  </div>
                  <div className="text">
                    <p>Proin quis aliquam nisi.</p>
                  </div>
                </li>
              </ul>
              <a
                href="donation-details.html"
                className="thm-btn feature-one__btn"
              >
                View details
              </a>
            </div>
          </div>
          <div
            className="col-xl-6 col-lg-6  wow slideInRight"
            data-wow-delay="100ms"
            data-wow-duration="2500ms"
          >
            <div className="feature-one__single feature-one__single--two">
              <div
                className="feature-one__single-bg"
                // style="background-image: url(assets/images/shapes/feature-one-shape-1.png);"
              ></div>
              <div className="feature-one__top">
                <div className="feature-one__top-inner">
                  <div className="feature-one__top-icon feature-one__top-icon--two">
                    <span className="icon-gift-box"></span>
                  </div>
                  <div className="feature-one__top-title-box">
                    <h3 className="feature-one__top-title">
                      <a href="about.html">
                        Send a gift for <br />
                        childrens
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
              <p className="feature-one__text">
                Mauris feugiat at orci ac congue. mauris ut <br /> lacus quis
                proin diam.
              </p>
              <ul className="list-unstyled feature-one__point">
                <li>
                  <div className="icon">
                    <span className="fa fa-check"></span>
                  </div>
                  <div className="text">
                    <p>Sed et nulla a nunc finibus eleifend.</p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <span className="fa fa-check"></span>
                  </div>
                  <div className="text">
                    <p>Mauris nulla nisl, pellentesque vetae.</p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <span className="fa fa-check"></span>
                  </div>
                  <div className="text">
                    <p>Proin quis aliquam nisi.</p>
                  </div>
                </li>
              </ul>
              <a href="about.html" className="thm-btn feature-one__btn">
                View details
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
