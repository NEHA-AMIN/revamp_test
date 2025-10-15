import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Define the case study type
interface CaseStudy {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

// Props for the component
interface CaseStudyCarouselProps {
  caseStudies: CaseStudy[];
  blurStrength?: number;
  scaleDelta?: number;
  opacityDelta?: number;
  transitionDuration?: number;
  autoScroll?: boolean;
  autoScrollInterval?: number;
}

const CaseStudyCarousel: React.FC<CaseStudyCarouselProps> = ({
  caseStudies,
  blurStrength = 6,
  scaleDelta = 0.08,
  opacityDelta = 0.3,
  transitionDuration = 0.5,
  autoScroll = true,
  autoScrollInterval = 5000, // Increased to 5 seconds for better visibility
}) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [shouldDisableBlur, setShouldDisableBlur] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const autoScrollRef = useRef<NodeJS.Timeout | null>(null);

  // Check if we're on mobile and monitor performance
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    // Performance monitoring
    let frameCount = 0;
    let lastTime = performance.now();
    let frameRate = 60;
    
    const checkPerformance = () => {
      frameCount++;
      const now = performance.now();
      
      if (now - lastTime >= 1000) {
        frameRate = frameCount;
        frameCount = 0;
        lastTime = now;
        
        // Disable blur if performance is suffering
        if (frameRate < 30 && !shouldDisableBlur) {
          setShouldDisableBlur(true);
        } else if (frameRate >= 45 && shouldDisableBlur) {
          setShouldDisableBlur(false);
        }
      }
      
      requestAnimationFrame(checkPerformance);
    };
    
