import React from "react";
import FootImg from "../../assets/images/backgrounds/site-footer-bg.jpg";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div
        className="site-footer-bg"
        style={{ backgroundImage: `url(${FootImg})` }}
      ></div>
      <div className="site-footer__top">
        <div className="container">
          <div className="row">
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="100ms"
            >
              <div className="footer-widget__column footer-widget__about">
                <div className="footer-widget__about-logo">
                  <a href="index.html">
                    <img src="assets/images/resources/footer-logo.png" alt="" />
                  </a>
                </div>
                <div className="footer-widget__about-text-box">
                  <p className="footer-widget__about-text">
                    Nulla ultricies justo sit amet ante efficitur, eget pharetra
                    augue efficitur. Vestibulum viverra, dolor sit amet
                    ultricies.
                  </p>
                </div>
                <div className="footer-widget__btn">
                  <a href="donate-now.html">
                    {" "}
                    <span className="fa fa-heart"></span>Donate now
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="200ms"
            >
              <div className="footer-widget__column footer-widget__links clearfix">
                <h3 className="footer-widget__title">Links</h3>
                <ul className="footer-widget__links-list list-unstyled clearfix">
                  <li>
                    <a href="about.html">About us</a>
                  </li>
                  <li>
                    <a href="contact.html">Contact</a>
                  </li>
                  <li>
                    <a href="news.html">Latest News</a>
                  </li>
                  <li>
                    <a href="event-details.html">Recent Events</a>
                  </li>
                  <li>
                    <a href="donation.html">Donations</a>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="300ms"
            >
              <div className="footer-widget__column footer-widget__non-profit clearfix">
                <h3 className="footer-widget__title">Non profit</h3>
                <ul className="footer-widget__non-profit-list list-unstyled clearfix">
                  <li>
                    <a href="donation-details.html">Differently Abled Kids</a>
                  </li>
                  <li>
                    <a href="donation-details.html">Help Child Cancer</a>
                  </li>
                  <li>
                    <a href="donation-details.html">Clean Pure Water</a>
                  </li>
                  <li>
                    <a href="donation-details.html">Give them Education</a>
                  </li>
                  <li>
                    <a href="donation-details.html">Start a Fundraising</a>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="400ms"
            >
              <div className="footer-widget__column footer-widget__contact">
                <h3 className="footer-widget__title">Contact</h3>
                <p className="footer-widget__contact-text">
                  380 Street Kilda Broklyn Road <br /> Melbourne Australia
                </p>
                <ul className="list-unstyled footer-widget__contact-list">
                  <li>
                    <div className="icon">
                      <i className="fa fa-envelope"></i>
                    </div>
                    <div className="text">
                      <p>
                        <a href="mailto:needhelp@company.com ">
                          needhelp@company.com
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="fas fa-phone-alt"></i>
                    </div>
                    <div className="text">
                      <p>
                        <a href="tel:980009630">+ 98 (000) - 9630</a>
                      </p>
                    </div>
                  </li>
                </ul>
                <div className="site-footer__social">
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-facebook"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-pinterest-p"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="site-footer__bottom">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="site-footer__bottom-inner">
                <p className="site-footer__bottom-text">
                  © All Copyright 2022 by <a href="#">Oxpins.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
