import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSelector from './LanguageSelector';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();
  const location = useLocation();

  const navigation = [
    { name: t('home'), href: '/' },
    { name: t('about'), href: '/about' },
    { name: t('programs'), href: '/programs' },
    { name: t('admissions'), href: '/admissions' },
    { name: t('parentResources'), href: '/parent-resources' },
    { name: t('gallery'), href: '/gallery' },
    { name: t('news'), href: '/news' },
    { name: t('contact'), href: '/contact' },
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <nav className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo - Increased size */}
          <div className="flex items-center flex-shrink-0">
            <Link to="/" className="flex items-center space-x-4">
              <img
                src="https://i.postimg.cc/MTZZBBGX/Logo-Islamic-School-Al-quran.jpg"
                alt="Al-Quran Islamic School"
                className="h-20 w-20 object-contain rounded-lg shadow-md"
              />
              <div className="text-left">
                <h1 className="text-xl font-bold text-emerald-800 leading-tight">Al-Quran</h1>
                <p className="text-base text-emerald-600 leading-tight">Islamic School</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation - Fixed width container */}
          <div className="hidden lg:flex items-center justify-center flex-1 max-w-4xl mx-8">
            <div className="flex items-center space-x-1">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 whitespace-nowrap ${
                    location.pathname === item.href
                      ? 'text-emerald-700 bg-emerald-50'
                      : 'text-gray-600 hover:text-emerald-700 hover:bg-emerald-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Language Selector & CTA - Fixed width container */}
          <div className="flex items-center space-x-4 flex-shrink-0">
            {/* New Language Selector Component */}
            <LanguageSelector />

            <Link
              to="/admissions"
              className="hidden sm:inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 transition-colors duration-200 whitespace-nowrap"
            >
              {t('enrollNow')}
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-emerald-700 hover:bg-emerald-50 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                    location.pathname === item.href
                      ? 'text-emerald-700 bg-emerald-50'
                      : 'text-gray-600 hover:text-emerald-700 hover:bg-emerald-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Language Selector */}
              <div className="px-3 py-4 border-t border-gray-200 mt-4">
                <div className="flex items-center justify-center">
                  <LanguageSelector />
                </div>
              </div>
              
              <Link
                to="/admissions"
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 mt-4 text-center bg-emerald-600 text-white rounded-md font-medium hover:bg-emerald-700 transition-colors duration-200"
              >
                {t('enrollNow')}
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;