    const animationFrame = requestAnimationFrame(checkPerformance);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      cancelAnimationFrame(animationFrame);
    };
  }, [shouldDisableBlur]);

  // Handle scroll to update active card
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const handleScroll = () => {
      if (!isScrolling) {
        setIsScrolling(true);
      }
      
      const scrollLeft = carousel.scrollLeft;
      const carouselWidth = carousel.clientWidth;
      const cardWidth = carouselWidth * 0.7; // Approximate card width
      
      // Calculate which card is most centered
      const centerPosition = scrollLeft + carouselWidth / 2;
      const newActiveIndex = Math.round(centerPosition / cardWidth);
      
      if (newActiveIndex !== activeIndex && newActiveIndex >= 0 && newActiveIndex < caseStudies.length) {
        setActiveIndex(newActiveIndex);
      }
      
      // Clear scrolling state after a delay
      clearTimeout(carousel.dataset.scrollTimeout as unknown as number);
      const timeout = window.setTimeout(() => {
        setIsScrolling(false);
      }, 150);
      carousel.dataset.scrollTimeout = timeout.toString();
    };

    carousel.addEventListener('scroll', handleScroll);
    return () => {
      carousel.removeEventListener('scroll', handleScroll);
      clearTimeout(carousel.dataset.scrollTimeout as unknown as number);
    };
  }, [activeIndex, caseStudies.length, isScrolling]);

  // Auto-scroll functionality - Enhanced for reliable automatic scrolling
  useEffect(() => {
    const startAutoScroll = () => {
      if (autoScroll && !isPaused) {
        // Clear any existing interval first
        if (autoScrollRef.current) {
          clearInterval(autoScrollRef.current);
        }
        
        // Set new interval for automatic scrolling
        autoScrollRef.current = setInterval(() => {
          const nextIndex = (activeIndex + 1) % caseStudies.length;
          setActiveIndex(nextIndex);
          
          // Force scroll to the next card
          const carousel = carouselRef.current;
          if (carousel) {
            const carouselWidth = carousel.clientWidth;
            const cardWidth = carouselWidth * 0.7;
            const scrollPosition = nextIndex * cardWidth;
            
            carousel.scrollTo({
              left: scrollPosition,
              behavior: 'smooth'
            });
          }
        }, autoScrollInterval);
      }
    };

    const stopAutoScroll = () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
        autoScrollRef.current = null;
      }
    };

    // Start auto-scrolling with a small delay to ensure DOM is ready
    const initTimeout = setTimeout(() => {
      startAutoScroll();
    }, 500);

    // Clean up on unmount
    return () => {
      clearTimeout(initTimeout);
      stopAutoScroll();
    };
  }, [activeIndex, autoScroll, autoScrollInterval, caseStudies.length, isPaused]);

  // Pause auto-scroll when user interacts with carousel
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const pauseAutoScroll = () => {
      setIsPaused(true);
      // Clear any existing auto-scroll interval
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
        autoScrollRef.current = null;
      }
    };
    
    const resumeAutoScroll = () => {
      setIsPaused(false);
      // Force a scroll to the next card after resuming
      setTimeout(() => {
        const nextIndex = (activeIndex + 1) % caseStudies.length;
        navigateToCard(nextIndex);
      }, 500);
    };

    carousel.addEventListener('mouseenter', pauseAutoScroll);
    carousel.addEventListener('mouseleave', resumeAutoScroll);
    carousel.addEventListener('touchstart', pauseAutoScroll);
    carousel.addEventListener('touchend', resumeAutoScroll);

    return () => {
      carousel.removeEventListener('mouseenter', pauseAutoScroll);
      carousel.removeEventListener('mouseleave', resumeAutoScroll);
      carousel.removeEventListener('touchstart', pauseAutoScroll);
      carousel.removeEventListener('touchend', resumeAutoScroll);
    };
  }, [activeIndex, caseStudies.length]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        navigateToCard(activeIndex === 0 ? caseStudies.length - 1 : activeIndex - 1);
        e.preventDefault();
      } else if (e.key === 'ArrowRight') {
        navigateToCard((activeIndex + 1) % caseStudies.length);
        e.preventDefault();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeIndex, caseStudies.length]);

  // Scroll to a specific card
  const navigateToCard = (index: number) => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    
    const carouselWidth = carousel.clientWidth;
    const cardWidth = carouselWidth * 0.7;
    const scrollPosition = index * cardWidth;
    
    carousel.scrollTo({
      left: scrollPosition,
      behavior: 'smooth'
    });
  };

  // Calculate card styles based on distance from active card
  const getCardStyle = (index: number) => {
    const distance = Math.abs(index - activeIndex);
    const scale = 1 - (distance * scaleDelta);
    const opacity = 1 - (distance * opacityDelta);
    
    // Only apply blur if not on mobile and performance is good
    const blur = (!isMobile && !shouldDisableBlur) ? `blur(${distance * blurStrength}px)` : 'none';
    
    return {
      scale,
      opacity,
      filter: blur,
      zIndex: 100 - distance,
    };
  };

  return (
    <div className="relative w-full overflow-hidden py-8">
      {/* Keyboard navigation indicators */}
      <div className="hidden md:flex justify-between absolute top-1/2 left-4 right-4 z-50 -translate-y-1/2 pointer-events-none">
        <button 
          onClick={() => navigateToCard(Math.max(0, activeIndex - 1))}
          className="bg-slate-800/80 text-white p-2 rounded-full pointer-events-auto"
          aria-label="Previous case study"
          disabled={activeIndex === 0}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        <button 
          onClick={() => navigateToCard(Math.min(caseStudies.length - 1, activeIndex + 1))}
          className="bg-slate-800/80 text-white p-2 rounded-full pointer-events-auto"
          aria-label="Next case study"
          disabled={activeIndex === caseStudies.length - 1}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>
      
      {/* Carousel container */}
      <div 
        ref={carouselRef}
        className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar py-8 px-4"
        style={{ 
          scrollbarWidth: 'none',
          msOverflowStyle: 'none'
        }}
        role="region"
        aria-label="Case studies carousel"
      >
        {/* Spacer for centering first card */}
        <div className="shrink-0" style={{ width: 'calc(50% - 35vh / 2)' }}></div>
        
        {/* Case study cards - DUPLICATED for infinite scroll */}
        {[...caseStudies, ...caseStudies].map((study, index) => (
          <motion.div
            key={`${study.id}-${index}`}
            className="shrink-0 snap-center mx-4 w-[70vw] max-w-[500px] h-[80vh] max-h-[600px]"
            animate={getCardStyle(index % caseStudies.length)}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
              duration: transitionDuration,
              ease: [0.25, 0.1, 0.25, 1], // cubic-bezier for smooth easing
            }}
            whileHover={{ scale: (index % caseStudies.length) === activeIndex ? 1.03 : getCardStyle(index % caseStudies.length).scale + 0.02 }}
            tabIndex={(index % caseStudies.length) === activeIndex ? 0 : -1}
            role="group"
            aria-label={`Case study: ${study.title}`}
            aria-current={(index % caseStudies.length) === activeIndex ? "true" : "false"}
          >
            <div 
              className={`w-full h-full rounded-xl overflow-hidden shadow-lg transition-shadow ${
                (index % caseStudies.length) === activeIndex ? 'shadow-2xl' : 'shadow-md'
              }`}
            >
              <div className="relative w-full h-full bg-slate-900 text-white">
                <img 
                  src={study.imageUrl} 
                  alt={`${study.title} case study`}
                  className="w-full h-1/2 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{study.title}</h3>
                  <p className="text-slate-300 mb-4">{study.description}</p>
                  <a 
                    href={study.link} 
                    className="inline-block px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600 transition-colors"
                  >
                    View Case Study
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
        
        {/* Spacer for centering last card */}
        <div className="shrink-0" style={{ width: 'calc(50% - 35vh / 2)' }}></div>
      </div>
      

      
      {/* Accessibility toggle for blur effect */}
      <div className="flex justify-center mt-4">
        <button
          onClick={() => setShouldDisableBlur(!shouldDisableBlur)}
          className="text-sm text-slate-500 hover:text-slate-700"
        >
          {shouldDisableBlur ? "Enable visual effects" : "Disable visual effects"}
        </button>
      </div>
    </div>
  );
};

