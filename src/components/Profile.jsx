import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaUserTie, FaHandshake, FaChartLine, FaCity } from 'react-icons/fa';

function Profile() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const commitments = [
    {
      icon: <FaUserTie />,
      text: "Kepemimpinan yang bersih dan transparan"
    },
    {
      icon: <FaHandshake />,
      text: "Peningkatan kesejahteraan masyarakat"
    },
    {
      icon: <FaChartLine />,
      text: "Pembangunan infrastruktur berkelanjutan"
    },
    {
      icon: <FaCity />,
      text: "Pengembangan PPU sebagai gerbang IKN"
    }
  ];

  return (
    <section id="profile" className="py-24 px-4 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800">
            Profil Kepemimpinan
          </h2>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold mb-6 text-gray-800 leading-tight">
                Hamdam Pongrewa
              </h3>
              <div className="text-lg text-gray-600 mb-8 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                <p className="font-medium">
                  Posisi: Bupati Penajam Paser Utara (PPU)
                </p>
                <p className="font-medium">
                  Pencalonan: Bupati untuk periode 2024-2029
                </p>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                Hamdam Pongrewa adalah pemimpin berpengalaman dan berdedikasi yang telah membuktikan 
                komitmennya untuk memajukan Kabupaten Penajam Paser Utara. Dengan rekam jejak dalam 
                pelayanan publik, Hamdam memahami kebutuhan masyarakat secara menyeluruh dan bertekad 
                untuk terus membangun PPU sebagai daerah yang berdaya saing.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-8 text-gray-800">
                Komitmen Utama
              </h3>
              <div className="grid gap-6">
                {commitments.map((commitment, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 50 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm"
                  >
                    <div className="text-blue-600 text-2xl">
                      {commitment.icon}
                    </div>
                    <span className="text-gray-700 font-medium">
                      {commitment.text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Profile;