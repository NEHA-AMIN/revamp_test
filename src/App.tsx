import React from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import ValuePropositionSection from './ValuePropositionSection';
import HowItWorksSection from './HowItWorksSection';
import CommandCenterSection from './CommandCenterSection';
import IndustriesSection from './IndustriesSection';
import TestimonialsSection from './TestimonialsSection';
import CaseStudySection from './CaseStudySection';
import './App.css';

function App() {
  return (
    <div className="App bg-slate-950 min-h-screen">
      <Navbar />
      <HeroSection />
      <IndustriesSection />
      <HowItWorksSection />
      <CommandCenterSection />
      <TestimonialsSection />
      <CaseStudySection />
      <ValuePropositionSection />
    </div>
  );
}

export default App;
