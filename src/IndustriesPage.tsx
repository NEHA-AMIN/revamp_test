import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

type IndustryKey =
  | "retail"
  | "cpg"
  | "o2o"
  | "travel"
  | "fintech"
  | "realestate";

type IndustryContent = {
  name: string;
  description: string;
  useCases: string[];
  icon: React.ReactNode;
};

const INDUSTRIES: Record<IndustryKey, IndustryContent> = {
  retail: {
    name: "Retail",
    description:
      "Leveraging data insights to optimize store locations, inventory, and customer engagement in physical retail environments.",
    useCases: [
      "Physical Observability (for stores)",
      "Site Selection",
      "Demand Planning",
      "Product Recommendation",
      "Promotion Recommendation",
    ],
    icon: (
      <svg
        className="h-6 w-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
      >
        <path
          d="M3 7h18M5 7l2 12h10l2-12"
          strokeWidth={1.6}
          strokeLinecap="round"
        />
        <path d="M9 11h6M8 15h8" strokeWidth={1.4} strokeLinecap="round" />
      </svg>
    ),
  },
  cpg: {
    name: "CPG",
    description:
      "Driving consumer packaged goods strategies through market analysis, retailer partnerships, and personalized product promotions.",
    useCases: [
      "Market Potential",
      "Retailer Selection",
      "Demand Planning",
      "Product Recommendation",
      "Promotion Recommendation",
    ],
    icon: (
      <svg
        className="h-6 w-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
      >
        <path d="M7 7h10v10H7z" strokeWidth={1.6} />
        <path d="M10 10h4v4h-4z" strokeWidth={1.4} />
      </svg>
    ),
  },
  o2o: {
    name: "Online to Offline (O2O)",
    description:
      "Connecting digital interactions to physical locations for enhanced demand forecasting, pricing, and assortment in hybrid retail models.",
    useCases: [
      "Physical Observability (for zones, stores, restaurants etc)",
      "Demand Planning",
      "Dynamic Pricing",
      "Product Assortment",
    ],
    icon: (
      <svg
        className="h-6 w-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
      >
        <path
          d="M4 7h16M6 7l-2 10h12l2-10"
          strokeWidth={1.6}
          strokeLinecap="round"
        />
        <path d="M7 17a2 2 0 104 0M15 17a2 2 0 104 0" strokeWidth={1.2} />
      </svg>
    ),
  },
  travel: {
    name: "Travel",
    description:
      "Enhancing travel and hospitality with real-time observability, personalized recommendations, and dynamic pricing for properties and experiences.",
    useCases: [
      "Physical Observability (for properties)",
      "Personalized Discovery & Recommendations",
      "Dynamic Pricing & Bundling",
    ],
    icon: (
      <svg
        className="h-6 w-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
      >
        <path d="M3 10l9-7 9 7-9 7-9-7z" strokeWidth={1.6} />
        <path d="M12 17v4" strokeWidth={1.6} strokeLinecap="round" />
      </svg>
    ),
  },
  fintech: {
    name: "FinTech",
    description:
      "Empowering financial services with transaction intelligence, fraud prevention, and secure merchant integrations.",
    useCases: [
      "Transaction Enrichment & Merchant Intelligence",
      "Fraud Detection & Risk Management",
      "Merchant Onboarding & Verification",
    ],
    icon: (
      <svg
        className="h-6 w-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
      >
        <path
          d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
          strokeWidth={1.6}
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  realestate: {
    name: "Real Estate",
    description:
      "Informing property investments through site evaluations, rental forecasts, and accurate valuations.",
    useCases: ["Site Selection", "Rent Prediction", "Property Valuation"],
    icon: (
      <svg
        className="h-6 w-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
      >
        <path
          d="M3 21h18M5 21V7l8-4 8 4v14M10 12h4v4h-4z"
          strokeWidth={1.6}
          strokeLinecap="round"
        />
      </svg>
    ),
  },
};

// Semi-circle component
const GlowingSemiCircle: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.25, 0.5], [0.8, 1, 1.8]);
  const width = useTransform(scrollYProgress, [0, 0.25, 0.5], [1000, 1200, 1500]);
  const height = useTransform(scrollYProgress, [0, 0.3, 0.8], [1050, 1300, 3800]);
  const glowIntensity = useTransform(scrollYProgress, [0, 0.15, 0.35, 0.5], [0.3, 0.7, 0.9, 1]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[240vh] overflow-hidden z-[9999] will-change-transform"
    >
      <motion.div
        className="absolute bottom-0 left-1/2 bg-black rounded-t-full"
        style={{ x: "-50%", width, height, scale }}
      >
        <motion.div
          className="absolute inset-0 rounded-t-full"
          style={{
            boxShadow: "0 0 100px 20px rgba(20,184,166,0.4)",
            opacity: glowIntensity,
          }}
        />
        <motion.div
          className="absolute inset-0 rounded-t-full"
          style={{
            boxShadow: "0 0 200px 40px rgba(20,184,166,0.2)",
            opacity: glowIntensity,
          }}
        />
      </motion.div>
    </div>
  );
};

