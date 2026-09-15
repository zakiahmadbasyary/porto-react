import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../../data/projects";

export default function Projects() {
  // Store IDs of projects displayed in Large/Featured mode
  const [featuredIds, setFeaturedIds] = useState(() =>
    projects.filter((p) => p.defaultFeatured).map((p) => p.id)
  );

  // Category filter state
  const [activeCategory, setActiveCategory] = useState("All");

  // Get unique categories
  const categories = ["All", ...new Set(projects.map((p) => p.category))];

  // Toggle size mode for a project
  const toggleProjectSize = (id) => {
    setFeaturedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Reset to initial defaults
  const resetDefaults = () => {
    setFeaturedIds(projects.filter((p) => p.defaultFeatured).map((p) => p.id));
    setActiveCategory("All");
  };

  // Filter projects by category
  const categoryFiltered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  // Separate into featured (large) and secondary (compact)
  const featuredProjects = categoryFiltered.filter((p) =>
    featuredIds.includes(p.id)
  );
  const secondaryProjects = categoryFiltered.filter(
    (p) => !featuredIds.includes(p.id)
  );

  return (
    <section id="projects" className="py-20 bg-[#0A0A0A] border-t border-[#27272A]">
      <div className="max-w-[1120px] mx-auto px-5 md:px-8">
        
        {/* SECTION LABEL */}
        <div className="font-mono text-xs text-[#10B981] tracking-widest uppercase mb-3">
          05 / PROJECTS
        </div>

        {/* SECTION HEADING */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#F5F5F5] tracking-tight">
              Featured Projects &amp; Work
            </h2>
            <p className="text-[#A1A1AA] text-sm mt-2 max-w-xl">
              Software solutions, AI/Machine Learning systems, and data analytics dashboards developed across various domains.
            </p>
          </div>

          {/* RESET BUTTON */}
          <div>
            <button
              onClick={resetDefaults}
              className="text-xs font-mono text-[#A1A1AA] hover:text-[#10B981] bg-[#171717] hover:bg-[#222222] border border-[#27272A] hover:border-[#10B981]/50 px-3.5 py-1.5 rounded-full transition-all flex items-center gap-1.5"
              title="Reset layout to default"
            >
              <span>↺</span>
              <span>Reset Layout</span>
            </button>
          </div>
        </div>

        {/* CATEGORY FILTER BAR */}
        <div className="bg-[#141414] border border-[#27272A] p-3 sm:p-4 rounded-xl mb-12 flex items-center justify-between gap-4">
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none w-full">
            <span className="text-xs font-mono text-[#71717A] mr-2 hidden sm:inline">Category:</span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap ${
                  activeCategory === cat
                    ? "bg-[#10B981] text-[#0A0A0A] font-semibold shadow-sm"
                    : "text-[#A1A1AA] hover:text-[#F5F5F5] hover:bg-[#1E1E1E]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* ================================================================ */}
        {/* SECTION 1: FEATURED PROJECTS (LARGE VIEW)                        */}
        {/* ================================================================ */}
        {featuredProjects.length > 0 && (
          <div className="mb-16">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-mono text-xs uppercase tracking-wider text-[#10B981] flex items-center gap-2">
                <span>★</span> FEATURED PROJECTS
              </h3>
            </div>

            <div className="space-y-10">
              <AnimatePresence mode="popLayout">
                {featuredProjects.map((project, index) => {
                  const isEven = index % 2 === 0;

                  return (
                    <motion.div
                      layout
                      key={project.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4 }}
                      className="bg-[#171717] border border-[#27272A] hover:border-[#10B981]/50 rounded-xl overflow-hidden transition-all group relative"
                    >
                      <div className="grid md:grid-cols-12 items-center">
                        
                        {/* TEXT CONTENT */}
                        <div
                          className={`p-6 sm:p-8 md:col-span-6 space-y-4 ${
                            isEven ? "md:order-1" : "md:order-2"
                          }`}
                        >
                          {/* TOP HEADER & TOGGLE BUTTON */}
                          <div className="flex items-center justify-between font-mono text-[11px] text-[#10B981]">
                            <div className="flex items-center gap-2">
                              <span className="bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/20 px-2 py-0.5 rounded text-[10px] font-semibold">
                                FEATURED
                              </span>
                              <span className="text-[#A1A1AA]">{project.category}</span>
                            </div>

                            {/* TOGGLE TO COMPACT BUTTON */}
                            <button
                              onClick={() => toggleProjectSize(project.id)}
                              className="bg-[#222222] hover:bg-[#2A2A2E] text-[#A1A1AA] hover:text-[#10B981] border border-[#3F3F46] hover:border-[#10B981] px-2.5 py-1 rounded text-[11px] transition-all flex items-center gap-1 cursor-pointer"
                              title="Switch to compact view"
                            >
                              <span>Make Compact</span>
                            </button>
                          </div>

                          <h3 className="text-xl font-semibold text-[#F5F5F5] group-hover:text-[#10B981] transition-colors leading-snug">
                            {project.title}
                          </h3>

                          <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">
                            {project.description}
                          </p>

                          {/* TECH STACK BADGES */}
                          <div className="flex flex-wrap gap-2 pt-2">
                            {project.tech.map((t, i) => (
                              <span
                                key={i}
                                className="font-mono text-[11px] text-[#A1A1AA] bg-[#111111] border border-[#27272A] px-2.5 py-1 rounded"
                              >
                                {t}
                              </span>
                            ))}
                          </div>

                          {/* ACTION BUTTONS */}
                          <div className="flex items-center gap-4 pt-4 font-mono text-xs">
                            {project.demo && project.demo !== "-" && (
                              <a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#F5F5F5] text-[#0A0A0A] hover:bg-[#E5E2E1] font-medium px-4 py-2 rounded transition-colors flex items-center gap-1.5"
                              >
                                <span>Live Demo</span>
                                <span>→</span>
                              </a>
                            )}

                            {project.github && project.github !== "-" && (
                              <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#111111] text-[#F5F5F5] hover:bg-[#1F1F23] border border-[#27272A] hover:border-[#3F3F46] px-4 py-2 rounded transition-colors flex items-center gap-1.5"
                              >
                                <span>GitHub</span>
                                <span>↗</span>
                              </a>
                            )}
                          </div>
                        </div>

                        {/* PREVIEW IMAGE */}
                        <div
                          className={`md:col-span-6 h-full min-h-[240px] sm:min-h-[300px] relative overflow-hidden bg-[#111111] border-t md:border-t-0 border-[#27272A] ${
                            isEven
                              ? "md:order-2 md:border-l"
                              : "md:order-1 md:border-r"
                          }`}
                        >
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover filter contrast-[1.05] transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#171717]/60 via-transparent to-transparent opacity-60 pointer-events-none" />
                        </div>

                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>
        )}

        {/* ================================================================ */}
        {/* SECTION 2: SECONDARY PROJECTS (COMPACT VIEW)                      */}
        {/* ================================================================ */}
        {secondaryProjects.length > 0 && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-mono text-xs uppercase tracking-wider text-[#A1A1AA] flex items-center gap-2">
                <span className="text-[#10B981]">&gt;</span> OTHER PROJECTS
              </h3>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <AnimatePresence mode="popLayout">
                {secondaryProjects.map((project, index) => (
                  <motion.div
                    layout
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="bg-[#171717] border border-[#27272A] hover:border-[#3F3F46] rounded-xl overflow-hidden transition-all flex flex-col justify-between group relative"
                  >
                    {/* IMAGE HEADER WITH CATEGORY BADGE & TOGGLE BUTTON */}
                    <div className="relative h-44 overflow-hidden bg-[#111111] border-b border-[#27272A]">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover filter contrast-[1.03] transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#171717] via-transparent to-black/30 pointer-events-none" />

                      {/* TOP BADGE & TOGGLE BUTTON ON CARD */}
                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                        <span className="bg-[#0A0A0A]/80 backdrop-blur-md text-[#A1A1AA] border border-[#27272A] px-2 py-0.5 rounded text-[10px] font-mono">
                          {project.category}
                        </span>

                        <button
                          onClick={() => toggleProjectSize(project.id)}
                          className="bg-[#0A0A0A]/90 hover:bg-[#10B981] text-[#F5F5F5] hover:text-[#0A0A0A] border border-[#3F3F46] hover:border-[#10B981] px-2 py-1 rounded text-[10px] font-mono transition-all flex items-center gap-1 cursor-pointer shadow-md"
                          title="Switch to featured view"
                        >
                          <span>Make Featured</span>
                        </button>
                      </div>
                    </div>

                    {/* CARD BODY */}
                    <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                      <div>
                        <h4 className="font-medium text-[#F5F5F5] text-base group-hover:text-[#10B981] transition-colors leading-snug">
                          {project.title}
                        </h4>
                        <p className="text-xs text-[#A1A1AA] mt-2 leading-relaxed line-clamp-3">
                          {project.description}
                        </p>
                      </div>

                      <div>
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {project.tech.map((t, i) => (
                            <span
                              key={i}
                              className="font-mono text-[10px] text-[#A1A1AA] bg-[#111111] border border-[#27272A] px-2 py-0.5 rounded"
                            >
                              {t}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center justify-between font-mono text-xs pt-3 border-t border-[#27272A]">
                          {project.github && project.github !== "-" ? (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[#A1A1AA] hover:text-[#F5F5F5] transition-colors"
                            >
                              Source Code ↗
                            </a>
                          ) : (
                            <span className="text-[#71717A]">-</span>
                          )}

                          {project.demo && project.demo !== "-" ? (
                            <a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[#10B981] hover:underline transition-colors"
                            >
                              Live Demo →
                            </a>
                          ) : (
                            <span className="text-[#71717A]">-</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        )}

        {/* EMPTY STATE */}
        {categoryFiltered.length === 0 && (
          <div className="text-center py-16 bg-[#141414] border border-[#27272A] rounded-xl">
            <p className="text-[#A1A1AA] text-sm">No projects found in this category.</p>
            <button
              onClick={() => setActiveCategory("All")}
              className="mt-3 text-xs font-mono text-[#10B981] underline"
            >
              View All Categories
            </button>
          </div>
        )}

      </div>
    </section>
  );
}