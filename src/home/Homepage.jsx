import React, { Fragment } from "react";
import HowItWorks from "./how/HowItWorks";
import Banner from "./banner/Banner";
import About from "./about/About";

const Homepage = () => {
  return (
    <Fragment>
      <Banner />
      <HowItWorks />
      <About />
    </Fragment>
  );
};

export default Homepage;
