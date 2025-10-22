import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './sections/HeroSection';
import ValuePropositionSection from './sections/ValuePropositionSection';
import HowItWorksSection from './sections/HowItWorksSection';
import CommandCenterSection from './sections/CommandCenterSection';
import IndustriesSection from './sections/IndustriesSection';
import TestimonialsSection from './sections/TestimonialsSection';
import CaseStudySection from './sections/CaseStudySection';
import SignalSection from './sections/SignalSection';
import IndustriesPage from './IndustriesPage';
import './styles/App.css';

function Home() {
  return (
    <>
      <HeroSection />
      <IndustriesSection />
      <HowItWorksSection />
      <CommandCenterSection />
      <TestimonialsSection />
      <CaseStudySection />
      <ValuePropositionSection />
      <SignalSection />
    </>
  );
}

function App() {
  return (
    <div className="App bg-slate-950 min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/industries" element={<IndustriesPage />} />
      </Routes>
    </div>
  );
}

export default App;