// Sample case studies data
export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "cs1",
    title: "AI-Powered Retail Analytics",
    description: "How we helped a major retailer increase sales by 27% using predictive analytics and customer behavior modeling.",
    imageUrl: "https://placehold.co/800x400/0f172a/e2e8f0?text=Retail+Analytics",
    link: "#retail-case-study"
  },
  {
    id: "cs2",
    title: "Healthcare Data Transformation",
    description: "Transforming patient care with AI-driven insights that reduced readmission rates by 32%.",
    imageUrl: "https://placehold.co/800x400/0f172a/e2e8f0?text=Healthcare+Data",
    link: "#healthcare-case-study"
  },
  {
    id: "cs3",
    title: "Financial Services Automation",
    description: "Automating compliance processes saved this bank 15,000 hours annually while improving accuracy.",
    imageUrl: "https://placehold.co/800x400/0f172a/e2e8f0?text=Financial+Services",
    link: "#finance-case-study"
  },
  {
    id: "cs4",
    title: "CPG Supply Chain Optimization",
    description: "Reducing inventory costs by 18% while maintaining 99.8% fulfillment rates during global disruptions.",
    imageUrl: "https://placehold.co/800x400/0f172a/e2e8f0?text=Supply+Chain",
    link: "#cpg-case-study"
  },
  {
    id: "cs5",
    title: "Real Estate Market Intelligence",
    description: "Providing predictive insights that helped developers identify emerging neighborhood trends 18 months ahead of competitors.",
    imageUrl: "https://placehold.co/800x400/0f172a/e2e8f0?text=Real+Estate",
    link: "#real-estate-case-study"
  },
  {
    id: "cs6",
    title: "Travel Industry Personalization",
    description: "Creating hyper-personalized experiences that increased customer retention by 42% for this global travel platform.",
    imageUrl: "https://placehold.co/800x400/0f172a/e2e8f0?text=Travel+Industry",
    link: "#travel-case-study"
  }
];

// Add custom CSS to hide scrollbar
const style = document.createElement('style');
style.textContent = `
  .hide-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .hide-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;
document.head.appendChild(style);

export default CaseStudyCarousel;