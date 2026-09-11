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
            {/* TELEMETRY BADGE */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10B981]/10 border border-[#10B981]/30 font-mono text-xs text-[#10B981] mb-6">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
              <span>AVAILABLE FOR WORK</span>
            </div>

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

            {/* SOCIAL LINKS */}
            <div className="mt-10 flex items-center gap-6 text-xs font-mono text-[#71717A]">
              <span className="uppercase text-[#A1A1AA]">Connect:</span>
              <a
                href="https://github.com/zakiahmadbasyary"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#10B981] transition-colors"
              >
                GitHub ↗
              </a>
              <a
                href="https://linkedin.com/in/zaki-ahmad-basyary"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#10B981] transition-colors"
              >
                LinkedIn ↗
              </a>
              <a
                href="mailto:zakiahmadbasyary@gmail.com"
                className="hover:text-[#10B981] transition-colors"
              >
                Email ↗
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
                <span>FOCUS: WEB &amp; AI</span>
                <span className="text-[#10B981]">SYSTEM ACTIVE</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* METADATA INFO GRID */}
        <div className="mt-16 pt-10 border-t border-[#27272A] grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { label: "01 / LOKASI", title: "Lokasi Berdomisili", value: "Lampung, Indonesia" },
            { label: "02 / EMAIL", title: "Kontak Surat Elektronik", value: "zakibasyary@gmail.com" },
            { label: "03 / TELEPON", title: "Kontak Telepon / WA", value: "+62 897 3726 311" },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-[#171717] border border-[#27272A] hover:border-[#3F3F46] rounded p-4 transition-colors"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
            >
              <div className="font-mono text-[10px] text-[#10B981] uppercase tracking-wider mb-1">
                {item.label}
              </div>
              <div className="text-xs text-[#A1A1AA]">{item.title}</div>
              <div className="text-sm font-mono font-medium text-[#F5F5F5] mt-1">{item.value}</div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}