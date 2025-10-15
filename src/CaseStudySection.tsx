import React from 'react';
import { motion } from 'framer-motion';
import CaseStudyCarousel, { CASE_STUDIES } from './CaseStudyCarousel';

const CaseStudySection: React.FC = () => {
  return (
    <section className="py-16 bg-slate-950 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Success Stories</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            See how our AI solutions have transformed businesses across industries with measurable results.
          </p>
        </motion.div>
        
        <CaseStudyCarousel 
          caseStudies={CASE_STUDIES}
          blurStrength={5}
          scaleDelta={0.08}
          opacityDelta={0.25}
          transitionDuration={0.5}
        />
      </div>
    </section>
  );
};

export default CaseStudySection;