import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaRoad, FaUsers, FaAward, FaHandsHelping } from 'react-icons/fa';

function Achievements() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const achievements = [
    {
      icon: <FaRoad />,
      title: "Pengembangan Infrastruktur",
      description: "Memfokuskan pembangunan infrastruktur untuk mempersiapkan PPU sebagai daerah penyangga utama IKN melalui program Serambi Nusantara."
    },
    {
      icon: <FaUsers />,
      title: "Kesejahteraan Masyarakat",
      description: "Memprioritaskan program peningkatan pendidikan, kesehatan gratis, dan pemberdayaan ekonomi masyarakat."
    },
    {
      icon: <FaAward />,
      title: "Kepemimpinan Bersih",
      description: "Menerapkan prinsip kepemimpinan yang bersih, transparan, dan terbuka dalam setiap aspek pemerintahan."
    },
    {
      icon: <FaHandsHelping />,
      title: "Dukungan Luas",
      description: "Didukung oleh berbagai partai besar dan relawan yang bekerja dengan dedikasi tinggi."
    }
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Pencapaian dan Kontribusi
          </h2>
          <p className="text-xl text-gray-600">
            Hasil nyata untuk masyarakat PPU
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-4xl text-blue-600 mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Achievements;