'use client';
import React, { useState, useEffect } from 'react';
import { useTheme } from '../providers/ThemeProvider';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-full bg-slate-800/50 dark:bg-slate-700/50 border border-slate-700/30 dark:border-slate-600/30" />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative w-10 h-10 rounded-full bg-slate-800/50 dark:bg-slate-700/50 hover:bg-slate-700/70 dark:hover:bg-slate-600/70 transition-all duration-200 flex items-center justify-center border border-slate-700/30 dark:border-slate-600/30 group"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {/* Sun icon (shown in dark mode) */}
      <svg
        className={`absolute w-5 h-5 text-teal-400 transition-all duration-300 ${
          theme === 'dark' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'
        }`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="4" strokeWidth="2" />
        <path
          strokeLinecap="round"
          strokeWidth="2"
          d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41m11.32-11.32l1.41-1.41"
        />
      </svg>

      {/* Moon icon (shown in light mode) */}
      <svg
        className={`absolute w-5 h-5 text-slate-700 transition-all duration-300 ${
          theme === 'light' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-90 scale-0'
        }`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        />
      </svg>
    </button>
  );
}
