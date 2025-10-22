import React, { useMemo, useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useInView } from 'framer-motion';

type IndustryKey = 'retail' | 'cpg' | 'o2o' | 'travel';

type IndustryContent = {
  name: string;
  challenge: string;
  solution: string;
  centralNode: string;
  branches: string[];
  icon: React.ReactNode;
};

const INDUSTRIES: Record<IndustryKey, IndustryContent> = {
  retail: {
    name: 'Retail & Restaurants',
    challenge:
      "The line between a successful opening and a failed one is drawn by data that lives beyond your four walls. Footfall is a metric; community, behavior, and local context are the reality.",
    solution:
      "We deliver Precision Retail Intelligence, transforming the physical world into a predictable canvas. Our platform provides a granular, street-level understanding of market potential, ensuring every decision—from site selection to promotion—is backed by an undeniable data advantage.",
    centralNode: 'Propheus for Retail',
    branches: ['Physical Observability', 'Market Potential', 'Site Selection', 'Demand Planning', 'Promotion Recommendation'],
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M3 7h18M5 7l2 12h10l2-12" strokeWidth={1.6} strokeLinecap="round"/>
        <path d="M9 11h6M8 15h8" strokeWidth={1.4} strokeLinecap="round"/>
      </svg>
    ),
  },
  cpg: {
    name: 'CPG',
    challenge:
      "Your product's success is determined long before it hits the shelf. Winning depends on choosing the right retail partners and understanding the unique appetite of every single market.",
    solution:
      "We provide a Unified Market View, closing the gap between your brand and the end consumer. Propheus maps the entire retail landscape, allowing you to identify ideal partners, align products with local tastes, and predict demand with startling accuracy.",
    centralNode: 'Propheus for CPG',
    branches: ['Market Potential', 'Retailer Selection', 'Demand Planning', 'Product Recommendation', 'Promotion Recommendation'],
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M7 7h10v10H7z" strokeWidth={1.6} />
        <path d="M10 10h4v4h-4z" strokeWidth={1.4} />
      </svg>
    ),
  },
  o2o: {
    name: 'Online to Offline',
    challenge:
      "The digital promise of speed and convenience meets the harsh reality of the physical world. Success in the last mile is a game of hyperlocal precision, where minutes and meters matter.",
    solution:
      "We deliver Last-Mile Operational Intelligence, turning urban complexity into your competitive edge. Propheus provides a living model of your service zones, enabling dynamic pricing, optimized product assortment, and unparalleled efficiency.",
    centralNode: 'Propheus for O2O',
    branches: ['Physical Observability', 'Demand Planning', 'Dynamic Pricing', 'Product Assortment'],
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M4 7h16M6 7l-2 10h12l2-10" strokeWidth={1.6} strokeLinecap="round"/>
        <path d="M7 17a2 2 0 104 0M15 17a2 2 0 104 0" strokeWidth={1.2}/>
      </svg>
    ),
  },
  travel: {
    name: 'Travel',
    challenge:
      "Today's traveler seeks authentic experiences, not just destinations. To capture their business, you must understand the transient, event-driven pulse of a location as if you were a local.",
    solution:
      "We offer Context-Rich Discovery, enabling you to craft and price experiences that resonate. Propheus surfaces the influence of local events, festivals, and trends, allowing for truly personalized recommendations and intelligent, dynamic pricing.",
    centralNode: 'Propheus for Travel',
    branches: ['Physical Observability', 'Personalized Discovery', 'Dynamic Pricing & Bundling'],
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M3 10l9-7 9 7-9 7-9-7z" strokeWidth={1.6}/>
        <path d="M12 17v4" strokeWidth={1.6} strokeLinecap="round"/>
      </svg>
    ),
  },
};

const underlineTransition = { type: 'spring', stiffness: 500, damping: 35 };

