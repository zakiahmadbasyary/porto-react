import { motion } from "framer-motion";
import foto1 from "../../assets/profile/foto1.jpeg";
import foto2 from "../../assets/profile/foto2.jpg";
import foto3 from "../../assets/profile/foto3.jpeg";
import foto4 from "../../assets/profile/foto4.jpeg";

export default function Contact() {
  const galleryPhotos = [
    { src: foto1, alt: "Zaki Ahmad Basyary portrait 1", label: "IMG_01.JPG" },
    { src: foto2, alt: "Zaki Ahmad Basyary portrait 2", label: "IMG_02.JPG" },
    { src: foto3, alt: "Zaki Ahmad Basyary portrait 3", label: "IMG_03.JPG" },
    { src: foto4, alt: "Zaki Ahmad Basyary portrait 4", label: "IMG_04.JPG" },
  ];

  return (
    <section id="contact" className="py-20 bg-[#0A0A0A] border-t border-[#27272A]">
      <div className="max-w-[1120px] mx-auto px-5 md:px-8">
        
        {/* SECTION LABEL */}
        <div className="font-mono text-xs text-[#10B981] tracking-widest uppercase mb-3">
          06 / CONTACT &amp; GALLERY
        </div>

        {/* 2-COLUMN GRID */}
        <div className="grid md:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: CONTACT INFORMATION BOX (7 cols) */}
          <motion.div
            className="md:col-span-7 bg-[#171717] border border-[#27272A] rounded-lg p-6 sm:p-8 space-y-6 relative overflow-hidden"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#F5F5F5] tracking-tight leading-tight">
              Let's collaborate and build impactful products together.
            </h2>

            <p className="text-[#A1A1AA] text-sm leading-relaxed">
              I am always open to discussions regarding career opportunities, AI research projects, web application development, or data processing consulting. Please feel free to contact me via email or the professional networks listed below.
            </p>

            {/* ACTION BUTTONS */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href="mailto:zakiahmadbasyary@gmail.com"
                className="bg-[#F5F5F5] text-[#0A0A0A] hover:bg-[#E5E2E1] font-medium text-xs sm:text-sm px-5 py-2.5 rounded transition-colors flex items-center gap-2"
              >
                <span>Send Email</span>
                <span className="font-mono">→</span>
              </a>

              <a
                href="https://linkedin.com/in/zaki-ahmad-basyary"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#111111] text-[#F5F5F5] hover:bg-[#1F1F23] border border-[#27272A] hover:border-[#3F3F46] font-medium text-xs sm:text-sm px-5 py-2.5 rounded transition-colors flex items-center gap-2"
              >
                <span>LinkedIn Profile</span>
                <span className="font-mono text-xs text-[#71717A]">↗</span>
              </a>
            </div>

            {/* DIRECT CONTACT INFO METADATA */}
            <div className="pt-6 border-t border-[#27272A] grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs text-[#71717A]">
              <div>
                <span className="text-[#A1A1AA] block mb-1">EMAIL DIRECT:</span>
                <a href="mailto:zakiahmadbasyary@gmail.com" className="text-[#10B981] hover:underline">
                  zakiahmadbasyary@gmail.com
                </a>
              </div>
              <div>
                <span className="text-[#A1A1AA] block mb-1">LOCATION:</span>
                <span className="text-[#F5F5F5]">Bandar Lampung, Indonesia</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: 4-PHOTO MINI GALLERY (5 cols) */}
          <motion.div
            className="md:col-span-5 space-y-3"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {/* GALLERY HEADER */}
            <div className="flex items-center justify-between font-mono text-xs text-[#71717A] px-1 pb-1">
              <span className="flex items-center gap-1.5 text-[#A1A1AA]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                GALLERY // SNAPSHOTS
              </span>
              <span>4 ITEMS</span>
            </div>

            {/* 2X2 GALLERY GRID */}
            <div className="grid grid-cols-2 gap-3">
              {galleryPhotos.map((photo, i) => (
                <div
                  key={i}
                  className="bg-[#171717] border border-[#27272A] hover:border-[#10B981]/50 p-1.5 rounded-lg overflow-hidden group transition-all"
                >
                  <div className="aspect-square overflow-hidden rounded bg-[#111111] relative">
                    <img
                      src={photo.src}
                      className="w-full h-full object-cover filter contrast-[1.03] grayscale-[0.25] group-hover:grayscale-0 transition-all duration-300 group-hover:scale-105"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
