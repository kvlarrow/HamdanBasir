import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaLeaf, FaCity, FaHandshake } from 'react-icons/fa';

function Vision() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const visions = [
    {
      icon: <FaLeaf />,
      title: "Pembangunan Ekonomi Berkelanjutan",
      description: "Mendorong pengembangan industri lokal berbasis sumber daya alam berkelanjutan dan menarik investasi yang ramah lingkungan."
    },
    {
      icon: <FaCity />,
      title: "Transformasi Infrastruktur",
      description: "Memperluas digitalisasi layanan publik, memperbaiki jaringan transportasi, serta meningkatkan infrastruktur kesehatan dan pendidikan."
    },
    {
      icon: <FaHandshake />,
      title: "Kemitraan Strategis",
      description: "Memperkuat kemitraan antara pemerintah, komunitas lokal, dan pelaku usaha untuk menciptakan lebih banyak lapangan pekerjaan."
    }
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Visi Masa Depan
          </h2>
          <p className="text-xl text-blue-100">
            Membangun PPU yang Modern dan Berkelanjutan
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {visions.map((vision, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-blue-800 to-blue-700 p-8 rounded-xl backdrop-blur-lg shadow-lg"
            >
              <div className="text-4xl text-blue-200 mb-6">
                {vision.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">
                {vision.title}
              </h3>
              <p className="text-blue-100 leading-relaxed">
                {vision.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Vision;