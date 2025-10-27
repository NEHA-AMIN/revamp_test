import React from 'react';
import { motion } from 'framer-motion';

interface FilterPaletteProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const FilterPalette: React.FC<FilterPaletteProps> = ({
  categories,
  activeCategory,
  onCategoryChange,
}) => {
  return (
    <div className="sticky top-24 h-fit">
      <motion.div
        className="bg-slate-900/60 backdrop-blur-xl rounded-2xl p-6 border border-slate-800 shadow-2xl"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header */}
        <div className="mb-6">
          <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
            <svg className="w-6 h-6 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
            Filter Resources
          </h3>
          <p className="text-slate-400 text-sm">
            Browse by category
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="space-y-2">
          {categories.map((category, index) => {
            const isActive = activeCategory === category;
            
            return (
              <motion.button
                key={category}
                onClick={() => onCategoryChange(category)}
                className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 relative overflow-hidden group ${
                  isActive
                    ? 'bg-gradient-to-r from-teal-500/20 to-teal-600/20 text-teal-300 border border-teal-500/50 shadow-lg shadow-teal-500/20'
                    : 'bg-slate-800/40 text-slate-300 border border-slate-700/50 hover:border-teal-500/30 hover:text-teal-400'
                }`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Active Indicator */}
                {isActive && (
                  <motion.div
                    className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-teal-400 to-teal-600 rounded-r-full"
                    layoutId="activeIndicator"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}

                {/* Button Content */}
                <span className="relative z-10 flex items-center justify-between">
                  <span>{category}</span>
                  {isActive && (
                    <motion.svg
                      className="w-5 h-5 text-teal-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: 'spring', stiffness: 200 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </motion.svg>
                  )}
                </span>

                {/* Hover Glow Effect */}
                {!isActive && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-teal-500/0 via-teal-500/10 to-teal-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  />
                )}
              </motion.button>
            );
          })}
        </div>

        {/* Stats */}
        <motion.div
          className="mt-6 pt-6 border-t border-slate-700/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center justify-between text-sm">
            <span className="text-slate-400">Total Resources</span>
            <span className="text-teal-400 font-bold text-lg">22</span>
          </div>
        </motion.div>

        {/* Decorative Element */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />
      </motion.div>
    </div>
  );
};

export default FilterPalette;
