import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyled from "./components/GlobalStyled";
import Banner from "./components/Banner";
import MainList from "./components/MainList";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyled />
      <Banner />
      <Routes>
        <Route path="/" element={<MainList />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
