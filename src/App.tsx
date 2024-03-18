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
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/Terms";
import LoginPage from "./pages/Login";
import InterviewPage from "./pages/dashboard/InterviewPage";
import SignUp from "./pages/sigup";
import ForgotPassword from "./pages/ForgotPassword";
import Pricing from "./pages/Pricing";
import LegalPage from "./pages/Legal";

function App() {
  return (
    <>
      <Routes>
        {/* public routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/extension" element={<HomePage />} />
        <Route path="/policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsConditions />} />
        <Route path="/legal" element={<LegalPage />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/lostpassword" element={<ForgotPassword />} />
        <Route path="/scan" element={<ScanJobPage />} />
        <Route path="/results" element={<ResultsPage />} />
        <Route path="/dashboard" element={<HomeDashboard />} />
        <Route path="/jobtracker" element={<JobTracker />} />
        <Route path="/resumebuilder" element={<ResumeBuilder />} />
        <Route path="/templates" element={<ResumeTemplates />} />
        <Route path="/interviews" element={<InterviewPage />} />
      </Routes>
    </>
  );
}

export default App;
