import Header from "./components/header/Header";
import Banner from "./home/banner";
import About from "./home/about";
import Causes from "./home/causes";

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
    </div>
  );
}

export default App;
