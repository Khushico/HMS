
import React from "react";
import "./App.css";
import ProvidenceWebsite from "./components/ProvidenceWebsite.jsx";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cardiology from "./components/Services/Cardiology";
import EmergencyCare from "./components/Services/EmergencyCare";
import PrimaryCare from "./components/Services/PrimaryCare";
import WomenHealth from "./components/Services/WomenHealth";
import MedicalChatbot from "./components/MedicalChatbot.jsx";

const App = () => (
  <Router>
    <div className="App">
    <Routes>
      <Route path="/" element={<ProvidenceWebsite />} />
      <Route path="/services/cardiology" element={<Cardiology />} />
      <Route path="/services/emergency-care" element={<EmergencyCare />} />
      <Route path="/services/primary-care" element={<PrimaryCare />} />
      <Route path="/services/women-health" element={<WomenHealth />} />
    </Routes>
      <MedicalChatbot />
    </div>
  </Router>
);

export default App;