import { motion } from "framer-motion";
import { experiences } from "../../data/experience";

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
            Work Experience
          </h2>
          <p className="text-[#A1A1AA] text-sm mt-2 max-w-xl">
            Professional track record and work experience in the fields of technology and data analytics.
          </p>
        </div>

        {/* FULL WIDTH VERTICAL TIMELINE */}
        <div className="max-w-4xl">
          <div className="relative border-l border-[#27272A] pl-6 sm:pl-8 space-y-8 ml-2 sm:ml-4">
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
                  className={`absolute -left-[31px] sm:-left-[39px] top-2 w-2.5 h-2.5 rounded-full border ${
                    item.active
                      ? "bg-[#10B981] border-[#10B981] shadow-[0_0_8px_rgba(16,185,129,0.5)]"
                      : "bg-[#171717] border-[#27272A] group-hover:border-[#10B981]"
                  }`}
                />

                {/* EXPERIENCE CARD */}
                <div className="bg-[#171717] border border-[#27272A] group-hover:border-[#3F3F46] rounded-md p-6 transition-colors">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                    <h3 className="font-semibold text-[#F5F5F5] text-lg group-hover:text-[#10B981] transition-colors">
                      {item.role}
                    </h3>
                    <span className="font-mono text-xs text-[#10B981] bg-[#10B981]/10 px-2.5 py-1 rounded border border-[#10B981]/20">
                      {item.period}
                    </span>
                  </div>

                  <div className="font-mono text-xs text-[#E4E4E7] font-semibold mb-4 flex items-center gap-2">
                    <span>{item.company}</span>
                  </div>

                  {Array.isArray(item.description) ? (
                    <ul className="space-y-2 text-sm text-[#A1A1AA]">
                      {item.description.map((point, i) => (
                        <li key={i} className="flex items-start gap-2.5 leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] mt-2 shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm text-[#A1A1AA] leading-relaxed">
                      {item.description}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}