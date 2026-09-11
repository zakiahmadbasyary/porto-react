import { motion } from "framer-motion";
import { experiences } from "../../data/experience";
import { educations } from "../../data/education";

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-[#0A0A0A] border-t border-[#27272A]">
      <div className="max-w-[1120px] mx-auto px-5 md:px-8">
        
        {/* SECTION LABEL */}
        <div className="font-mono text-xs text-[#10B981] tracking-widest uppercase mb-3">
          02 / EXPERIENCE
        </div>

        {/* SECTION HEADING */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#F5F5F5] tracking-tight">
            Pengalaman Kerja &amp; Pendidikan
          </h2>
          <p className="text-[#A1A1AA] text-sm mt-2 max-w-xl">
            Jejak rekam profesional dan latar belakang akademis dalam bidang teknologi dan analitik data.
          </p>
        </div>

        {/* 2-COLUMN TIMELINE GRID */}
        <div className="grid md:grid-cols-12 gap-10 md:gap-12">
          
          {/* WORK EXPERIENCE (7 cols on desktop) */}
          <div className="md:col-span-7 space-y-6">
            <h3 className="font-mono text-xs uppercase tracking-wider text-[#F5F5F5] flex items-center gap-2 mb-6">
              <span className="text-[#10B981]">&gt;</span> PENGALAMAN KERJA &amp; MAGANG
            </h3>

            <div className="relative border-l border-[#27272A] pl-6 space-y-8 ml-2">
              {experiences.map((item, index) => (
                <motion.div
                  key={index}
                  className="relative group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  {/* TIMELINE PULSE CIRCLE */}
                  <span
                    className={`absolute -left-[31px] top-1.5 w-2.5 h-2.5 rounded-full border ${
                      item.active
                        ? "bg-[#10B981] border-[#10B981] shadow-[0_0_8px_rgba(16,185,129,0.5)]"
                        : "bg-[#171717] border-[#27272A] group-hover:border-[#10B981]"
                    }`}
                  />

                  {/* EXPERIENCE CARD */}
                  <div className="bg-[#171717] border border-[#27272A] group-hover:border-[#3F3F46] rounded-md p-5 transition-colors">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h4 className="font-medium text-[#F5F5F5] text-base">
                        {item.role}
                      </h4>
                      <span className="font-mono text-xs text-[#10B981] bg-[#10B981]/10 px-2 py-0.5 rounded border border-[#10B981]/20">
                        {item.period}
                      </span>
                    </div>

                    <div className="font-mono text-xs text-[#A1A1AA] mb-3">
                      {item.company}
                    </div>

                    <p className="text-xs text-[#A1A1AA] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* EDUCATION (5 cols on desktop) */}
          <div className="md:col-span-5 space-y-6">
            <h3 className="font-mono text-xs uppercase tracking-wider text-[#F5F5F5] flex items-center gap-2 mb-6">
              <span className="text-[#10B981]">&gt;</span> RIWAYAT PENDIDIKAN
            </h3>

            <div className="space-y-4">
              {educations.map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-[#171717] border border-[#27272A] hover:border-[#3F3F46] rounded-md p-5 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h4 className="font-medium text-[#F5F5F5] text-sm">
                      {item.title}
                    </h4>
                    <span className="font-mono text-[11px] text-[#71717A]">
                      {item.period}
                    </span>
                  </div>

                  <div className="font-mono text-xs text-[#10B981] mb-2">
                    {item.institution}
                  </div>

                  <p className="text-xs text-[#A1A1AA] leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}