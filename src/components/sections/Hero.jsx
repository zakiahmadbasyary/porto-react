import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import foto1 from "../../assets/profile/foto1.jpeg";
import foto2 from "../../assets/profile/foto2.jpg";
import foto3 from "../../assets/profile/foto3.jpeg";
import foto4 from "../../assets/profile/foto4.jpeg";

export default function Hero() {
  const roles = [
    "Data Scientist",
    "Web Developer",
    "Machine Learning Engineer",
    "Data Analyst",
  ];

  const images = [foto1, foto2, foto3, foto4];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section
      id="hero"
      className="pt-28 md:pt-36 pb-16 md:pb-24 bg-[#0A0A0A] text-[#F5F5F5] relative overflow-hidden"
    >
      <div className="max-w-[1120px] mx-auto px-5 md:px-8">
        
        {/* HERO GRID */}
        <div className="grid md:grid-cols-12 gap-10 md:gap-12 items-center">
          
          {/* LEFT CONTENT (7 cols on desktop) */}
          <motion.div
            className="md:col-span-7 flex flex-col items-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >

            {/* MAIN HEADLINE */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#F5F5F5] leading-[1.15]">
              Hi, saya <span className="text-[#10B981]">Zaki Ahmad Basyary</span>.
            </h1>

            {/* DYNAMIC ROLE */}
            <div className="mt-3 text-xl sm:text-2xl font-mono text-[#A1A1AA] h-8 flex items-center">
              <span className="text-[#71717A] mr-2">&gt;</span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={roles[index]}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="text-[#F5F5F5] font-medium"
                >
                  {roles[index]}
                </motion.span>
              </AnimatePresence>
            </div>

            {/* DESCRIPTION */}
            <p className="mt-6 text-[#A1A1AA] text-base leading-relaxed max-w-xl">
              Saya memiliki minat besar dalam membangun aplikasi web yang interaktif dan responsif,
              serta mengolah data untuk menghasilkan insight bisnis yang bernilai.
              Berfokus pada pemrosesan data, machine learning, dan pengembangan web modern.
            </p>

            {/* CTA BUTTONS */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="bg-[#F5F5F5] text-[#0A0A0A] hover:bg-[#E5E2E1] font-medium text-sm px-6 py-3 rounded transition-all flex items-center gap-2 group"
              >
                <span>Lihat Portofolio</span>
                <span className="font-mono transition-transform group-hover:translate-x-1">→</span>
              </a>

              <a
                href="https://drive.google.com/file/d/1Pb8Ht4lQu_BTttuZtuFQjAX0Fn3JN7dR/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#171717] text-[#F5F5F5] hover:bg-[#1F1F23] border border-[#27272A] hover:border-[#3F3F46] font-medium text-sm px-6 py-3 rounded transition-all flex items-center gap-2"
              >
                <span>Unduh CV</span>
                <span className="font-mono text-xs text-[#71717A]">↗</span>
              </a>
            </div>

            {/* SOCIAL LINKS (LOGOS) */}
            <div className="mt-10 flex items-center gap-3">
              <span className="font-mono text-xs text-[#71717A] uppercase mr-1">Connect:</span>
              <a
                href="https://github.com/zakiahmadbasyary"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                title="GitHub Profile"
                className="bg-[#171717] hover:bg-[#1F1F23] text-[#A1A1AA] hover:text-[#10B981] border border-[#27272A] hover:border-[#10B981]/40 p-2.5 rounded-md transition-all flex items-center justify-center group"
              >
                <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>

              <a
                href="https://linkedin.com/in/zaki-ahmad-basyary"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                title="LinkedIn Profile"
                className="bg-[#171717] hover:bg-[#1F1F23] text-[#A1A1AA] hover:text-[#10B981] border border-[#27272A] hover:border-[#10B981]/40 p-2.5 rounded-md transition-all flex items-center justify-center group"
              >
                <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.6 1.6 0 0 0-1.6 1.6c0 .88.71 1.6 1.6 1.6.89 0 1.6-.72 1.6-1.6 0-.89-.71-1.6-1.6-1.6z" />
                </svg>
              </a>

              <a
                href="mailto:zakiahmadbasyary@gmail.com"
                aria-label="Send Email"
                title="Send Email"
                className="bg-[#171717] hover:bg-[#1F1F23] text-[#A1A1AA] hover:text-[#10B981] border border-[#27272A] hover:border-[#10B981]/40 p-2.5 rounded-md transition-all flex items-center justify-center group"
              >
                <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* RIGHT PORTRAIT CONTAINER (5 cols on desktop) */}
          <motion.div
            className="md:col-span-5 flex justify-center md:justify-end"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative w-full max-w-[340px] bg-[#171717] border border-[#27272A] rounded-lg p-3 group hover:border-[#3F3F46] transition-colors">

              {/* IMAGE PORTRAIT WITH FRAME */}
              <div className="relative aspect-square overflow-hidden rounded border border-[#27272A] bg-[#111111]">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={images[index]}
                    src={images[index]}
                    alt="Zaki Ahmad Basyary portrait"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full object-cover filter contrast-[1.05] grayscale-[0.15]"
                  />
                </AnimatePresence>

                {/* OVERLAY CORNER ACCENTS */}
                <div className="absolute top-2 left-2 font-mono text-[9px] text-[#10B981] bg-[#0A0A0A]/80 px-1.5 py-0.5 rounded border border-[#10B981]/30">
                  FULLSTACK & DATA
                </div>
              </div>

              {/* CARD FOOTER */}
              <div className="mt-3 pt-2.5 border-t border-[#27272A] flex items-center justify-between font-mono text-[11px] text-[#71717A]">
                <span>FOCUS: WEBSITE &amp; ARTIFICIAL INTELIGENCE</span>
              </div>
            </div>
          </motion.div>
        </div>


      </div>
    </section>
  );
}