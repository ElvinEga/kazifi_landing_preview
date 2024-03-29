"use client";

import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import ScanJobPage from "./pages/extension/ScanJob";
import ResultsPage from "./pages/extension/Results";
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/extension/Home";
import JobTracker from "./pages/dashboard/JobTracker";
import HomeDashboard from "./pages/dashboard/Home";
import ResumeBuilder from "./pages/dashboard/ResumeBuilder";
import ResumeTemplates from "./pages/dashboard/ResumeTemplates";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/Terms";
import LoginPage from "./pages/Login";
import InterviewPage from "./pages/dashboard/InterviewPage";
import SignUp from "./pages/sigup";
import ForgotPassword from "./pages/ForgotPassword";
import Pricing from "./pages/Pricing";
import LegalPage from "./pages/Legal";
import ResumePreview from "./pages/dashboard/ResumePreview";
import FileImporter from "./components/dashboard/FileImporter";
import KeywordsFinder from "./components/dashboard/KeywordFinder";
import "preline/preline";
import { IStaticMethods } from "preline/preline";
import { useEffect } from "react";
import ResumeReader from "./components/dashboard/tabs/ResumeReader";
import KeywordExtractor from "./components/dashboard/KeywordExtractor";

declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

function App() {
  const location = useLocation();

  useEffect(() => {
    window.HSStaticMethods.autoInit();
  }, [location.pathname]);

  return (
    <>
      <Routes>
        {/* public routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsConditions />} />
        <Route path="/legal" element={<LegalPage />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/lostpassword" element={<ForgotPassword />} />
        <Route path="/extension" element={<HomePage />} />
        <Route path="/extension/scan" element={<ScanJobPage />} />
        <Route path="/extension/results" element={<ResultsPage />} />
        <Route path="/dashboard" element={<HomeDashboard />} />
        <Route path="/jobtracker" element={<JobTracker />} />
        <Route path="/resumebuilder" element={<ResumeBuilder />} />
        <Route path="/resume_scanner" element={<ResumePreview />} />
        <Route path="/templates" element={<ResumeTemplates />} />
        <Route path="/interviews" element={<InterviewPage />} />
        <Route path="/fileimporter" element={<FileImporter />} />
        <Route path="/keywordsfinder" element={<KeywordsFinder />} />
        <Route path="/resumereader" element={<ResumeReader />} />
        <Route path="/keywordextractor" element={<KeywordExtractor />} />
      </Routes>
    </>
  );
}

export default App;
