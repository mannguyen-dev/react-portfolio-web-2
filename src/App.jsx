import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Portfolio from "./pages/portfolio/Portfolio";
import Navbar from "./components/Navbar";
import Contact from "./pages/contact/Contact";
import Themes from "./components/Themes";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Themes />
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top right"
        toastOptions={{
          style: {
            fontSize: "1.4rem",
          },
        }}
      ></Toaster>
    </>
  );
}

export default App;
