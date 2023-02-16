import Header from "./components/header/Header";
import Homepage from "./home/Homepage";
import NotFound from "./components/NotFound";
import Footer from "./components/footer/Footer";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div class="page-wrapper">
      <div class="custom-cursor__cursor"></div>
      <div class="custom-cursor__cursor-two"></div>
      <Header />
      <Routes>
        <Route path="/" exact element={<Homepage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
