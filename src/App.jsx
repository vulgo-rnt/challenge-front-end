import { Outlet } from "react-router-dom";
import GlobalStyled from "./components/GlobalStyled";
import Banner from "./components/Banner";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <GlobalStyled />
      <Banner />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
