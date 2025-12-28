import { useState } from "react";
import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Brawlers from "./Brawlers";
import Home from "./Home";
import Cosmetics from "./Cosmetics";
import Events from "./Events";
import Items from "./Items";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import brawlerData from "./brawlers.json";
import BrawlerPage from "./BrawlerPage";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top of the page
  }, [location]); // This effect runs every time the location changes

  return null; // No UI rendered
};

function App() {
  return (
    <HashRouter>
      <NavBar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/brawlers" element={<Brawlers />} />
        <Route path="/cosmetics" element={<Cosmetics />} />
        <Route path="/events" element={<Events />} />
        <Route path="/items" element={<Items />} />
        {brawlerData.map((brawler) => (
          <Route
            key={brawler.name}
            path={`/brawlers/${brawler.name.toLowerCase().replace(/ /g, "-")}`}
            element={<BrawlerPage {...brawler} />}
          />
        ))}
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
