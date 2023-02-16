import React from "react";

const index = () => {
  return (
    <section className="testimonial-one">
      <div
        className="testimonial-one-bg jarallax"
        data-jarallax
        data-speed="0.2"
        data-imgPosition="50% 0%"
        // style="background-image: url(assets/images/backgrounds/testimonial-one-bg.jpg);"
      ></div>
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6">
            <div className="testimonial-one__left">
              <div className="section-title text-left">
                <span className="section-title__tagline">Our Testimonials</span>
                <h2 className="section-title__title">
                  What they are talking about oxpins
                </h2>
              </div>
              <p className="testimonial-one__text-1">
                Nulla ultricies justo sit amet ante efficitur, eget pharetra
                augue efficitur. Vestibulum viverra, dolor sit amet ultricies
                ornare, elit justo pretium tellus.
              </p>
              <a href="#" className="thm-btn testimonial-one__btn">
                all testimonials
              </a>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="testimonial-one__right">
              <div className="testimonial-one__img-1 zoom-fade">
                <img
                  src="assets/images/testimonial/testimonial-img-1.jpg"
                  alt=""
                />
              </div>
              <div className="testimonial-one__img-1 testimonial-one__img-2 zoom-fade">
                <img
                  src="assets/images/testimonial/testimonial-img-2.jpg"
                  alt=""
                />
              </div>
              <div className="testimonial-one__img-1 testimonial-one__img-3 zoom-fade">
                <img src="assets/images/testimonial/testimonial-img-3.jpg" />
              </div>
              <div className="testimonial-one__img-1 testimonial-one__img-4 zoom-fade">
                <img
                  src="assets/images/testimonial/testimonial-img-4.jpg"
                  alt=""
                />
              </div>
              <div
                className="testimonial-one__carousel owl-carousel owl-theme thm-owl__carousel"
                data-owl-options='{
                                "loop": true,
                                "autoplay": true,
                                "margin": 50,
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
                                        "items": 1
                                    },
                                    "992": {
                                        "items": 1
                                    },
                                    "1200": {
                                        "items": 1
                                    }
                                }
                            }'
              >
                <div className="item">
                  {/* <!--Testimonial One Single Start--> */}
                  <div className="testimonial-one__single">
                    <div
                      className="testimonial-one__shape-1"
                      // style="background-image: url(assets/images/shapes/testimonial-one-shape-1.png);"
                    ></div>
                    <div className="testimonial-one__client-img">
                      <img
                        src="assets/images/testimonial/testimonial-1-1.jpg"
                        alt=""
                      />
                    </div>
                    <div className="testimonial-one__client-info">
                      <h3 className="testimonial-one__client-name">
                        Kevin martin
                      </h3>
                      <p className="testimonial-one__client-sub-title">
                        Volunteer
                      </p>
                    </div>
                    <div className="testimonial-one__quote">
                      <span className="icon-double-quotes"></span>
                    </div>
                    <p className="testimonial-one__text-2">
                      Nulla ultricies justo sit amet ante efficitur, eget
                      pharetra augue efficitur. Vestibulum viverra, dolor sit
                      amet ultricies simply free text ornare, elit justo pretium
                      tellus.
                    </p>
                  </div>
                  {/* <!--Testimonial One Single End--> */}
                </div>
                <div className="item">
                  {/* <!--Testimonial One Single Start--> */}
                  <div className="testimonial-one__single">
                    <div
                      className="testimonial-one__shape-1"
                      // style="background-image: url(assets/images/shapes/testimonial-one-shape-1.png);"
                    ></div>
                    <div className="testimonial-one__client-img">
                      <img
                        src="assets/images/testimonial/testimonial-1-2.jpg"
                        alt=""
                      />
                    </div>
                    <div className="testimonial-one__client-info">
                      <h3 className="testimonial-one__client-name">
                        Jessica brown
                      </h3>
                      <p className="testimonial-one__client-sub-title">
                        Volunteer
                      </p>
                    </div>
                    <div className="testimonial-one__quote">
                      <span className="icon-double-quotes"></span>
                    </div>
                    <p className="testimonial-one__text-2">
                      Nulla ultricies justo sit amet ante efficitur, eget
                      pharetra augue efficitur. Vestibulum viverra, dolor sit
                      amet ultricies simply free text ornare, elit justo pretium
                      tellus.
                    </p>
                  </div>
                  {/* <!--Testimonial One Single End--> */}
                </div>
                <div className="item">
                  {/* <!--Testimonial One Single Start--> */}
                  <div className="testimonial-one__single">
                    <div
                      className="testimonial-one__shape-1"
                      // style="background-image: url(assets/images/shapes/testimonial-one-shape-1.png);"
                    ></div>
                    <div className="testimonial-one__client-img">
                      <img
                        src="assets/images/testimonial/testimonial-1-3.jpg"
                        alt=""
                      />
                    </div>
                    <div className="testimonial-one__client-info">
                      <h3 className="testimonial-one__client-name">
                        Mike hardson
                      </h3>
                      <p className="testimonial-one__client-sub-title">
                        Volunteer
                      </p>
                    </div>
                    <div className="testimonial-one__quote">
                      <span className="icon-double-quotes"></span>
                    </div>
                    <p className="testimonial-one__text-2">
                      Nulla ultricies justo sit amet ante efficitur, eget
                      pharetra augue efficitur. Vestibulum viverra, dolor sit
                      amet ultricies simply free text ornare, elit justo pretium
                      tellus.
                    </p>
                  </div>
                  {/* <!--Testimonial One Single End--> */}
                </div>
                <div className="item">
                  {/* <!--Testimonial One Single Start--> */}
                  <div className="testimonial-one__single">
                    <div
                      className="testimonial-one__shape-1"
                      // style="background-image: url(assets/images/shapes/testimonial-one-shape-1.png);"
                    ></div>
                    <div className="testimonial-one__client-img">
                      <img
                        src="assets/images/testimonial/testimonial-1-1.jpg"
                        alt=""
                      />
                    </div>
                    <div className="testimonial-one__client-info">
                      <h3 className="testimonial-one__client-name">
                        Kevin martin
                      </h3>
                      <p className="testimonial-one__client-sub-title">
                        Volunteer
                      </p>
                    </div>
                    <div className="testimonial-one__quote">
                      <span className="icon-double-quotes"></span>
                    </div>
                    <p className="testimonial-one__text-2">
                      Nulla ultricies justo sit amet ante efficitur, eget
                      pharetra augue efficitur. Vestibulum viverra, dolor sit
                      amet ultricies simply free text ornare, elit justo pretium
                      tellus.
                    </p>
                  </div>
                  {/* <!--Testimonial One Single End--> */}
                </div>
                <div className="item">
                  {/* <!--Testimonial One Single Start--> */}
                  <div className="testimonial-one__single">
                    <div
                      className="testimonial-one__shape-1"
                      // style="background-image: url(assets/images/shapes/testimonial-one-shape-1.png);"
                    ></div>
                    <div className="testimonial-one__client-img">
                      <img
                        src="assets/images/testimonial/testimonial-1-2.jpg"
                        alt=""
                      />
                    </div>
                    <div className="testimonial-one__client-info">
                      <h3 className="testimonial-one__client-name">
                        Jessica brown
                      </h3>
                      <p className="testimonial-one__client-sub-title">
                        Volunteer
                      </p>
                    </div>
                    <div className="testimonial-one__quote">
                      <span className="icon-double-quotes"></span>
                    </div>
                    <p className="testimonial-one__text-2">
                      Nulla ultricies justo sit amet ante efficitur, eget
                      pharetra augue efficitur. Vestibulum viverra, dolor sit
                      amet ultricies simply free text ornare, elit justo pretium
                      tellus.
                    </p>
                  </div>
                  {/* <!--Testimonial One Single End--> */}
                </div>
                <div className="item">
                  {/* <!--Testimonial One Single Start--> */}
                  <div className="testimonial-one__single">
                    <div
                      className="testimonial-one__shape-1"
                      // style="background-image: url(assets/images/shapes/testimonial-one-shape-1.png);"
                    ></div>
                    <div className="testimonial-one__client-img">
                      <img
                        src="assets/images/testimonial/testimonial-1-3.jpg"
                        alt=""
                      />
                    </div>
                    <div className="testimonial-one__client-info">
                      <h3 className="testimonial-one__client-name">
                        Mike hardson
                      </h3>
                      <p className="testimonial-one__client-sub-title">
                        Volunteer
                      </p>
                    </div>
                    <div className="testimonial-one__quote">
                      <span className="icon-double-quotes"></span>
                    </div>
                    <p className="testimonial-one__text-2">
                      Nulla ultricies justo sit amet ante efficitur, eget
                      pharetra augue efficitur. Vestibulum viverra, dolor sit
                      amet ultricies simply free text ornare, elit justo pretium
                      tellus.
                    </p>
                  </div>
                  {/* <!--Testimonial One Single End--> */}
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
