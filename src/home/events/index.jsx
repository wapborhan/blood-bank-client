import React from "react";

const index = () => {
  return (
    <section className="events-one">
      <div
        className="events-one-shape-1"
        // style="background-image: url(assets/images/shapes/events-one-shape-1.png)"
      ></div>
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-lg-4">
            <div className="events-one__left">
              <div className="section-title text-left">
                <span className="section-title__tagline">Upcoming events</span>
                <h2 className="section-title__title">
                  Join our latest upcoming events
                </h2>
              </div>
              <p className="events-one__text-1">
                There are many variations of passages of lorem ipsum available
                but the majority have suffered.
              </p>
              <a href="event-details.html" className="thm-btn events-one__btn">
                Discover More
              </a>
            </div>
          </div>
          <div className="col-xl-8 col-lg-8">
            <div className="events-one__right">
              <div
                className="events-one__carousel owl-carousel owl-theme thm-owl__carousel"
                data-owl-options='{
                                "loop": true,
                                "autoplay": true,
                                "margin": 20,
                                "nav": true,
                                "dots": false,
                                "smartSpeed": 500,
                                "autoplayTimeout": 10000,
                                "navText": ["<span className=\"icon-left-arrow\"></span>","<span className=\"icon-right-arrow\"></span>"],
                                "responsive": {
                                    "0": {
                                        "items": 1
                                    },
                                    "768": {
                                        "items": 2
                                    },
                                    "992": {
                                        "items": 2
                                    },
                                    "1200": {
                                        "items": 3
                                    }
                                }
                            }'
              >
                <div className="item">
                  {/* <!--Events One Single Start--> */}
                  <div className="events-one__single">
                    <div className="events-one__img">
                      <img src="assets/images/events/events-1-1.jpg" alt="" />
                      <div className="events-one__date">
                        <p>23 May, 2022</p>
                      </div>
                      <div className="events-one__content">
                        <ul className="list-unstyled events-one__meta">
                          <li>
                            <i className="fas fa-clock"></i>8:00pm
                          </li>
                          <li>
                            <i className="fas fa-map-marker-alt"></i>New York
                          </li>
                        </ul>
                        <h3 className="events-one__title">
                          <a href="event-details.html">
                            Play for the world with us
                          </a>
                        </h3>
                      </div>
                    </div>
                  </div>
                  {/* <!--Events One Single End--> */}
                </div>
                <div className="item">
                  {/* <!--Events One Single Start--> */}
                  <div className="events-one__single">
                    <div className="events-one__img">
                      <img src="assets/images/events/events-1-2.jpg" alt="" />
                      <div className="events-one__date">
                        <p>23 May, 2022</p>
                      </div>
                      <div className="events-one__content">
                        <ul className="list-unstyled events-one__meta">
                          <li>
                            <i className="fas fa-clock"></i>8:00pm
                          </li>
                          <li>
                            <i className="fas fa-map-marker-alt"></i>New York
                          </li>
                        </ul>
                        <h3 className="events-one__title">
                          <a href="event-details.html">
                            Contrary to popular belief
                          </a>
                        </h3>
                      </div>
                    </div>
                  </div>
                  {/* <!--Events One Single End--> */}
                </div>
                <div className="item">
                  {/* <!--Events One Single Start--> */}
                  <div className="events-one__single">
                    <div className="events-one__img">
                      <img src="assets/images/events/events-1-3.jpg" alt="" />
                      <div className="events-one__date">
                        <p>23 May, 2022</p>
                      </div>
                      <div className="events-one__content">
                        <ul className="list-unstyled events-one__meta">
                          <li>
                            <i className="fas fa-clock"></i>8:00pm
                          </li>
                          <li>
                            <i className="fas fa-map-marker-alt"></i>New York
                          </li>
                        </ul>
                        <h3 className="events-one__title">
                          <a href="event-details.html">
                            There are many variations of
                          </a>
                        </h3>
                      </div>
                    </div>
                  </div>
                  {/* <!--Events One Single End--> */}
                </div>
                <div className="item">
                  {/* <!--Events One Single Start--> */}
                  <div className="events-one__single">
                    <div className="events-one__img">
                      <img src="assets/images/events/events-1-1.jpg" alt="" />
                      <div className="events-one__date">
                        <p>23 May, 2022</p>
                      </div>
                      <div className="events-one__content">
                        <ul className="list-unstyled events-one__meta">
                          <li>
                            <i className="fas fa-clock"></i>8:00pm
                          </li>
                          <li>
                            <i className="fas fa-map-marker-alt"></i>New York
                          </li>
                        </ul>
                        <h3 className="events-one__title">
                          <a href="event-details.html">
                            Play for the world with us
                          </a>
                        </h3>
                      </div>
                    </div>
                  </div>
                  {/* <!--Events One Single End--> */}
                </div>
                <div className="item">
                  {/* <!--Events One Single Start--> */}
                  <div className="events-one__single">
                    <div className="events-one__img">
                      <img src="assets/images/events/events-1-2.jpg" alt="" />
                      <div className="events-one__date">
                        <p>23 May, 2022</p>
                      </div>
                      <div className="events-one__content">
                        <ul className="list-unstyled events-one__meta">
                          <li>
                            <i className="fas fa-clock"></i>8:00pm
                          </li>
                          <li>
                            <i className="fas fa-map-marker-alt"></i>New York
                          </li>
                        </ul>
                        <h3 className="events-one__title">
                          <a href="event-details.html">
                            Contrary to popular belief
                          </a>
                        </h3>
                      </div>
                    </div>
                  </div>
                  {/* <!--Events One Single End--> */}
                </div>
                <div className="item">
                  {/* <!--Events One Single Start--> */}
                  <div className="events-one__single">
                    <div className="events-one__img">
                      <img src="assets/images/events/events-1-3.jpg" alt="" />
                      <div className="events-one__date">
                        <p>23 May, 2022</p>
                      </div>
                      <div className="events-one__content">
                        <ul className="list-unstyled events-one__meta">
                          <li>
                            <i className="fas fa-clock"></i>8:00pm
                          </li>
                          <li>
                            <i className="fas fa-map-marker-alt"></i>New York
                          </li>
                        </ul>
                        <h3 className="events-one__title">
                          <a href="event-details.html">
                            There are many variations of
                          </a>
                        </h3>
                      </div>
                    </div>
                  </div>
                  {/* <!--Events One Single End--> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
