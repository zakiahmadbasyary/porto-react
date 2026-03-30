import { motion } from "framer-motion";
import { skills } from "../../data/skills";

export default function Skills() {
  return (
    <motion.section
      id="skills"
      className="py-20 bg-white"
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
            Keahlian & Kemampuan
          </h2>
          <p className="text-gray-500 mt-2">
            Berikut adalah teknologi dan perangkat yang saya kuasai.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-10 mt-10">
          
          {skills.map((category, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 p-6 rounded-xl shadow-sm"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: index * 0.2 }}
            >
              
              <h3 className="font-semibold text-gray-700 mb-6">
                {category.category}
              </h3>

              <div className="space-y-5">
                
                {category.items.map((skill, i) => (
                  <div key={i}>
                    
                    {/* NAME + PERCENT */}
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">{skill.name}</span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>

                    {/* PROGRESS BAR (ANIMATED) */}
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        className="h-2 bg-blue-600 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8, delay: i * 0.1 }}
                      />
                    </div>

                  </div>
                ))}

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </motion.section>
  );
}