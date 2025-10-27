import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Resource } from '../data/resourcesData';

interface ResourceCardProps {
  resource: Resource;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ resource }) => {
  const [isHovered, setIsHovered] = useState(false);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog':
        return (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        );
      case 'video':
        return (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 'case-study':
        return (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        );
      case 'guide':
        return (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        );
      default:
        return null;
    }
  };

  const handleClick = () => {
    if (resource.videoId) {
      window.open(`https://www.youtube.com/watch?v=${resource.videoId}`, '_blank');
    } else if (resource.url) {
      window.open(resource.url, '_blank');
    }
  };

  return (
    <motion.div
      className="relative h-[400px] rounded-xl overflow-hidden cursor-pointer group"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={handleClick}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={resource.thumbnail}
          alt={resource.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/20" />
      </div>

      {/* Content - Always Visible */}
      <div className="relative h-full flex flex-col justify-end p-6 z-10">
        {/* Type Badge */}
        <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 bg-slate-900/80 backdrop-blur-sm rounded-full border border-teal-500/30">
          <span className="text-teal-400">{getTypeIcon(resource.type)}</span>
          <span className="text-teal-300 text-sm font-medium capitalize">{resource.type}</span>
        </div>

        {/* Category Tag */}
        <motion.div
          className="absolute top-4 right-4 px-3 py-1 bg-teal-500/20 backdrop-blur-sm rounded-full border border-teal-500/40"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
        >
          <span className="text-teal-300 text-xs font-medium">{resource.category}</span>
        </motion.div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-white mb-2 line-clamp-2 group-hover:text-teal-400 transition-colors duration-300">
          {resource.title}
        </h3>

        {/* Meta Info */}
        <div className="flex items-center gap-3 text-slate-400 text-sm mb-3">
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {resource.readTime}
          </span>
          <span>•</span>
          <span>{new Date(resource.publishDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
        </div>

        {/* Hover Content Box */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              {/* Description */}
              <p className="text-slate-300 text-sm leading-relaxed mb-4 line-clamp-3">
                {resource.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {resource.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-slate-800/60 backdrop-blur-sm text-teal-400 text-xs rounded-md border border-slate-700"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* CTA Button */}
              <motion.button
                className="w-full py-3 px-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold rounded-lg hover:from-teal-600 hover:to-teal-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-teal-500/20"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {resource.type === 'video' ? 'Watch Now' : 'Read More'}
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Glow Effect on Hover */}
        <motion.div
          className="absolute inset-0 bg-teal-500/10 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Border Glow Effect */}
      <motion.div
        className="absolute inset-0 rounded-xl border-2 border-transparent pointer-events-none"
        animate={{
          borderColor: isHovered ? 'rgba(20, 184, 166, 0.5)' : 'rgba(20, 184, 166, 0)'
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default ResourceCard;
