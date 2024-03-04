"use client";

import "./App.css";
import { Routes, Route } from "react-router-dom";
import ScanJobPage from "./pages/ScanJob";
import ResultsPage from "./pages/Results";
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/Home";
import JobTracker from "./pages/dashboard/JobTracker";
import HomeDashboard from "./pages/dashboard/Home";
import ResumeBuilder from "./pages/dashboard/ResumeBuilder";
import ResumeTemplates from "./pages/dashboard/ResumeTemplates";

function App() {
  return (
    <>
      <Routes>
        {/* public routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/extension" element={<HomePage />} />
        <Route path="/scan" element={<ScanJobPage />} />
        <Route path="/results" element={<ResultsPage />} />
        <Route path="/dashboard" element={<HomeDashboard />} />
        <Route path="/jobtracker" element={<JobTracker />} />
        <Route path="/resumebuilder" element={<ResumeBuilder />} />
        <Route path="/templates" element={<ResumeTemplates />} />
      </Routes>
    </>
  );
}

export default App;
