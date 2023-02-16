import Header from "./components/header/Header";
import Banner from "./home/banner";
import About from "./home/about";
import Causes from "./home/causes";
import Volunteer from "./home/volunteer";
import Events from "./home/events";
import Features from "./home/features";
import Brand from "./home/brand";
import Testimonials from "./home/testimonials";
import Galary from "./home/gallery";
import Faq from "./home/faq";
import Counter from "./home/counter";
import News from "./home/news";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div class="page-wrapper">
      <div class="custom-cursor__cursor"></div>
      <div class="custom-cursor__cursor-two"></div>
      <Header />
      <Banner />
      <About />
      {/* <Causes /> */}
      {/* <Volunteer /> */}
      {/* <Events /> */}
      {/* <Features /> */}
      {/* <Brand /> */}
      {/* <Testimonials /> */}
      {/* <Galary /> */}
      {/* <Faq /> */}
      {/* <Counter /> */}
      {/* <News /> */}
      <Footer />
    </div>
  );
}

export default App;
