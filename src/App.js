import Header from "./components/header/Header";
import Homepage from "./home/Homepage";
import NotFound from "./components/NotFound";
import Footer from "./components/footer/Footer";
import { Route, Routes } from "react-router-dom";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <div className="page-wraper">
        <Header />
        <div className="page-content">
          <Routes>
            <Route path="/" exact element={<Homepage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>

      {/* <div class="loading-area">
        <div class="loading-box"></div>
        <div class="loading-pic">
          <div class="cssload-loader"></div>
        </div>
      </div> */}
    </Fragment>
  );
}

export default App;
