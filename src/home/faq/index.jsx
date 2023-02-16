import React from "react";

const index = () => {
  return (
    <section className="faq-one">
      <div
        className="faq-one-shape-1"
        // style="background-image: url(assets/images/shapes/faq-one-shape-1.png);"
      ></div>
      <div
        className="faq-one-bg"
        // style="background-image: url(assets/images/backgrounds/faq-one-bg.png);"
      ></div>
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6">
            <div className="faq-one__left">
              <div className="section-title text-left">
                <span className="section-title__tagline">
                  Recently asked questions
                </span>
                <h2 className="section-title__title">
                  People are frequently asking some questions from us
                </h2>
              </div>
              <p className="faq-one__text-1">
                Proactively procrastinate cross-platform results via extensive
                ideas distinctively underwhelm enterprise. Compellingly
                plagiarize value-added sources with inexpensive schemas.
              </p>
              <a href="faq.html" className="thm-btn faq-one__btn">
                Learn how to get help
              </a>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="faq-one__right">
              <div className="accrodion-grp" data-grp-name="faq-one-accrodion">
                <div className="accrodion active">
                  <div className="accrodion-title">
                    <h4>Nulla eu purus scelerisque, dignissim diam.</h4>
                  </div>
                  <div className="accrodion-content">
                    <div className="inner">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua.
                      </p>
                    </div>
                    {/* <!-- /.inner --> */}
                  </div>
                </div>
                <div className="accrodion">
                  <div className="accrodion-title">
                    <h4>Quisque non diam porta, ullamcorper dolor sit amet.</h4>
                  </div>
                  <div className="accrodion-content">
                    <div className="inner">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua.
                      </p>
                    </div>
                    {/* <!-- /.inner --> */}
                  </div>
                </div>
                <div className="accrodion">
                  <div className="accrodion-title">
                    <h4>How can I make a change to my application?</h4>
                  </div>
                  <div className="accrodion-content">
                    <div className="inner">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua.
                      </p>
                    </div>
                    {/* <!-- /.inner --> */}
                  </div>
                </div>
                <div className="accrodion last-chiled">
                  <div className="accrodion-title">
                    <h4>Sed mattis neque sed commodo efficitur.</h4>
                  </div>
                  <div className="accrodion-content">
                    <div className="inner">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua.
                      </p>
                    </div>
                    {/* <!-- /.inner --> */}
                  </div>
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