// Semi-circle component with teal glow and animated text
const GlowingSemiCircle: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, margin: "-100px 0px" });
  
  return (
    <div ref={containerRef} className="relative w-full h-96 overflow-hidden my-24">
      {/* Black semi-circle with teal glow */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[800px] h-[400px] bg-black rounded-t-full">
        <div className="absolute inset-0 rounded-t-full shadow-[0_0_100px_20px_rgba(20,184,166,0.4)] opacity-70"></div>
      </div>
      
      {/* Animated text */}
      <motion.div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <motion.h2 
          className="text-5xl md:text-7xl font-bold text-white tracking-wide"
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
      <style >{`
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

// Industry Card component
const IndustryCard: React.FC<{ industry: IndustryContent; delay: number }> = ({ industry, delay }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, scale: 0.8, y: 60 }}
      animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        delay: delay,
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
      className="bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-8 hover:border-teal-500/30 transition-all duration-300 group"
    >
      <div className="flex flex-col items-center text-center">
        <div className="text-teal-400 mb-6 group-hover:text-teal-300 transition-colors duration-300">
          {industry.icon}
        </div>
        <h3 className="text-xl font-semibold text-slate-100 group-hover:text-white transition-colors duration-300">
          {industry.name}
        </h3>
      </div>
    </motion.div>
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

// Industry Cards Section
const IndustryCardsSection: React.FC = () => {
  const industriesArray = Object.values(INDUSTRIES);

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industriesArray.map((industry, index) => (
            <IndustryCard
              key={index}
              industry={industry}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

function CapabilitiesDiagram({ central, branches }: { central: string; branches: string[] }) {
  const positions = useMemo(() => {
    const count = branches.length;
    const cx = 50, cy = 50, radius = 26;
    const angles = Array.from({ length: count }, (_, i) => (i / count) * 2 * Math.PI);
    return angles.map(a => ({
      x: cx + radius * Math.cos(a),
      y: cy + radius * Math.sin(a),
    }));
  }, [branches.length]);

  return (
    <div className="relative w-full h-72">
      <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id="tealGrad2" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#14b8a6" />
            <stop offset="100%" stopColor="#22d3ee" />
          </linearGradient>
        </defs>
        {/* Connections */}
        {positions.map((p, i) => (
          <path key={i} d={`M50 50 L${p.x} ${p.y}`} stroke="url(#tealGrad2)" strokeWidth="0.6" fill="none" className="stream-line" />
        ))}
        {/* Central node */}
        <g>
          <circle cx={50} cy={50} r={8} fill="url(#tealGrad2)" opacity={0.15} />
          <circle cx={50} cy={50} r={6.5} stroke="url(#tealGrad2)" strokeWidth={0.8} fill="rgba(20,184,166,0.08)" />
          <text x={50} y={50} textAnchor="middle" dominantBaseline="middle" fontSize={3.2} fill="#a7f3d0">{central}</text>
        </g>
        {/* Branch nodes */}
        {positions.map((p, i) => (
          <g key={i}>
            <circle cx={p.x} cy={p.y} r={4.5} fill="rgba(20,184,166,0.08)" stroke="url(#tealGrad2)" strokeWidth={0.6} />
            <text x={p.x} y={p.y} textAnchor="middle" dominantBaseline="middle" fontSize={3} fill="#e2e8f0">{branches[i]}</text>
          </g>
        ))}
      </svg>
    </div>
  );
}

export default function IndustriesPage() {
  const [active, setActive] = useState<IndustryKey>('retail');
  const current = INDUSTRIES[active];

  return (
    <main className="bg-slate-950 text-slate-100">
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden py-24 sm:py-32">
        <SectionHeader title="One Atlas. Tailored for Every World." />
      </section>

      {/* Glowing Semi-circle with "your industry" text */}
      <GlowingSemiCircle />

      {/* Industry Cards Section */}
      <IndustryCardsSection />

      {/* Solution Navigator: Sticky Control Panel */}
      <div className="sticky top-0 z-40 bg-slate-950/80 backdrop-blur border-t border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-6 py-4">
            {(['retail','cpg','o2o','travel'] as IndustryKey[]).map((key) => {
              const item = INDUSTRIES[key];
              const isActive = key === active;
              return (
                <button
                  key={key}
                  onClick={() => setActive(key)}
                  className={`relative px-1 text-sm md:text-base text-slate-300 hover:text-slate-100 transition-colors`}>
                  <div className="flex items-center gap-2">
                    <span className="text-teal-400/90">{item.icon}</span>
                    <span>{item.name}</span>
                  </div>
                  {isActive && (
                    <motion.span
                      layoutId="industries-underline"
                      transition={underlineTransition}
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-teal-400 to-cyan-400 shadow-[0_0_6px_rgba(34,211,238,0.6)]"
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Deep Dive Section */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10"
          >
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-slate-100">The Challenge</h2>
              <p className="mt-4 text-slate-300/90 leading-relaxed">{current.challenge}</p>

              <h2 className="mt-8 text-2xl md:text-3xl font-semibold text-slate-100">Our Solution</h2>
              <p className="mt-4 text-slate-300/90 leading-relaxed">{current.solution}</p>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-semibold text-teal-300">Key Capabilities</h3>
              <p className="text-sm text-slate-400">Central Node: {current.centralNode}</p>
              <CapabilitiesDiagram central={current.centralNode} branches={current.branches} />
            </div>
          </motion.div>
        </AnimatePresence>
      </section>
    </main>
  );
}