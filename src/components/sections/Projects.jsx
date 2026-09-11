import { motion } from "framer-motion";
import { projects } from "../../data/projects";

export default function Projects() {
  const featuredProjects = projects.slice(0, 4);
  const secondaryProjects = projects.slice(4);

  return (
    <section id="projects" className="py-20 bg-[#0A0A0A] border-t border-[#27272A]">
      <div className="max-w-[1120px] mx-auto px-5 md:px-8">
        
        {/* SECTION LABEL */}
        <div className="font-mono text-xs text-[#10B981] tracking-widest uppercase mb-3">
          05 / PROJECTS
        </div>

        {/* SECTION HEADING */}
        <div className="mb-14">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#F5F5F5] tracking-tight">
            Karya &amp; Proyek Pilihan
          </h2>
          <p className="text-[#A1A1AA] text-sm mt-2 max-w-xl">
            Solusi perangkat lunak, sistem AI/Machine Learning, dan dashboard analitik data yang telah dikembangkan.
          </p>
        </div>

        {/* FEATURED PROJECTS (ASYMMETRIC LAYOUT) */}
        <div className="space-y-12 mb-16">
          {featuredProjects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                className="bg-[#171717] border border-[#27272A] hover:border-[#3F3F46] rounded-lg overflow-hidden transition-all group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="grid md:grid-cols-12 items-center">
                  
                  {/* TEXT CONTENT */}
                  <div
                    className={`p-6 sm:p-8 md:col-span-6 space-y-4 ${
                      isEven ? "md:order-1" : "md:order-2"
                    }`}
                  >
                    <div className="flex items-center gap-2 font-mono text-[11px] text-[#10B981]">
                      <span>{`FEATURED_PROJECT_0${index + 1}`}</span>
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
                    className={`md:col-span-6 h-full min-h-[220px] sm:min-h-[280px] relative overflow-hidden bg-[#111111] border-t md:border-t-0 border-[#27272A] ${
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
        </div>

        {/* SECONDARY PROJECTS HEADER */}
        {secondaryProjects.length > 0 && (
          <div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-[#A1A1AA] mb-6 flex items-center gap-2">
              <span className="text-[#10B981]">&gt;</span> PROYEK PENDUKUNG LAINNYA
            </h3>

            <div className="grid sm:grid-cols-2 gap-6">
              {secondaryProjects.map((project, index) => (
                <motion.div
                  key={index}
                  className="bg-[#171717] border border-[#27272A] hover:border-[#3F3F46] rounded-lg overflow-hidden transition-all flex flex-col justify-between group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <div className="relative h-44 overflow-hidden bg-[#111111] border-b border-[#27272A]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover filter contrast-[1.03] transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

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
            </div>
          </div>
        )}

      </div>
    </section>
  );
}