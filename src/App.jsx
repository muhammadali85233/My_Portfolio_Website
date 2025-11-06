// App.jsx
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./Components/MainPage";
import PastPaperAI from "./Pages/PastPaperAI";
import LMS from "./Pages/LMS";
import FortitudeReWebsite from "./Pages/Fortitude";
import CollectAgent from "./Pages/CollectAgent";
import MattHouses from "./Pages/MattHouses";
import Simplicity from "./Pages/Simplicity";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/pastpaperai" element={<PastPaperAI />} />
        <Route path="/lms" element={<LMS />} />
        <Route path="/collectagent" element={<CollectAgent />} />
        <Route path="/fortitude" element={<FortitudeReWebsite />} />
        <Route path="/matthouses" element={<MattHouses />} />
        <Route path="/simplicity" element={<Simplicity />} />
      </Routes>
    </Router>
  );
}

export default App;
