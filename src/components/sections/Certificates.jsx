import { motion } from "framer-motion";
import { certificates } from "../../data/certificates";

export default function Certificates() {
  return (
    <section id="certificates" className="py-20 bg-transparent border-t border-[#1e293b]/60">
      <div className="max-w-[1120px] mx-auto px-5 md:px-8">
        
        {/* SECTION LABEL */}
        <div className="font-mono text-xs text-[#10B981] tracking-widest uppercase mb-3">
          04 / CERTIFICATES
        </div>

        {/* SECTION HEADING */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#F5F5F5] tracking-tight">
            Certifications &amp; Credentials
          </h2>
          <p className="text-[#A1A1AA] text-sm mt-2 max-w-xl">
            Proof of official competence and completion of a professional training program.
          </p>
        </div>

        {/* 3-COLUMN CREDENTIAL GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certificates.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0f172a]/60 backdrop-blur-md border border-[#1e293b] hover:border-[#0284c7]/60 rounded-lg p-5 transition-all flex flex-col justify-between group shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
            >
              <div>
                {/* HEADER METADATA */}
                <div className="flex items-center justify-between font-mono text-[11px] text-[#71717A] mb-3">
                  <span className="text-[#10B981] bg-[#10B981]/10 px-2 py-0.5 rounded border border-[#10B981]/20">
                    VERIFIED
                  </span>
                  <span>{item.year}</span>
                </div>

                {/* CERTIFICATE TITLE */}
                <h3 className="font-medium text-[#F5F5F5] text-sm group-hover:text-[#10B981] transition-colors leading-snug">
                  {item.title}
                </h3>

                {/* ISSUER */}
                <div className="font-mono text-xs text-[#A1A1AA] mt-2">
                  {item.issuer}
                </div>
              </div>

              {/* ACTION LINK */}
              <div className="mt-5 pt-3 border-t border-[#27272A] flex items-center justify-between font-mono text-xs text-[#10B981]">
                <span>Lihat Sertifikat</span>
                <span className="transition-transform group-hover:translate-x-1">↗</span>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}