import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 bg-transparent border-t border-[#1e293b]/60">
      <div className="max-w-[1120px] mx-auto px-5 md:px-8">
        
        {/* HEADER ROW */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="font-mono text-xs text-[#10B981] tracking-widest uppercase mb-2">
              01 // ABOUT
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#F5F5F5] tracking-tight">
              About Me
            </h2>
          </div>

          <div className="hidden sm:flex items-center gap-2 font-mono text-xs text-[#71717A]">
            {/* <span>SYS.INFO</span> */}
            <span className="w-12 h-[1px] bg-[#27272A]" />
          </div>
        </div>

        {/* 2-COLUMN MAIN CONTENT GRID */}
        <div className="grid md:grid-cols-12 gap-10 md:gap-12 items-start mb-12">
          
          {/* LEFT COLUMN: LARGE STATEMENT & CURRENT FOCUS */}
          <motion.div
            className="md:col-span-5 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl sm:text-3xl font-semibold text-[#F5F5F5] leading-tight">
              Turning raw operational data and abstract product ideas into resilient, human-centered digital solutions.
            </h3>

            {/* CURRENT FOCUS CHIP BOX */}
            <div className="bg-[#171717] border border-[#27272A] rounded-md p-4 flex items-center gap-3">
              <div className="bg-[#10B981]/10 border border-[#10B981]/30 text-[#10B981] px-2 py-1 rounded font-mono text-xs flex items-center justify-center">
                &gt;_
              </div>
              <span className="font-mono text-xs text-[#A1A1AA]">
                <strong className="text-[#F5F5F5] font-normal">Current Focus:</strong> Web Development &amp; Artificial Intelligence Ecosystem
              </span>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: DETAILED BIO PARAGRAPHS */}
          <motion.div
            className="md:col-span-7 space-y-4 text-sm sm:text-base text-[#A1A1AA] leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <p>
            Experienced in data analysis, machine learning, and artificial intelligence to transform data into
            insights that support decision-making. Experienced in managing end-to-end data analysis
            workflows, ranging from data preprocessing, exploratory data analysis (EDA), visualization,
            and dashboard development to the building and evaluation of machine learning models using
            Python, SQL, Tableau, and various AI frameworks. Skilled at developing data-driven solutions
            to address business and operational needs.
            </p>
          </motion.div>

        </div>

        {/* BOTTOM METADATA GRID (4 CARDS) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* CARD 1: EDUCATION */}
          <motion.div
            className="bg-[#0f172a]/60 backdrop-blur-md border border-[#1e293b] hover:border-[#0284c7]/60 rounded-lg p-5 transition-all shadow-lg flex flex-col justify-between group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.4 }}
          >
            <div>
              <div className="text-[#10B981] mb-4">
                <svg className="w-6 h-6 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </div>
              <div className="font-mono text-[11px] text-[#71717A] uppercase tracking-wider mb-1">
                EDUCATION
              </div>
              <div className="font-semibold text-sm text-[#F5F5F5] leading-snug group-hover:text-[#38bdf8] transition-colors">
                S1 Teknik Informatika
              </div>
              <div className="text-xs text-[#A1A1AA] mt-1 font-mono">
                Universitas Lampung
              </div>
            </div>
          </motion.div>

          {/* CARD 2: LOCATION */}
          <motion.div
            className="bg-[#0f172a]/60 backdrop-blur-md border border-[#1e293b] hover:border-[#0284c7]/60 rounded-lg p-5 transition-all shadow-lg flex flex-col justify-between group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            <div>
              <div className="text-[#10B981] mb-4">
                <svg className="w-6 h-6 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="font-mono text-[11px] text-[#71717A] uppercase tracking-wider mb-1">
                LOCATION
              </div>
              <div className="font-semibold text-sm text-[#F5F5F5] leading-snug group-hover:text-[#38bdf8] transition-colors">
                Lampung, Indonesia /
              </div>
              <div className="text-xs text-[#A1A1AA] mt-1 font-mono">
                UTC+7 (WIB)
              </div>
            </div>
          </motion.div>

          {/* CARD 3: CORE DISCIPLINE */}
          <motion.div
            className="bg-[#0f172a]/60 backdrop-blur-md border border-[#1e293b] hover:border-[#0284c7]/60 rounded-lg p-5 transition-all shadow-lg flex flex-col justify-between group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            <div>
              <div className="text-[#10B981] mb-4">
                <svg className="w-6 h-6 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <div className="font-mono text-[11px] text-[#71717A] uppercase tracking-wider mb-1">
                CORE DISCIPLINE
              </div>
              <div className="font-semibold text-sm text-[#F5F5F5] leading-snug group-hover:text-[#38bdf8] transition-colors">
                Full-Stack Dev &amp; Data Systems
              </div>
              <div className="text-xs text-[#A1A1AA] mt-1 font-mono">
                Web &amp; Artificial Inteligence
              </div>
            </div>
          </motion.div>

          {/* CARD 4: CURRENT STATUS */}
          <motion.div
            className="bg-[#0f172a]/60 backdrop-blur-md border border-[#1e293b] hover:border-[#0284c7]/60 rounded-lg p-5 transition-all shadow-lg flex flex-col justify-between group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.4 }}
          >
            <div>
              <div className="text-[#10B981] mb-4">
                <svg className="w-6 h-6 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="font-mono text-[11px] text-[#71717A] uppercase tracking-wider mb-1">
                CURRENT STATUS
              </div>
              <div className="font-semibold text-sm text-[#F5F5F5] leading-snug group-hover:text-[#38bdf8] transition-colors">
                System Intern in GGP &amp; Freelance
              </div>
              <div className="text-xs text-[#10B981] mt-1 font-mono">
                Work and Projects Available
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
