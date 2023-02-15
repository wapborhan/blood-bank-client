import React from "react";

export default function NavBar() {
  return (
    <header className="main-header">
      <nav className="main-menu">
        <div className="main-menu__wrapper">
          <div className="main-menu__wrapper-inner">
            <div className="main-menu__left">
              <div className="main-menu__logo text-white">
                <a href="#">
                  <img src="assets/images/resources/logo-2.png" alt="" />
                  SR Blood Bank
                </a>
              </div>
              <div className="main-menu__shape-1 float-bob-x">
                <img src="assets/images/shapes/main-menu-shape-1.png" alt="" />
              </div>
            </div>
            <div className="main-menu__right">
              <div className="main-menu__right-top">
                <div className="main-menu__right-top-left">
                  <div className="main-menu__volunteers">
                    <div className="main-menu__volunteers-icon">
                      <img
                        src="assets/images/icon/main-menu-heart-icon.png"
                        alt=""
                      />
                    </div>
                    <div className="main-menu__volunteers-text-box">
                      <p className="main-menu__volunteers-text">
                        <a href="become-volunteer.html">
                          Become a<span>volunteers</span>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="main-menu__right-top-right">
                  <div className="main-menu__right-top-address">
                    <ul className="list-unstyled main-menu__right-top-address-list">
                      <li>
                        <div className="icon">
                          <span className="icon-phone-call"></span>
                        </div>
                        <div className="content">
                          <p>Helpline</p>
                          <h5>
                            <a href="tel:980009630">+ 98 (000) - 9630</a>
                          </h5>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-message"></span>
                        </div>
                        <div className="content">
                          <p>Send email</p>
                          <h5>
                            <a href="mailto:needhelp@company.com">
                              needhelp@company.com
                            </a>
                          </h5>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-location"></span>
                        </div>
                        <div className="content">
                          <p>380 St Kilda Road</p>
                          <h5>Melbourne, Australia</h5>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="main-menu__right-top-social">
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
              <div className="main-menu__right-bottom">
                <div className="main-menu__main-menu-box">
                  <a href="#" className="mobile-nav__toggler">
                    <i className="fa fa-bars"></i>
                  </a>
                  <ul className="main-menu__list">
                    <li className="dropdown current megamenu">
                      <a href="index.html">Home </a>
                      <ul>
                        <li>
                          <section className="home-showcase megamenu-left">
                            <div className="container">
                              <div className="home-showcase__inner">
                                <div className="row">
                                  <div className="col-lg-3">
                                    <div className="home-showcase__item">
                                      <div className="home-showcase__image">
                                        <img
                                          src="assets/images/home-showcase/home-showcase-1-1.jpg"
                                          alt=""
                                        />
                                        <div className="home-showcase__buttons">
                                          <a
                                            href="index.html"
                                            className="thm-btn home-showcase__buttons__item"
                                          >
                                            Multi Page
                                          </a>
                                          <a
                                            href="index-one-page.html"
                                            className="thm-btn home-showcase__buttons__item"
                                          >
                                            One Page
                                          </a>
                                        </div>
                                      </div>
                                      <h3 className="home-showcase__title">
                                        Home page 01
                                      </h3>
                                    </div>
                                  </div>
                                  <div className="col-lg-3">
                                    <div className="home-showcase__item">
                                      <div className="home-showcase__image">
                                        <img
                                          src="assets/images/home-showcase/home-showcase-1-2.jpg"
                                          alt=""
                                        />
                                        <div className="home-showcase__buttons">
                                          <a
                                            href="index2.html"
                                            className="thm-btn home-showcase__buttons__item"
                                          >
                                            Multi Page
                                          </a>
                                          <a
                                            href="index2-one-page.html"
                                            className="thm-btn home-showcase__buttons__item"
                                          >
                                            One Page
                                          </a>
                                        </div>
                                      </div>
                                      <h3 className="home-showcase__title">
                                        Home page 02
                                      </h3>
                                    </div>
                                  </div>
                                  <div className="col-lg-3">
                                    <div className="home-showcase__item">
                                      <div className="home-showcase__image">
                                        <img
                                          src="assets/images/home-showcase/home-showcase-1-3.jpg"
                                          alt=""
                                        />
                                        <div className="home-showcase__buttons">
                                          <a
                                            href="index3.html"
                                            className="thm-btn home-showcase__buttons__item"
                                          >
                                            Multi Page
                                          </a>
                                          <a
                                            href="index3-one-page.html"
                                            className="thm-btn home-showcase__buttons__item"
                                          >
                                            One Page
                                          </a>
                                        </div>
                                      </div>
                                      <h3 className="home-showcase__title">
                                        Home page 03
                                      </h3>
                                    </div>
                                  </div>
                                  <div className="col-lg-3">
                                    <div className="home-showcase__item">
                                      <div className="home-showcase__image">
                                        <img
                                          src="assets/images/home-showcase/home-showcase-1-4.jpg"
                                          alt=""
                                        />
                                        <div className="home-showcase__buttons">
                                          <a
                                            href="index-dark.html"
                                            className="thm-btn home-showcase__buttons__item"
                                          >
                                            View Page
                                          </a>
                                        </div>
                                      </div>
                                      <h3 className="home-showcase__title">
                                        Home page 04
                                      </h3>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a href="#">Pages</a>
                      <ul>
                        <li>
                          <a href="about.html">About</a>
                        </li>
                        <li>
                          <a href="volunteer.html">Volunteer</a>
                        </li>
                        <li>
                          <a href="become-volunteer.html">Become volunteer</a>
                        </li>
                        <li>
                          <a href="volunteer-carousel.html">
                            Volunteer carousel
                          </a>
                        </li>
                        <li>
                          <a href="gallery.html">Gallery</a>
                        </li>
                        <li>
                          <a href="gallery-carousel.html">Gallery carousel</a>
                        </li>
                        <li>
                          <a href="faq.html">FAQs</a>
                        </li>
                        <li>
                          <a href="404.html">404 Error</a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a href="#">Donations</a>
                      <ul>
                        <li>
                          <a href="donation.html">Donation</a>
                        </li>
                        <li>
                          <a href="donations-list.html">Donation list</a>
                        </li>
                        <li>
                          <a href="donation-carousel.html">Donation carousel</a>
                        </li>
                        <li>
                          <a href="donation-details.html">Donation details</a>
                        </li>
                        <li>
                          <a href="donate-now.html">Donate Now</a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a href="#">Events</a>
                      <ul>
                        <li>
                          <a href="events.html">Events</a>
                        </li>
                        <li>
                          <a href="events-carousel.html">Events carousel</a>
                        </li>
                        <li>
                          <a href="event-details.html">Event details</a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a href="#">News</a>
                      <ul>
                        <li>
                          <a href="news.html">News</a>
                        </li>
                        <li>
                          <a href="news-carousel.html">News carousel</a>
                        </li>
                        <li>
                          <a href="news-sidebar.html">News right sidebar</a>
                        </li>
                        <li>
                          <a href="news-sidebar-left.html">News left sidebar</a>
                        </li>
                        <li>
                          <a href="news-details.html">News details</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="contact.html">Contact</a>
                    </li>
                  </ul>
                </div>
                <div className="main-menu__main-menu-content-box">
                  <div className="main-menu__search-cat-btn-box">
                    <div className="main-menu__search-box">
                      <a
                        href="#"
                        className="main-menu__search search-toggler icon-magnifying-glass"
                      ></a>
                    </div>
                    <div className="main-menu__cat-box">
                      <a href="#" className="main-menu__cart icon-avatar"></a>
                    </div>
                    <div className="main-menu__btn-box">
                      <a href="donate-now.html" className="main-menu__btn">
                        {" "}
                        <span className="fa fa-heart"></span> Donate now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
