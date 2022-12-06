import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Slider from "./Slider.jsx";
import Trending from "./trending.jsx";
import Header from "./header.jsx";
import Footer from "./footer.jsx";
import About from "./About.jsx";
import { Routes, BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Slider />
      <About />
      <Trending />
      <Footer />
      {/* <BrowserRouter>
          <Routes>
              <Route path='/' element={<Footer />} />
          </Routes>
      </BrowserRouter>  */}
    </>
  );
}

export default App;
