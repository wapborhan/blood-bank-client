import React from "react";

const index = () => {
  return (
    <section className="counter-one">
      <div className="container">
        <div className="counter-one__inner">
          <div
            className="counter-one-bg"
            data-jarallax
            data-speed="0.2"
            data-imgPosition="50% 0%"
            // style="background-image: url(assets/images/backgrounds/counter-one-bg.jpg);"
          ></div>
          <ul className="list-unstyled counter-one__list">
            <li className="counter-one__single">
              <div className="counter-one__count-box">
                <h3 className="odometer" data-count="70">
                  00
                </h3>
                <span className="counter-one__letter">m</span>
              </div>
              <p className="counter-one__text">Total donation</p>
            </li>
            <li className="counter-one__single">
              <div className="counter-one__count-box">
                <h3 className="odometer" data-count="48">
                  00
                </h3>
                <span className="counter-one__letter">k</span>
              </div>
              <p className="counter-one__text">Projects funded</p>
            </li>
            <li className="counter-one__single">
              <div className="counter-one__count-box">
                <h3 className="odometer" data-count="38">
                  00
                </h3>
                <span className="counter-one__letter">%</span>
              </div>
              <p className="counter-one__text">Kids need help</p>
            </li>
            <li className="counter-one__single">
              <div className="counter-one__count-box">
                <h3 className="odometer" data-count="230">
                  00
                </h3>
                <span className="counter-one__letter"></span>
              </div>
              <p className="counter-one__text">Our volunteers</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default index;
