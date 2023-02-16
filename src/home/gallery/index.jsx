import React from "react";
import GalImg1 from "../../assets/images/gallery/gallery-1-1.jpg";

const index = () => {
  return (
    <section className="gallery-one">
      <div className="gallery-one__top">
        <h3 className="gallery-one__top-title">Our photo gallery</h3>
      </div>
      <div className="gallery-one__bottom">
        <div className="gallery-one__container">
          <ul className="list-unstyled gallery-one__list">
            <li
              className="gallery-one__single wow fadeInUp"
              data-wow-delay="100ms"
            >
              <div className="gallery-one__img">
                <img src={GalImg1} alt="" />
                <a
                  href="assets/images/gallery/gallery-1-1.jpg"
                  className="img-popup"
                ></a>
                <div className="gallery-one__content">
                  <p className="gallery-one__sub-title">Charity</p>
                  <h5 className="gallery-one__title">
                    <a href="gallery.html">Education</a>
                  </h5>
                </div>
              </div>
            </li>
            <li
              className="gallery-one__single wow fadeInUp"
              data-wow-delay="200ms"
            >
              <div className="gallery-one__img">
                <img src="assets/images/gallery/gallery-1-2.jpg" alt="" />
                <a
                  href="assets/images/gallery/gallery-1-2.jpg"
                  className="img-popup"
                ></a>
                <div className="gallery-one__content">
                  <p className="gallery-one__sub-title">Charity</p>
                  <h5 className="gallery-one__title">
                    <a href="gallery.html">Education</a>
                  </h5>
                </div>
              </div>
            </li>
            <li
              className="gallery-one__single wow fadeInUp"
              data-wow-delay="300ms"
            >
              <div className="gallery-one__img">
                <img src="assets/images/gallery/gallery-1-3.jpg" alt="" />
                <a
                  href="assets/images/gallery/gallery-1-3.jpg"
                  className="img-popup"
                ></a>
                <div className="gallery-one__content">
                  <p className="gallery-one__sub-title">Charity</p>
                  <h5 className="gallery-one__title">
                    <a href="gallery.html">Education</a>
                  </h5>
                </div>
              </div>
            </li>
            <li
              className="gallery-one__single wow fadeInUp"
              data-wow-delay="400ms"
            >
              <div className="gallery-one__img">
                <img src="assets/images/gallery/gallery-1-4.jpg" alt="" />
                <a
                  href="assets/images/gallery/gallery-1-4.jpg"
                  className="img-popup"
                ></a>
                <div className="gallery-one__content">
                  <p className="gallery-one__sub-title">Charity</p>
                  <h5 className="gallery-one__title">
                    <a href="gallery.html">Education</a>
                  </h5>
                </div>
              </div>
            </li>
            <li
              className="gallery-one__single wow fadeInUp"
              data-wow-delay="500ms"
            >
              <div className="gallery-one__img">
                <img src="assets/images/gallery/gallery-1-5.jpg" alt="" />
                <a
                  href="assets/images/gallery/gallery-1-5.jpg"
                  className="img-popup"
                ></a>
                <div className="gallery-one__content">
                  <p className="gallery-one__sub-title">Charity</p>
                  <h5 className="gallery-one__title">
                    <a href="gallery.html">Education</a>
                  </h5>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default index;
