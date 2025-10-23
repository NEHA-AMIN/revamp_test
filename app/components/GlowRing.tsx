'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui';

type GlowRingProps = {
  className?: string;
  ctaText?: string;
  ctaHref?: string;
};

export default function GlowRing({ 
  className = '',
  ctaText = 'Get started free',
  ctaHref = '#'
}: GlowRingProps) {
  // Particle positions for cosmic effect
  const particles = Array.from({ length: 80 }, (_, i) => ({
    id: i,
    x: Math.random() * 120 - 60,
    y: Math.random() * 50 - 25,
    size: Math.random() * 3 + 0.5,
    delay: Math.random() * 3,
  }));

  return (
    <div className={`relative w-full h-[400px] flex items-center justify-center ${className}`}>
      {/* Cosmic particles background */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `calc(50% + ${particle.x}%)`,
            top: `calc(50% + ${particle.y}%)`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            background: particle.size > 2 ? 'rgba(20, 184, 166, 0.6)' : 'rgba(20, 184, 166, 0.4)',
            boxShadow: particle.size > 2 ? '0 0 8px rgba(20, 184, 166, 0.8)' : '0 0 4px rgba(20, 184, 166, 0.6)',
          }}
          animate={{
            opacity: [0.3, 1, 0.3],
            scale: [0.8, 1.4, 0.8],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: particle.delay,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Horizontal elliptical ring container */}
      <div className="relative w-[1100px] h-[400px] max-w-[90vw]">
        {/* Multiple glow layers for depth */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 1100px 400px at center, rgba(20, 184, 166, 0.25) 0%, transparent 60%)',
            filter: 'blur(120px)',
          }}
          animate={{
            opacity: [0.4, 0.7, 0.4],
            scale: [0.95, 1.08, 0.95],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        
        <motion.div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 900px 320px at center, rgba(20, 184, 166, 0.35) 0%, rgba(13, 148, 136, 0.15) 40%, transparent 70%)',
            filter: 'blur(60px)',
          }}
          animate={{
            opacity: [0.5, 0.8, 0.5],
            scale: [1, 1.03, 1],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.5,
          }}
        />

        {/* Tilting elliptical ring with subtle movement */}
        <motion.div
          className="absolute inset-0"
          animate={{
            rotateZ: [180, 185, 180, 175, 180],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <svg
            viewBox="0 0 1100 400"
            className="w-full h-full"
            style={{ filter: 'drop-shadow(0 0 40px rgba(20, 184, 166, 0.9))' }}
          >
            <defs>
              {/* Gradient for the ring */}
              <linearGradient id="ellipse-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(20, 184, 166, 0.1)" />
                <stop offset="15%" stopColor="rgba(20, 184, 166, 0.8)" />
                <stop offset="25%" stopColor="rgba(20, 184, 166, 1)" />
                <stop offset="35%" stopColor="rgba(20, 184, 166, 0.6)" />
                <stop offset="50%" stopColor="rgba(20, 184, 166, 0.2)" />
                <stop offset="65%" stopColor="rgba(20, 184, 166, 0.7)" />
                <stop offset="75%" stopColor="rgba(20, 184, 166, 1)" />
                <stop offset="85%" stopColor="rgba(20, 184, 166, 0.8)" />
                <stop offset="100%" stopColor="rgba(20, 184, 166, 0.1)" />
              </linearGradient>
            </defs>
            
            {/* Outer ellipse ring */}
            <ellipse
              cx="550"
              cy="200"
              rx="520"
              ry="175"
              fill="none"
              stroke="url(#ellipse-gradient)"
              strokeWidth="4"
              strokeLinecap="round"
              className="dark:opacity-100 opacity-80"
            />
            
            {/* Inner ellipse ring for depth */}
            <ellipse
              cx="550"
              cy="200"
              rx="490"
              ry="160"
              fill="none"
              stroke="url(#ellipse-gradient)"
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.5"
            />
          </svg>
        </motion.div>

        {/* Bright spots on the ring */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, index) => {
          const radians = (angle * Math.PI) / 180;
          const x = Math.cos(radians) * 520;
          const y = Math.sin(radians) * 175;
          
          return (
            <motion.div
              key={angle}
              className="absolute left-1/2 top-1/2 rounded-full"
              style={{
                width: index % 2 === 0 ? '6px' : '4px',
                height: index % 2 === 0 ? '6px' : '4px',
                marginLeft: `${x - (index % 2 === 0 ? 3 : 2)}px`,
                marginTop: `${y - (index % 2 === 0 ? 3 : 2)}px`,
                background: 'rgba(20, 184, 166, 1)',
                boxShadow: '0 0 30px rgba(20, 184, 166, 1), 0 0 50px rgba(20, 184, 166, 0.6)',
              }}
              animate={{
                opacity: [0.5, 1, 0.5],
                scale: [0.9, 1.4, 0.9],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: index * 0.2,
              }}
            />
          );
        })}

        {/* Inner glow pulse - multiple layers */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[350px] rounded-full"
          style={{
            background: 'radial-gradient(ellipse 1000px 350px at center, rgba(20, 184, 166, 0.3) 0%, rgba(13, 148, 136, 0.15) 30%, transparent 60%)',
            filter: 'blur(50px)',
          }}
          animate={{
            scale: [0.88, 1.15, 0.88],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[240px] rounded-full"
          style={{
            background: 'radial-gradient(ellipse 700px 240px at center, rgba(20, 184, 166, 0.4) 0%, transparent 50%)',
            filter: 'blur(30px)',
          }}
          animate={{
            scale: [0.92, 1.08, 0.92],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        />

      </div>
    </div>
  );
}