// Split text animation
const AnimatedText: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const fullText =
    "The challenges of the physical world are unique to every industry. Propheus provides a single source of truth, finely tuned to deliver the specific intelligence your sector demands. Explore your solution below.";
  const words = fullText.split(" ");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3, rootMargin: "-100px 0px" }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .split-word {
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
              className={`split-word ${isVisible ? "animate" : ""}`}
              style={{ transitionDelay: `${index * 0.08}s` }}
            >
              {word}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

// Industry Card
const IndustryCard: React.FC<{ industry: IndustryContent; industryKey: IndustryKey }> = ({
  industry,
  industryKey,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpanded = () => setIsExpanded(!isExpanded);

  const backgrounds = {
    retail:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80",
    cpg: "https://images.unsplash.com/photo-1586380951230-1dd1362a2655?auto=format&fit=crop&w=800&q=80",
    o2o: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
    travel:
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=800&q=80",
    fintech:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80",
    realestate:
      "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=800&q=80",
  };

  return (
    <div
      className="relative w-full max-w-sm mx-auto rounded-[20px] overflow-hidden shadow-xl transition-all duration-200 hover:scale-105"
      style={{
        backgroundImage: `url(${backgrounds[industryKey]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 rounded-[20px]"></div>
      <div className="relative z-10 p-6 text-white h-full flex flex-col justify-end">
        <h3 className="text-2xl font-bold mb-3">{industry.name}</h3>
        <p className="text-sm opacity-90 mb-6 line-clamp-3">{industry.description}</p>
        <button
          onClick={toggleExpanded}
          className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3.5 px-6 rounded-full transition-all"
        >
          Find your use case
        </button>

        {isExpanded && (
          <div className="mt-6 border-t border-white/20 pt-4">
            <h4 className="text-lg font-semibold mb-2">Available Solutions:</h4>
            <ul className="space-y-1 text-sm opacity-90">
              {industry.useCases.map((u, i) => (
                <li key={i}>• {u}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

// Industries grid
const IndustriesCardsSection: React.FC = () => {
  const industriesArray = Object.entries(INDUSTRIES) as [IndustryKey, IndustryContent][];
  return (
    <section className="relative py-20 px-6 bg-black">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {industriesArray.map(([key, industry]) => (
          <IndustryCard key={key} industry={industry} industryKey={key} />
        ))}
      </div>
    </section>
  );
};

// Section header
const SectionHeader: React.FC<{ title: string }> = ({ title }) => (
  <div className="relative z-10 text-center max-w-4xl mx-auto bg-black">
    <h1 className="text-5xl md:text-7xl font-bold text-slate-100 leading-tight mb-8">
      <span className="animated-teal-gradient teal-glow-text">{title}</span>
    </h1>
    <AnimatedText />
  </div>
);

// Page
export default function IndustriesPage() {
  const { scrollY } = useScroll();
  const fadeOut = useTransform(scrollY, [0, 200, 400], [1, 0.5, 0]);

  return (
    <main className="bg-black text-slate-100">
      <section className="relative isolate overflow-hidden min-h-screen flex items-center justify-center bg-black">
        <motion.div
          style={{ opacity: fadeOut }}
          className="relative z-0 py-24 sm:py-32 text-center"
        >
          <SectionHeader title="One Atlas. Tailored for Every World." />
        </motion.div>
        <div className="absolute inset-0 z-20 pointer-events-none">
          <GlowingSemiCircle />
        </div>
      </section>
      <IndustriesCardsSection />
    </main>
  );
}
