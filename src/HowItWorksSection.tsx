import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface TimelineStep {
  step: number;
  title: string;
  description: string;
  imageUrl: string;
}

const timelineSteps: TimelineStep[] = [
  {
    step: 1,
    title: 'Ingest & Aggregate',
    description: 'We continuously pull data from world-class sources like Esri, Overture, and census bureaus, structuring it within the Propheus Core.',
    imageUrl: 'https://placehold.co/600x300/0f172a/2dd4bf?text=Data+Sources+Flowing+In'
  },
  {
    step: 2,
    title: 'Model & Correlate',
    description: 'The Propheus Core visualizes AI at work. Our models find hidden patterns, transforming raw data into an intelligent, contextual layer.',
    imageUrl: 'https://placehold.co/600x300/0f172a/22d3ee?text=Abstract+Neural+Network'
  },
  {
    step: 3,
    title: 'Visualize & Act',
    description: 'The output is a clear visualization—like a predictive heatmap—allowing you to de-risk decisions and act with confidence.',
    imageUrl: 'https://placehold.co/600x300/0f172a/14b8a6?text=Predictive+Heatmap+UI'
  }
];

const HowItWorksSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const lineScaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section 
      id="how-it-works"
      ref={sectionRef}
      className="relative py-24 sm:py-32 overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/how-it-works-bg.png')",
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-slate-950/60 border-y border-slate-800"></div>
      
      <div className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h3 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6 leading-tight">
            Our 3-Step{' '}
            <span className="bg-gradient-to-r from-teal-400 to-cyan-400 text-transparent bg-clip-text">
              Inference Process
            </span>
          </h3>
          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Transforming disparate data points into strategic assets.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-3xl mx-auto">
          {/* Animated Timeline Line */}
          <motion.div
            className="absolute left-8 top-0 origin-top"
            style={{
              scaleY: lineScaleY,
              height: '100%',
              width: '2px',
              background: 'linear-gradient(to bottom, #2dd4bf, #22d3ee)'
            }}
          />

          {/* Timeline Steps */}
          <div className="space-y-16">
            {timelineSteps.map((step, index) => (
              <div key={step.step} className="relative pl-16">
                {/* Timeline Dot */}
                <div className="absolute left-6 top-0 w-8 h-8 bg-slate-950 border-2 border-teal-400 rounded-full z-10 flex items-center justify-center shadow-lg shadow-teal-400/20">
                  <span className="text-teal-400 font-semibold text-sm">{step.step}</span>
                </div>

                {/* Content */}
                <motion.div
                  className="space-y-6"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ 
                    opacity: 1, 
                    y: 0,
                    transition: { 
                      duration: 0.6, 
                      delay: index * 0.2,
                      ease: "easeOut"
                    }
                  }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  {/* Title */}
                  <h4 className="text-2xl md:text-3xl font-bold text-slate-100">
                    {step.title}
                  </h4>

                  {/* Description */}
                  <p className="text-slate-400 text-lg leading-relaxed">
                    {step.description}
                  </p>

                  {/* Image */}
                  <img
                    src={step.imageUrl}
                    alt={`Step ${step.step}: ${step.title}`}
                    className="rounded-lg border border-slate-800 mt-6 w-full"
                  />
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
