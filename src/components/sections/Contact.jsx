import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-[#0A0A0A] border-t border-[#27272A]">
      <div className="max-w-[1120px] mx-auto px-5 md:px-8">
        
        {/* SECTION LABEL */}
        <div className="font-mono text-xs text-[#10B981] tracking-widest uppercase mb-3">
          06 / CONTACT
        </div>

        {/* CONTACT BOX */}
        <motion.div
          className="bg-[#171717] border border-[#27272A] rounded-lg p-8 sm:p-12 relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-2xl space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#F5F5F5] tracking-tight leading-tight">
              Mari berkolaborasi dan bangun produk berdaya guna bersama.
            </h2>

            <p className="text-[#A1A1AA] text-sm sm:text-base leading-relaxed">
              Saya selalu terbuka untuk diskusi mengenai peluang karir, proyek riset AI, pembuatan web application, maupun konsultasi pengolahan data. Silakan hubungi saya melalui email atau jaringan profesional berikut.
            </p>

            {/* ACTION BUTTONS */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="mailto:zakiahmadbasyary@gmail.com"
                className="bg-[#F5F5F5] text-[#0A0A0A] hover:bg-[#E5E2E1] font-medium text-sm px-6 py-3 rounded transition-colors flex items-center gap-2"
              >
                <span>Kirim Surat Elektronik</span>
                <span className="font-mono">→</span>
              </a>

              <a
                href="https://linkedin.com/in/zaki-ahmad-basyary"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#111111] text-[#F5F5F5] hover:bg-[#1F1F23] border border-[#27272A] hover:border-[#3F3F46] font-medium text-sm px-6 py-3 rounded transition-colors flex items-center gap-2"
              >
                <span>LinkedIn Profile</span>
                <span className="font-mono text-xs text-[#71717A]">↗</span>
              </a>
            </div>

            {/* DIRECT CONTACT INFO METADATA */}
            <div className="pt-8 border-t border-[#27272A] grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs text-[#71717A]">
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
          </div>
        </motion.div>

      </div>
    </section>
  );
}
