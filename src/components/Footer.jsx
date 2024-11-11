import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer() {
  const socialLinks = [
    { icon: <FaFacebook />, href: "#" },
    { icon: <FaTwitter />, href: "#" },
    { icon: <FaInstagram />, href: "#" }
  ];

  return (
    <footer className="bg-gray-900 text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Dukung Hamdam Pongrewa
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Untuk masa depan PPU yang lebih cerah dan berdaya saing
          </p>
          
          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-2xl text-gray-400 hover:text-white transition-colors duration-300"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400">
            © 2024 Zenithcore Innovation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;