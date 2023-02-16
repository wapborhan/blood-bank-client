import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import SliderImg1 from "../../assets/images/backgrounds/main-slider-1-1.png";
import SliderImg2 from "../../assets/images/backgrounds/main-slider-1-2.png";
import SliderImg3 from "../../assets/images/backgrounds/main-slider-1-3.png";

import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

export const Index = () => {
  const navigationNextRef = useRef(null);
  const navigationPrevRef = useRef(null);
  return (
    <section className="main-slider clearfix">
      <div
        className="swiper-container thm-swiper__slider"
        data-swiper-options='{"slidesPerView": 1,
               
                "autoplay": {
                "delay": 5000
                }}'
      >
        <Swiper
          modules={[Navigation]}
          className="mySwiper"
          // loop={true}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.navigation.nextEl = navigationNextRef.current;
            swiper.navigation.prevEl = navigationPrevRef.current;
          }}
        >
          <SwiperSlide>
            <div
              className="image-layer"
              style={{ backgroundImage: `url(${SliderImg1})` }}
            ></div>
            {/* <!-- /.image-layer --> */}
            <div
              className="main-slider-shape-1"
              // style="background-image: url(assets/images/shapes/main-slider-shape-1.jpg);"
            ></div>
            <div className="main-slider-shape-2 float-bob-x">
              <img src="assets/images/shapes/main-slider-shape-2.png" alt="" />
            </div>

            <div className="container">
              <div className="row">
                <div className="col-xl-6 col-lg-8">
                  <div className="main-slider__content">
                    <p className="main-slider__sub-title">
                      Always donate for childrens
                    </p>
                    <h2 className="main-slider__title">
                      Lend a Helping Hand to Those in Need
                    </h2>
                    <div className="main-slider__btn-box">
                      <a href="about.html" className="thm-btn main-slider__btn">
                        {" "}
                        Discover more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="image-layer"
              style={{ backgroundImage: `url(${SliderImg2})` }}
            ></div>
            {/* <!-- /.image-layer --> */}

            <div
              className="main-slider-shape-1"
              // style="background-image: url(assets/images/shapes/main-slider-shape-1.jpg);"
            ></div>
            <div className="main-slider-shape-2 float-bob-x">
              <img src="assets/images/shapes/main-slider-shape-2.png" alt="" />
            </div>

            <div className="container">
              <div className="row">
                <div className="col-xl-6 col-lg-8">
                  <div className="main-slider__content">
                    <p className="main-slider__sub-title">
                      Always donate for childrens
                    </p>
                    <h2 className="main-slider__title">
                      Lend a Helping Hand to Those in Need
                    </h2>
                    <div className="main-slider__btn-box">
                      <a href="about.html" className="thm-btn main-slider__btn">
                        {" "}
                        Discover more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="image-layer"
              style={{ backgroundImage: `url(${SliderImg3})` }}
            ></div>
            {/* <!-- /.image-layer --> */}

            <div
              className="main-slider-shape-1"
              // style="background-image: url(assets/images/shapes/main-slider-shape-1.jpg);"
            ></div>
            <div className="main-slider-shape-2 float-bob-x">
              <img src="assets/images/shapes/main-slider-shape-2.png" alt="" />
            </div>

            <div className="container">
              <div className="row">
                <div className="col-xl-6 col-lg-8">
                  <div className="main-slider__content">
                    <p className="main-slider__sub-title">
                      Always donate for childrens
                    </p>
                    <h2 className="main-slider__title">
                      Lend a Helping Hand to Those in Need
                    </h2>
                    <div className="main-slider__btn-box">
                      <a href="about.html" className="thm-btn main-slider__btn">
                        {" "}
                        Discover more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        {/* <!-- If we need navigation buttons --> */}
        <div className="main-slider__nav">
          <div
            className="swiper-button-prev"
            id="main-slider__swiper-button-next"
            ref={navigationNextRef}
          >
            <FaArrowLeft />
          </div>
          <div
            className="swiper-button-next"
            id="main-slider__swiper-button-prev"
            ref={navigationPrevRef}
          >
            <FaArrowRight />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Index;
