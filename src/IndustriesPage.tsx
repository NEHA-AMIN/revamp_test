import React, { useMemo, useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useInView } from 'framer-motion';

type IndustryKey = 'retail' | 'cpg' | 'o2o' | 'travel' | 'fintech' | 'realestate';

type IndustryContent = {
  name: string;
  description: string;
  useCases: string[];
  icon: React.ReactNode;
};

const INDUSTRIES: Record<IndustryKey, IndustryContent> = {
  retail: {
    name: 'Retail',
    description: 'Leveraging data insights to optimize store locations, inventory, and customer engagement in physical retail environments.',
    useCases: [
      'Physical Observability (for stores)',
      'Site Selection',
      'Demand Planning',
      'Product Recommendation',
      'Promotion Recommendation'
    ],
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M3 7h18M5 7l2 12h10l2-12" strokeWidth={1.6} strokeLinecap="round"/>
        <path d="M9 11h6M8 15h8" strokeWidth={1.4} strokeLinecap="round"/>
      </svg>
    ),
  },
  cpg: {
    name: 'CPG',
    description: 'Driving consumer packaged goods strategies through market analysis, retailer partnerships, and personalized product promotions.',
    useCases: [
      'Market Potential',
      'Retailer Selection',
      'Demand Planning',
      'Product Recommendation',
      'Promotion Recommendation'
    ],
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M7 7h10v10H7z" strokeWidth={1.6} />
        <path d="M10 10h4v4h-4z" strokeWidth={1.4} />
      </svg>
    ),
  },
  o2o: {
    name: 'Online to Offline (O2O)',
    description: 'Connecting digital interactions to physical locations for enhanced demand forecasting, pricing, and assortment in hybrid retail models.',
    useCases: [
      'Physical Observability (for zones, stores, restaurants etc)',
      'Demand Planning',
      'Dynamic Pricing',
      'Product Assortment'
    ],
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M4 7h16M6 7l-2 10h12l2-10" strokeWidth={1.6} strokeLinecap="round"/>
        <path d="M7 17a2 2 0 104 0M15 17a2 2 0 104 0" strokeWidth={1.2}/>
      </svg>
    ),
  },
  travel: {
    name: 'Travel',
    description: 'Enhancing travel and hospitality with real-time observability, personalized recommendations, and dynamic pricing for properties and experiences.',
    useCases: [
      'Physical Observability (for properties)',
      'Personalized Discovery & Recommendations',
      'Dynamic Pricing & Bundling'
    ],
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M3 10l9-7 9 7-9 7-9-7z" strokeWidth={1.6}/>
        <path d="M12 17v4" strokeWidth={1.6} strokeLinecap="round"/>
      </svg>
    ),
  },
  fintech: {
    name: 'FinTech',
    description: 'Empowering financial services with transaction intelligence, fraud prevention, and secure merchant integrations.',
    useCases: [
      'Transaction Enrichment & Merchant Intelligence',
      'Fraud Detection & Risk Management',
      'Merchant Onboarding & Verification'
    ],
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" strokeWidth={1.6} strokeLinecap="round"/>
      </svg>
    ),
  },
  realestate: {
    name: 'Real Estate',
    description: 'Informing property investments through site evaluations, rental forecasts, and accurate valuations.',
    useCases: [
      'Site Selection',
      'Rent Prediction',
      'Property Valuation'
    ],
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M3 21h18M5 21V7l8-4 8 4v14M10 12h4v4h-4z" strokeWidth={1.6} strokeLinecap="round"/>
      </svg>
    ),
  },
};

const underlineTransition = { type: 'spring', stiffness: 500, damping: 35 };

// Semi-circle component with teal glow and animated text
const GlowingSemiCircle: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, margin: "-100px 0px" });
  
  // Scroll progress tracking for the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  // Transform scroll progress to scale and dimensions
  const scale = useTransform(scrollYProgress, [0, 0.25, 0.5], [0.4, 1, 1.8]);
  const width = useTransform(scrollYProgress, [0, 0.25, 0.5], [300, 800, 1400]);
  const height = useTransform(scrollYProgress, [0, 0.25, 0.5], [250, 650, 1100]);
  const glowIntensity = useTransform(scrollYProgress, [0, 0.15, 0.35, 0.5], [0.3, 0.7, 0.9, 1]);
  const textOpacity = useTransform(scrollYProgress, [0.4, 0.6, 0.8, 1], [0.4, 0.7, 1, 1]);
  
  return (
    <div ref={containerRef} className="relative w-full h-[200vh] overflow-hidden my-24">
      {/* Expanding black semi-circle with teal glow */}
      <motion.div 
        className="absolute bottom-0 left-1/2 bg-black rounded-t-full"
        style={{
          x: "-50%",
          width,
          height,
          scale
        }}
      >
        <motion.div 
          className="absolute inset-0 rounded-t-full"
          style={{
            boxShadow: "0 0 100px 20px rgba(20,184,166,0.4)",
            opacity: glowIntensity
          }}
        />
        <motion.div 
          className="absolute inset-0 rounded-t-full"
          style={{
            boxShadow: "0 0 200px 40px rgba(20,184,166,0.2)",
            opacity: glowIntensity
          }}
        />
      </motion.div>
      
      {/* Animated text */}
      <motion.div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        style={{ opacity: textOpacity }}
      >
        <motion.h2 
          className="text-5xl md:text-7xl font-bold text-white tracking-wide mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ 
            duration: 1.5, 
            ease: "easeOut",
            staggerChildren: 0.1,
            delayChildren: 0.3
          }}
        >
          {Array.from("your industry").map((char, index) => (
            <motion.span 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.3 + (index * 0.05),
                ease: "easeOut" 
              }}
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h2>
      </motion.div>
    </div>
  );
};

