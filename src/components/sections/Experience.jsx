import { motion } from "framer-motion";
import { experiences } from "../../data/experience";
import { educations } from "../../data/education";

export default function Experience() {
  return (
    <motion.section
      id="experience"
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
            Jejak Karir & Akademik
          </h2>
          <p className="text-gray-500 mt-2">
            Perjalanan profesional dan latar belakang pendidikan saya yang
            membentuk keterampilan saya saat ini.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-10 mt-10">

          {/* 🔵 EXPERIENCE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-lg font-semibold text-gray-700 mb-6 flex items-center gap-2">
              💼 Pengalaman Kerja
            </h3>

            <div className="space-y-6 border-l-2 border-blue-200 pl-6 relative">
              {experiences.map((item, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: index * 0.2 }}
                >
                  <span
                    className={`w-3 h-3 rounded-full absolute -left-[31px] top-2 ${
                      item.active ? "bg-blue-600" : "bg-gray-400"
                    }`}
                  ></span>

                  <h4 className="font-semibold text-gray-800">{item.role}</h4>
                  <p className="text-sm text-blue-600">
                    {item.company} ({item.period})
                  </p>
                  <p className="text-gray-500 text-sm mt-2">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* 🟢 EDUCATION */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-lg font-semibold text-gray-700 mb-6 flex items-center gap-2">
              🎓 Riwayat Pendidikan
            </h3>

            <div className="space-y-6">
              {educations.map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: index * 0.2 }}
                >
                  <h4 className="font-semibold text-gray-800">{item.title}</h4>
                  <p className="text-green-600 text-sm">
                    {item.institution} ({item.period})
                  </p>
                  <p className="text-gray-500 text-sm mt-2">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
}