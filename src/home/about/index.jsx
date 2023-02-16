import React from "react";
import ShapeImg from "../../assets/images/shapes/about-one-shape-1.png";
import ShapeImg2 from "../../assets/images/shapes/about-one-shape-2.png";
import ShapeImg3Drk from "../../assets/images/shapes/about-one-shape-3-dark.png";
import ShapeImg4 from "../../assets/images/shapes/about-one-shape-4.png";
import AboutImg from "../../assets/images/resources/about-one-img-1.jpg";
import CircleImg from "../../assets/images/icon/curved-circle-icon.png";
import { MdOutlineVolunteerActivism } from "react-icons/md";
import { FaHands } from "react-icons/fa";
const index = () => {
  return (
    <section className="about-one">
      <div className="about-one__shape-box-1">
        <div
          className="about-one__shape-1"
          style={{ backgroundImage: `url(${ShapeImg})` }}
        ></div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <div className="about-one__left">
              <div
                className="about-one__img-box wow slideInLeft"
                data-wow-delay="100ms"
                data-wow-duration="2500ms"
              >
                <div className="about-one__img">
                  <img src={AboutImg} alt="" />
                </div>
                <div className="about-one__img-border"></div>
                <div className="about-one__curved-circle-box">
                  <div className="curved-circle">
                    {/* <span className="curved-circle--item">
                      25 Years Experience oxpins Charity Center
                    </span> */}
                  </div>

                  <div className="about-one__curved-circle-icon">
                    <img src={CircleImg} alt="" />
                  </div>
                </div>
                <div className="about-one__shape-2 zoom-fade">
                  <img src={ShapeImg2} alt="" />
                </div>
                <div className="about-one__shape-3 float-bob-y">
                  <img src={ShapeImg3Drk} alt="" />
                </div>
                <div className="about-one__shape-4 zoominout">
                  <img src={ShapeImg4} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="about-one__right">
              <div className="section-title text-left">
                <span className="section-title__tagline">
                  Welcome to oxpins charity
                </span>
                <h2 className="section-title__title">
                  Helping each other can make world better
                </h2>
              </div>
              <p className="about-one__text">
                We help companies develop powerful corporate social
                responsibility, grantmaking, and employee engagement strategies.
                Our impact is about more than moving money to where it’s needed
                most it’s also about helping nonprofits access information and
                ideas that will help them listen, learn, and grow.{" "}
              </p>
              <div className="about-one__fund">
                <p className="about-one__fund-text">
                  Helped fund <span>24,537</span> Projects in
                  <span>24</span> Countries, Benefiting over <br />{" "}
                  <span>8.2</span> Million people.
                </p>
              </div>
              <ul className="list-unstyled about-one__points">
                <li>
                  <div className="icon">
                    <span className="icon-volunteer">
                      <MdOutlineVolunteerActivism />
                    </span>
                  </div>
                  <div className="text">
                    <h5>
                      <a href="become-volunteer.html">Join our team</a>
                    </h5>
                    <p>Lorem ipsum dolor sit amet not quis mis notted.</p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <span className="icon-solidarity">
                      <FaHands />
                    </span>
                  </div>
                  <div className="text">
                    <h5>
                      <a href="donate-now.html">Start donating</a>
                    </h5>
                    <p>Lorem ipsum dolor sit amet not quis mis notted.</p>
                  </div>
                </li>
              </ul>
              <a href="about.html" className="thm-btn about-one__btn">
                Discover More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
