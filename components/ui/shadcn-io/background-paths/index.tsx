'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

function FloatingPaths({ position }: { position: number }) {
  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    color: `rgba(13,148,136,${0.35 + i * 0.05})`,
    width: 0.8 + i * 0.04,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg
        className="w-full h-full"
        viewBox="0 0 696 316"
        fill="none"
      >
        <title>Background Paths</title>
        <defs>
          <linearGradient id="tealStroke" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="rgba(13,148,136,0.65)" />
            <stop offset="50%" stopColor="rgba(20,184,166,0.75)" />
            <stop offset="100%" stopColor="rgba(13,148,136,0.65)" />
          </linearGradient>
        </defs>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="url(#tealStroke)"
            strokeWidth={path.width}
            strokeOpacity={0.45 + path.id * 0.025}
            initial={{ pathLength: 0.4, opacity: 0.8 }}
            animate={{
              pathLength: 1,
              opacity: [0.5, 0.9, 0.5],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: 'linear',
            }}
          />
        ))}
      </svg>
    </div>
  );
}

export interface BackgroundPathsProps {
  title?: string;
}

export function BackgroundPaths({
  title = 'Background Paths',
}: BackgroundPathsProps) {
  const words = title.split(' ');

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900/50 to-black" />
      
      <div className="absolute inset-0">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold mb-8 tracking-tighter">
            {words.map((word, wordIndex) => (
              <span
                key={wordIndex}
                className="inline-block mr-4 last:mr-0"
              >
                {word.split('').map((letter, letterIndex) => (
                  <motion.span
                    key={`${wordIndex}-${letterIndex}`}
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      delay: wordIndex * 0.1 + letterIndex * 0.03,
                      type: 'spring',
                      stiffness: 150,
                      damping: 25,
                    }}
                    className="inline-block text-transparent bg-clip-text 
                      bg-gradient-to-r from-white via-teal-100 to-teal-300"
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
            ))}
          </h1>

          <div
            className="inline-block group relative bg-gradient-to-b from-teal-500/20 to-teal-600/10 
              p-px rounded-2xl backdrop-blur-lg 
              overflow-hidden shadow-lg shadow-teal-500/20 hover:shadow-xl hover:shadow-teal-500/30 transition-shadow duration-300"
          >
            <Button
              variant="ghost"
              className="rounded-[1.15rem] px-8 py-6 text-lg font-semibold backdrop-blur-md 
                bg-gray-900/80 hover:bg-gray-900/90 border border-teal-500/30 hover:border-teal-400/50
                text-white transition-all duration-300 
                group-hover:-translate-y-0.5 hover:shadow-md hover:shadow-teal-500/20"
            >
              {/* <span className="opacity-90 group-hover:opacity-100 transition-opacity">
                Discover Excellence
              </span> */}
              <span
                className="ml-3 opacity-70 group-hover:opacity-100 group-hover:translate-x-1.5 
                  transition-all duration-300 text-teal-300"
              >
                →
              </span>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}