import React from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import { Link } from 'react-scroll';

function Hero() {
  return (
    <div className="relative h-screen">
      {/* Background with modern gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700"></div>
      
      {/* Animated overlay pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }}></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center text-center px-4">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              Hamdam Pongrewa
            </h1>
            <p className="text-2xl md:text-3xl text-white mb-8 font-light">
              Bupati Penajam Paser Utara
            </p>
            <p className="text-xl text-white opacity-90 font-medium italic">
              "Bersama Membangun PPU yang Bersinergi dengan Nusantara"
            </p>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <Link to="profile" smooth={true} duration={500} className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-white opacity-75 hover:opacity-100 transition-opacity"
        >
          <FaChevronDown size={24} />
        </motion.div>
      </Link>
    </div>
  );
}

export default Hero;