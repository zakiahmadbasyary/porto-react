import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 bg-[#0A0A0A] border-t border-[#27272A]">
      <div className="max-w-[1120px] mx-auto px-5 md:px-8">
        
        {/* SECTION LABEL */}
        <div className="font-mono text-xs text-[#10B981] tracking-widest uppercase mb-3">
          01 / ABOUT
        </div>

        {/* SECTION TITLE */}
        <h2 className="text-2xl md:text-3xl font-semibold text-[#F5F5F5] tracking-tight mb-10">
          Tentang Saya
        </h2>

        {/* EDITORIAL 2-COLUMN GRID */}
        <div className="grid md:grid-cols-12 gap-10 md:gap-12 items-start">
          
          {/* LEFT: LARGE STATEMENT */}
          <motion.div
            className="md:col-span-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xl md:text-2xl font-medium text-[#F5F5F5] leading-snug border-l-2 border-[#10B981] pl-5 py-1">
              &ldquo;Mengolah data mentah dan ide produk abstrak menjadi aplikasi digital yang tangguh, presisi, dan bermanfaat.&rdquo;
            </p>
          </motion.div>

          {/* RIGHT: DETAILS & METADATA CARD */}
          <motion.div
            className="md:col-span-6 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-[#A1A1AA] text-base leading-relaxed">
              Saya adalah mahasiswa Teknik Informatika Universitas Lampung yang berdedikasi tinggi dalam mengeksplorasi ekosistem web modern dan AI. Pengalaman saya mencakup kepemimpinan di laboratorium riset, analisa tren data finansial, hingga pengembangan sistem machine learning untuk visi komputer (computer vision) dan NLP.
            </p>

            {/* METADATA CONTAINER */}
            <div className="bg-[#171717] border border-[#27272A] rounded-lg p-5 space-y-4 font-mono text-xs">
              <div className="flex items-center justify-between border-b border-[#27272A] pb-2">
                <span className="text-[#71717A]">PENDIDIKAN</span>
                <span className="text-[#F5F5F5] font-medium">S1 Teknik Informatika — Unila</span>
              </div>

              <div className="flex items-center justify-between border-b border-[#27272A] pb-2">
                <span className="text-[#71717A]">FOKUS UTAMA</span>
                <span className="text-[#10B981]">Web Dev, ML &amp; Data Analytics</span>
              </div>

              <div className="flex items-center justify-between border-b border-[#27272A] pb-2">
                <span className="text-[#71717A]">DOMISILI</span>
                <span className="text-[#F5F5F5]">Lampung, Indonesia</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-[#71717A]">STATUS AKADEMIK</span>
                <span className="text-[#F5F5F5]">Aktif (2022 – Sekarang)</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