// Split text animation without Framer Motion
const AnimatedText: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const fullText = "The challenges of the physical world are unique to every industry. Propheus provides a single source of truth, finely tuned to deliver the specific intelligence your sector demands. Explore your solution below.";
  const words = fullText.split(' ');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3,
        rootMargin: '-100px 0px'
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .split-word {
          position: relative;
          display: inline-block;
          margin-right: 0.25em;
          opacity: 0;
          transform: translate3d(0, 100px, 0) scale(0.8);
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .split-word.animate {
          opacity: 1;
          transform: translate3d(0, 0, 0) scale(1);
        }
      `}</style>
      
      <div ref={containerRef} className="mt-8 text-center max-w-4xl mx-auto">
        <div className="text-2xl md:text-3xl font-medium leading-relaxed">
          {words.map((word, index) => (
            <span
              key={index}
              className={`split-word ${isVisible ? 'animate' : ''}`}
              style={{
                transitionDelay: `${index * 0.08}s`
              }}
            >
              {word}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

// Individual Industry Card Component
const IndustryCard: React.FC<{ industry: IndustryContent; industryKey: IndustryKey }> = ({ industry, industryKey }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleExpanded();
    }
  };

  // Placeholder background images for different industries
  const getBackgroundImage = (key: IndustryKey) => {
    const backgrounds = {
      retail: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      cpg: 'https://images.unsplash.com/photo-1586380951230-1dd1362a2655?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      o2o: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      travel: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      fintech: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      realestate: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    };
    return backgrounds[key];
  };

  return (
    <div 
      className="relative w-full max-w-sm mx-auto rounded-[20px] overflow-hidden shadow-xl transition-all duration-200 hover:shadow-2xl hover:scale-105"
      style={{
        backgroundImage: `url(${getBackgroundImage(industryKey)})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: isExpanded ? 'auto' : '420px'
      }}
    >
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50 rounded-[20px]"></div>
      
      {/* Content Container */}
      <div className="relative z-10 p-6 text-white h-full flex flex-col">
        {/* Top Section - Always Visible */}
        <div className="flex-1 flex flex-col justify-end mt-16">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-white mb-3 leading-tight">
              {industry.name}
            </h3>
            
            <p className="text-white text-opacity-90 text-sm leading-relaxed mb-6 line-clamp-3">
              {industry.description}
            </p>
            
            {/* Industry tag badges (decorative) */}
            <div className="flex gap-2 mb-6">
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-3 py-1.5">
                <div className="flex items-center gap-1">
                  <div className="text-white text-opacity-80">
                    {industry.icon}
                  </div>
                  <span className="text-xs text-white text-opacity-90 font-medium">
                    Data-Driven
                  </span>
                </div>
              </div>
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-3 py-1.5">
                <span className="text-xs text-white text-opacity-90 font-medium">
                  {industry.useCases.length} Solutions
                </span>
              </div>
            </div>
          </div>
          
          <button
            onClick={toggleExpanded}
            onKeyDown={handleKeyPress}
            className="w-full bg-black hover:bg-gray-800 text-white font-semibold py-3.5 px-6 rounded-full transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 flex items-center justify-center gap-2 shadow-lg"
            aria-expanded={isExpanded}
            aria-controls={`use-cases-${industryKey}`}
            style={{ backgroundColor: '#000000' }}
          >
            <span>Find your use case</span>
            <motion.svg
              animate={{ rotate: isExpanded ? 90 : 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </motion.svg>
          </button>
        </div>

        {/* Expandable Section */}
        <motion.div
          initial={false}
          animate={{
            height: isExpanded ? 'auto' : 0,
            opacity: isExpanded ? 1 : 0
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="overflow-hidden"
          id={`use-cases-${industryKey}`}
        >
          <div ref={contentRef} className="pt-6 mt-4 border-t border-white border-opacity-20">
            <h4 className="text-white text-lg font-semibold mb-3">Available Solutions:</h4>
            <ul className="space-y-2">
              {industry.useCases.map((useCase, index) => (
                <li key={index}>
                  <a
                    href="#use-case-details"
                    className="text-white text-opacity-90 text-sm hover:text-white hover:underline transition-colors duration-150 block pl-2 relative"
                  >
                    <span className="absolute left-0 top-2">•</span>
                    <span className="ml-2">{useCase}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// Industries Cards Grid Section
const IndustriesCardsSection: React.FC = () => {
  const industriesArray = Object.entries(INDUSTRIES) as [IndustryKey, IndustryContent][];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Responsive Grid: 3 columns on desktop, 2 on tablet, 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {industriesArray.map(([key, industry]) => (
            <IndustryCard
              key={key}
              industry={industry}
              industryKey={key}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const SectionHeader: React.FC<{title: string}> = ({ title }) => (
  <div className="relative z-10 text-center max-w-4xl mx-auto">
    <h1 className="text-5xl md:text-7xl font-bold text-slate-100 leading-tight mb-8">
      <span className="animated-teal-gradient teal-glow-text">{title}</span>
    </h1>
    <AnimatedText />
  </div>
);

export default function IndustriesPage() {
  return (
    <main className="bg-black text-slate-100">
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden py-24 sm:py-32">
        <SectionHeader title="One Atlas. Tailored for Every World." />
      </section>

      {/* Glowing Semi-circle with "your industry" text */}
      <GlowingSemiCircle />

      {/* Industries Cards Grid Section */}
      <IndustriesCardsSection />
    </main>
  );
}