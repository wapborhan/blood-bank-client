import Header from "./components/header/Header";
import Banner from "./home/banner";
import About from "./home/about";
import Causes from "./home/causes";
import Volunteer from "./home/volunteer";
import Events from "./home/events";
import Features from "./home/features";

function App() {
  return (
    <div class="page-wrapper">
      {" "}
      <div class="custom-cursor__cursor"></div>
      <div class="custom-cursor__cursor-two"></div>
      <Header />
      {/* <Banner /> */}
      <About />
      <Causes />
      <Volunteer />
      <Events />
      <Features />
    </div>
  );
}

export default App;
