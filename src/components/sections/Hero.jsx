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

  const images = [
    foto1,
    foto2,
    foto3,
    foto4,
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      id="hero"
      className="pt-32 pb-20 bg-gray-50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          <span className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm">
            👋 Halo, Selamat Datang!
          </span>

          <h1 className="mt-6 text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Saya seorang{" "}
            
            {/* TEXT ANIMATION */}
            <AnimatePresence mode="wait">
              <motion.span
                key={roles[index]}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className="text-blue-600"
              >
                {roles[index]}
              </motion.span>
            </AnimatePresence>

            {" "} <br /> <span className="text-3xl">Zaki Ahmad Basyary.</span>
          </h1>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Saya memiliki minat besar dalam membangun  web yang interaktif dan responsif,
            serta mengolah data untuk menghasilkan insight yang bermanfaat.
            Saya berfokus pada pengembangan web, analisis data, dan machine learning
            menggunakan teknologi seperti React, Python, tableau, Node.js, dan lainnya.
          </p>

          {/* BUTTON */}
          <div className="mt-6 flex gap-4">
            <a
              href="#projects"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
            >
              Lihat Portofolio →
            </a>

            <a
              href="https://drive.google.com/file/d/1Pb8Ht4lQu_BTttuZtuFQjAX0Fn3JN7dR/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="border px-6 py-3 rounded-lg text-gray-700 hover:bg-gray-100 transition"
            >
              Unduh CV
            </a>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={images[index]}
              src={images[index]}
              alt="profile"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="w-64 h-64 object-cover rounded-full shadow-lg"
            />
          </AnimatePresence>
        </motion.div>
      </div>

      {/* INFO BOX */}
      <div className="max-w-6xl mx-auto mt-16 px-6 grid md:grid-cols-3 gap-6 text-center">
        
        {[
          { title: "Lokasi", value: "Lampung, Indonesia" },
          { title: "Email", value: "zakibasyary@gmail.com" },
          { title: "Telepon", value: "+62 897 3726 311" },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-xl shadow"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: index * 0.2 }}
          >
            <p className="text-sm text-gray-500">{item.title}</p>
            <p className="font-semibold text-gray-700">{item.value}</p>
          </motion.div>
        ))}

      </div>
    </motion.section>
  );
}