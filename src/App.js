import { Fragment } from "react";
import NavBar from "./components/NavBar";
import ResponsiveAppBar from "./components/NavBar2";

function App() {
  return (
    <Fragment>
      <NavBar />
      <ResponsiveAppBar />
    </Fragment>
  );
}

export default App;
