import React from "react";
// import FootImg from "../../assets/images/backgrounds/site-footer-bg.jpg";

const Footer = () => {
  const d = new Date();
  return (
    <footer class="site-footer footer-large footer-dark text-white footer-style1">
      {/* <!-- FOOTER COPYRIGHT --> */}
      <div class="footer-middle">
        <div class="container">
          <div class="footer-middle-content">
            <div class="logo-footer">
              <a href="index.html">
                <img src="images/logo-light.png" alt="" />
              </a>
            </div>

            <ul class="copyrights-nav">
              <li>
                <a href="javascript:void(0);">Terms &amp; Condition</a>
              </li>
              <li>
                <a href="javascript:void(0);">Privacy Policy</a>
              </li>
              <li>
                <a href="contact-1.html">Contact Us</a>
              </li>
            </ul>

            <ul class="social-icons  wt-social-links footer-social-icon">
              <li>
                <a href="javascript:void(0);" class="fa fa-facebook"></a>
              </li>
              <li>
                <a href="javascript:void(0);" class="fa fa-twitter"></a>
              </li>
              <li>
                <a href="javascript:void(0);" class="fa fa-linkedin"></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="container">
          <div class="wt-footer-bot-left d-flex justify-content-center">
            <span class="copyrights-text">
              © {d.getFullYear()} <b>SR Blood Bank</b>. Designed By{" "}
              <span class="site-text-primarys text-white">
                <a
                  className="text-white"
                  href="https://www.srdreamlab.com"
                  target="_blank"
                >
                  SR Dream Lab
                </a>
              </span>
            </span>
          </div>
        </div>
      </div>{" "}
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="site-footer__bottom-inner">
              <p className="site-footer__bottom-text mb-0"></p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
