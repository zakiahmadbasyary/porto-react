import { motion } from "framer-motion";
import { skills } from "../../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-[#0A0A0A] border-t border-[#27272A]">
      <div className="max-w-[1120px] mx-auto px-5 md:px-8">

        {/* SECTION LABEL */}
        <div className="font-mono text-xs text-[#10B981] tracking-widest uppercase mb-3">
          03 / SKILLS
        </div>

        {/* SECTION HEADING */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#F5F5F5] tracking-tight">
            Keahlian &amp;  Teknologi
          </h2>
          <p className="text-[#A1A1AA] text-sm mt-2 max-w-xl">
            Bahasa pemrograman, framework, pustaka data, dan perangkat lunak yang saya gunakan dalam pengembangan produk.
          </p>
        </div>

        {/* 2-COLUMN CATEGORY GRID */}
        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((cat, index) => (
            <motion.div
              key={index}
              className="bg-[#171717] border border-[#27272A] hover:border-[#3F3F46] rounded-md p-6 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
            >
              {/* CATEGORY HEADER */}
              <div className="flex items-center gap-2 mb-6 pb-3 border-b border-[#27272A]">
                <span className="font-mono text-xs text-[#10B981] bg-[#10B981]/10 px-2 py-0.5 rounded border border-[#10B981]/20">
                  {`cat_0${index + 1}`}
                </span>
                <h3 className="font-medium text-[#F5F5F5] text-base">
                  {cat.category}
                </h3>
              </div>

              {/* SKILL TECH BADGES (Replacing arbitrary percentage bars) */}
              <div className="flex flex-wrap gap-2.5">
                {cat.items.map((skill, i) => (
                  <div
                    key={i}
                    className="font-mono text-xs text-[#A1A1AA] hover:text-[#F5F5F5] bg-[#111111] hover:bg-[#1F1F23] border border-[#27272A] hover:border-[#10B981]/40 px-3 py-1.5 rounded transition-all flex items-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]/60" />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}