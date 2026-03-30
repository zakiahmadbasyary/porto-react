import { motion } from "framer-motion";
import { certificates } from "../../data/certificates";

export default function Certificates() {
  return (
    <motion.section
      id="certificates"
      className="py-20 bg-gray-50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto px-6">
        
        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-800">
            Sertifikasi
          </h2>
          <p className="text-gray-500 mt-2">
            Beberapa sertifikat keahlian yang telah saya peroleh.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          
          {certificates.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition block hover:scale-[1.03] hover:-translate-y-1"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="flex items-start gap-4">
                
                {/* ICON */}
                <div className="w-10 h-10 flex items-center justify-center bg-blue-100 text-blue-600 rounded-lg">
                  🎖️
                </div>

                {/* TEXT */}
                <div>
                  <h3 className="font-semibold text-gray-800 text-sm">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm">
                    {item.issuer}
                  </p>
                  <p className="text-gray-400 text-xs mt-1">
                    Issued: {item.year}
                  </p>

                  <p className="text-blue-600 text-xs mt-2">
                    Lihat Sertifikat →
                  </p>
                </div>

              </div>
            </motion.a>
          ))}

        </div>
      </div>
    </motion.section>
  );
}