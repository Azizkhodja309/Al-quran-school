import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, Facebook, Instagram, Send } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src="https://i.postimg.cc/MTZZBBGX/Logo-Islamic-School-Al-quran.jpg"
                alt="Al-Quran Islamic School"
                className="h-12 w-12 object-contain"
              />
              <div>
                <h3 className="text-lg font-bold">Al-Quran</h3>
                <p className="text-sm text-gray-300">Islamic School</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              {t('schoolDescription')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">{t('quickLink')}</h4>
            <div className="space-y-2">
              <Link to="/about" className="block text-gray-300 hover:text-white transition-colors">
                {t('about')}
              </Link>
              <Link to="/programs" className="block text-gray-300 hover:text-white transition-colors">
                {t('programs')}
              </Link>
              <Link to="/admissions" className="block text-gray-300 hover:text-white transition-colors">
                {t('admissions')}
              </Link>
              <Link to="/contact" className="block text-gray-300 hover:text-white transition-colors">
                {t('contact')}
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">{t('contact')}</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-emerald-400" />
                <span className="text-gray-300 text-sm">(347) 486-9469</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-emerald-400" />
                <span className="text-gray-300 text-sm">(631) 691-8207</span>
              </div>
              <div className="flex items-start space-x-2">
                <Mail className="h-4 w-4 text-emerald-400 mt-0.5" />
                <span className="text-gray-300 text-sm">alquranislamicschool@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-semibold mb-4">{t('followUs')}</h4>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a 
                href="https://t.me/+OSTXwA2nHS9iZGIy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Send className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} {t('allRightReserved')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;