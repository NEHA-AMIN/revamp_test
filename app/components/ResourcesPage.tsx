"use client";

import React, { useState, useEffect } from "react";
import { BackgroundPaths } from "@/components/ui/shadcn-io/background-paths";
import { useTheme } from "../providers/ThemeProvider";
import { resourcesData } from "../../src/data/resourcesData";

export type Resource = {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  date?: string;
  href?: string;
  ctaLabel?: string;
};

export type ResourcesPageProps = {
  resources?: Resource[];
  footerSlot?: React.ReactNode;
};


export const ResourcesPage: React.FC<ResourcesPageProps> = ({
  resources = resourcesData.map(r => ({
    id: r.id,
    title: r.title,
    category: r.category,
    excerpt: r.description,
    date: new Date(r.publishDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
    href: r.url || (r.videoId ? `https://www.youtube.com/watch?v=${r.videoId}` : '#'),
    ctaLabel: r.type === 'video' ? 'Watch' : 'Read',
  })),
  footerSlot,
}) => {
  const { theme, resolvedTheme } = useTheme();
  const [isThemeTransitioning, setIsThemeTransitioning] = useState(false);
  const [mounted, setMounted] = useState(false);

  const [activeCategory, setActiveCategory] = useState('All');

  // Filter resources based on active category
  const filteredResources = resources.filter(resource => {
    if (activeCategory === 'All') return true;
    return resource.category.toLowerCase().includes(activeCategory.toLowerCase());
  });

  // Handle SSR hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  // Listen for theme changes and handle transitions
  useEffect(() => {
    const handleThemeChange = () => {
      setIsThemeTransitioning(true);
      setTimeout(() => setIsThemeTransitioning(false), 500);
    };

    window.addEventListener('theme-change', handleThemeChange);
    return () => window.removeEventListener('theme-change', handleThemeChange);
  }, []);

  
  return (
    <div 
      className="relative min-h-screen bg-black text-white transition-colors duration-300"
      data-theme={mounted ? resolvedTheme : 'light'}
      data-theme-preference={mounted ? theme : 'system'}
    >
      {/* Hero Section */}
      <div className="relative">
        <BackgroundPaths title="Resources Hub" />
      </div>
      
      {/* Main Content Section */}
      <section className="relative bg-black transition-colors duration-500">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 py-16 sm:py-24">

          {/* Featured Content */}
          <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-6 md:gap-8 mb-12">
            {/* Left visual */}
            <div className="rounded-2xl bg-gradient-to-br from-teal-900 via-teal-800 to-teal-700 p-6 md:p-8 shadow-sm transition-all duration-500 hover:shadow-lg">
              <div className="aspect-[16/9] rounded-xl bg-black/40 backdrop-blur-sm ring-1 ring-teal-500/30 flex items-center justify-center text-gray-200 transition-colors duration-300">
                <span className="text-sm">Featured visual placeholder</span>
              </div>
            </div>

            {/* Right content */}
            <div className="rounded-2xl border border-gray-700 bg-gray-900/60 backdrop-blur-sm p-6 md:p-8 transition-all duration-500 hover:shadow-lg hover:bg-gray-900/80">
              <p className="text-xs font-semibold text-teal-300 mb-2">
                {resources[0]?.category}
              </p>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-100 mb-3">
                {resources[0]?.title}
              </h3>
              <p className="text-sm md:text-base text-gray-300 mb-4">
                {resources[0]?.excerpt}
              </p>
              <p className="text-xs text-gray-400 mb-5">
                {resources[0]?.date}
              </p>
              <a
                href={resources[0]?.href ?? "#"}
                className="inline-flex items-center rounded-full bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 text-sm font-medium shadow-sm transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
              >
                {resources[0]?.ctaLabel ?? "Read"} →
              </a>
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap items-center gap-3 justify-center mb-12">
            {[
              "All",
              "AI & Automation",
              "Best Practices",
              "Tutorials",
              "Industry Insights",
              "Case Studies",
              "Product Updates",
            ].map((label) => (
              <button
                key={label}
                onClick={() => setActiveCategory(label)}
                className={`inline-flex items-center rounded-full px-4 py-2 text-sm font-medium border transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                  activeCategory === label
                    ? "bg-teal-500 text-white border-teal-500 hover:bg-teal-600 focus:ring-teal-500 shadow-lg"
                    : "bg-gray-900/60 text-gray-200 border-gray-700 hover:bg-gray-800 hover:shadow-md focus:ring-gray-500 backdrop-blur-sm"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Resources Grid */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">
              {activeCategory === 'All' ? 'All Resources' : activeCategory}
            </h2>
            <p className="text-gray-400 mb-8">
              Showing {filteredResources.length} {filteredResources.length === 1 ? 'resource' : 'resources'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((resource) => (
              <div 
                key={resource.id}
                className="rounded-2xl border border-gray-700 bg-gray-900/60 backdrop-blur-sm p-6 transition-all duration-300 hover:shadow-lg hover:bg-gray-900/80 hover:border-teal-500/50 group"
              >
                <p className="text-xs font-semibold text-teal-300 mb-2">
                  {resource.category}
                </p>
                <h3 className="text-lg font-semibold text-gray-100 mb-3 group-hover:text-teal-400 transition-colors">
                  {resource.title}
                </h3>
                <p className="text-sm text-gray-300 mb-4 line-clamp-3">
                  {resource.excerpt}
                </p>
                <p className="text-xs text-gray-400 mb-4">
                  {resource.date}
                </p>
                <a
                  href={resource.href ?? "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-full bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 text-sm font-medium shadow-sm transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
                >
                  {resource.ctaLabel ?? "Read"} →
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Footer slot */}
        {footerSlot && (
          <footer className="border-t border-gray-800 py-8 text-sm text-gray-300 transition-colors duration-500 bg-gray-900/50">
            <div className="mx-auto max-w-7xl px-6 sm:px-8">
              {footerSlot}
            </div>
          </footer>
        )}
      </section>
    </div>
  );
};

export default ResourcesPage;