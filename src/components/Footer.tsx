import React from 'react';
import { Github, Linkedin, Instagram, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="font-bold text-2xl mb-4">
              M<span className="text-primary-500">J</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Aspiring developer passionate about creating innovative solutions 
              through technology and continuous learning.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <div className="space-y-2">
              {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    const element = document.getElementById(item.toLowerCase());
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="block text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Get In Touch</h3>
            <div className="space-y-2 text-gray-400">
              <p>max.jayan@email.com</p>
              <p>+91 98765 43210</p>
              <p>Kerala, India</p>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              <a
                href="https://www.instagram.com/hexagon.hjn/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200 transform hover:scale-110"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.instagram.com/hexagon.hjn/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200 transform hover:scale-110"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://www.instagram.com/hexagon.hjn/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-400 transition-colors duration-200 transform hover:scale-110"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center gap-2 text-gray-400 mb-4 sm:mb-0">
            <span>Made with</span>
            <Heart className="text-red-500" size={16} />
            <span>by Max Jayan</span>
          </div>
          
          <button
            onClick={scrollToTop}
            className="text-gray-400 hover:text-white transition-colors duration-200"
          >
            © 2024 All rights reserved
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;