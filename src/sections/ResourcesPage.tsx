import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import ResourceCard from '../components/ResourceCard';
import FilterPalette from '../components/FilterPalette';
import { resourcesData, categories } from '../data/resourcesData';

const ResourcesPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter resources based on active category and search query
  const filteredResources = useMemo(() => {
    return resourcesData.filter((resource) => {
      const matchesCategory = activeCategory === 'All' || resource.category === activeCategory;
      const matchesSearch = searchQuery === '' || 
        resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-600/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/10 backdrop-blur-sm rounded-full border border-teal-500/30 mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <svg className="w-5 h-5 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <span className="text-teal-300 font-medium">Resource Library</span>
            </motion.div>

            {/* Title */}
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
              Insights & 
              <span className="block bg-gradient-to-r from-teal-400 via-teal-300 to-teal-500 bg-clip-text text-transparent">
                Resources
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Explore our collection of guides, tutorials, case studies, and insights to help you harness the power of AI in your business.
            </p>

            {/* Search Bar */}
            <motion.div
              className="max-w-2xl mx-auto relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search resources..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-6 py-4 pl-14 bg-slate-900/60 backdrop-blur-xl border border-slate-700 rounded-2xl text-white placeholder-slate-400 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all duration-300"
                />
                <svg
                  className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-slate-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-teal-400 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="relative px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Resources Grid - Takes 3 columns */}
            <div className="lg:col-span-3">
              {/* Results Count */}
              <motion.div
                className="mb-8 flex items-center justify-between"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <div>
                  <h2 className="text-2xl font-bold text-white">
                    {activeCategory === 'All' ? 'All Resources' : activeCategory}
                  </h2>
                  <p className="text-slate-400 mt-1">
                    Showing {filteredResources.length} {filteredResources.length === 1 ? 'resource' : 'resources'}
                  </p>
                </div>
                
                {/* View Toggle (Optional) */}
                <div className="hidden md:flex items-center gap-2 bg-slate-900/60 backdrop-blur-xl rounded-lg p-1 border border-slate-800">
                  <button className="px-4 py-2 rounded-md bg-teal-500/20 text-teal-300 border border-teal-500/50">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                  </button>
                  <button className="px-4 py-2 rounded-md text-slate-400 hover:text-teal-400 transition-colors">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </button>
                </div>
              </motion.div>

              {/* Resources Grid */}
              {filteredResources.length > 0 ? (
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {filteredResources.map((resource) => (
                    <motion.div key={resource.id} variants={itemVariants}>
                      <ResourceCard resource={resource} />
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  className="text-center py-20"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <svg className="w-20 h-20 text-slate-700 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-2xl font-bold text-slate-400 mb-2">No resources found</h3>
                  <p className="text-slate-500">Try adjusting your search or filter criteria</p>
                </motion.div>
              )}
            </div>

            {/* Filter Palette - Takes 1 column */}
            <div className="lg:col-span-1">
              <FilterPalette
                categories={categories}
                activeCategory={activeCategory}
                onCategoryChange={setActiveCategory}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="relative px-6 pb-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="bg-gradient-to-r from-teal-500/10 via-teal-600/10 to-teal-500/10 backdrop-blur-xl rounded-3xl p-12 border border-teal-500/20 text-center relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-transparent" />
            
            <div className="relative z-10">
              <h2 className="text-4xl font-bold text-white mb-4">
                Can't find what you're looking for?
              </h2>
              <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                Get in touch with our team and we'll help you find the perfect solution for your needs.
              </p>
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-bold rounded-xl hover:from-teal-600 hover:to-teal-700 transition-all duration-300 shadow-lg shadow-teal-500/30"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ResourcesPage;
