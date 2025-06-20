import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface Language {
  code: 'en' | 'uz' | 'ru';
  name: string;
  nativeName: string;
  flag: string;
}

const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const languages: Language[] = [
    {
      code: 'uz',
      name: 'Uzbek',
      nativeName: 'O\'zbekcha',
      flag: 'https://flagcdn.com/w40/uz.png'
    },
    {
      code: 'ru',
      name: 'Russian',
      nativeName: 'Русский',
      flag: 'https://flagcdn.com/w40/ru.png'
    },
    {
      code: 'en',
      name: 'English',
      nativeName: 'English',
      flag: 'https://flagcdn.com/w40/us.png'
    }
  ];

  const currentLanguage = languages.find(lang => lang.code === language) || languages[0];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Close dropdown on escape key
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        buttonRef.current?.focus();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscapeKey);
      return () => {
        document.removeEventListener('keydown', handleEscapeKey);
      };
    }
  }, [isOpen]);

  const handleLanguageSelect = (langCode: 'en' | 'uz' | 'ru') => {
    setLanguage(langCode);
    localStorage.setItem('language',langCode);
    setIsOpen(false);
    buttonRef.current?.focus();
  };

  const handleKeyDown = (event: React.KeyboardEvent, langCode?: 'en' | 'uz' | 'ru') => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      if (langCode) {
        handleLanguageSelect(langCode);
      } else {
        setIsOpen(!isOpen);
      }
    }
  };

  return (
    <div className="relative inline-block text-left">
      {/* Main Button */}
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={(e) => handleKeyDown(e)}
        className={`
          inline-flex items-center px-4 py-2.5 rounded-full text-sm font-medium
          bg-gradient-to-r from-emerald-50 to-blue-50 
          border border-emerald-200/50
          text-emerald-700 hover:text-emerald-800
          hover:from-emerald-100 hover:to-blue-100
          hover:border-emerald-300/50
          focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:ring-offset-2
          transition-all duration-200 ease-in-out
          shadow-sm hover:shadow-md
          ${isOpen ? 'ring-2 ring-emerald-500/20 ring-offset-2' : ''}
        `}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label="Select language"
      >
        <img
          src={currentLanguage.flag}
          alt={`${currentLanguage.name} flag`}
          className="w-5 h-4 mr-2 rounded-sm object-cover shadow-sm"
          loading="lazy"
        />
        <span className="hidden sm:inline mr-2">
          {currentLanguage.nativeName}
        </span>
        <span className="sm:hidden mr-2">
          {currentLanguage.code.toUpperCase()}
        </span>
        <ChevronDown 
          className={`h-4 w-4 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          ref={dropdownRef}
          className={`
            absolute right-0 mt-2 w-48 origin-top-right
            bg-white rounded-xl shadow-lg ring-1 ring-black/5
            border border-gray-100
            transform transition-all duration-200 ease-out
            ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
          `}
          style={{
            animation: isOpen ? 'slideIn 0.2s ease-out' : undefined
          }}
          role="listbox"
          aria-label="Language options"
        >
          <div className="py-2">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageSelect(lang.code)}
                onKeyDown={(e) => handleKeyDown(e, lang.code)}
                className={`
                  w-full text-left px-4 py-3 text-sm
                  flex items-center space-x-3
                  transition-colors duration-150 ease-in-out
                  ${
                    language === lang.code
                      ? 'bg-gradient-to-r from-emerald-50 to-blue-50 text-emerald-700 font-medium'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                  }
                  focus:outline-none focus:bg-emerald-50 focus:text-emerald-700
                  first:rounded-t-xl last:rounded-b-xl
                `}
                role="option"
                aria-selected={language === lang.code}
              >
                <img
                  src={lang.flag}
                  alt={`${lang.name} flag`}
                  className="w-6 h-4 rounded-sm object-cover shadow-sm flex-shrink-0"
                  loading="lazy"
                />
                <div className="flex flex-col flex-1">
                  <span className="font-medium">
                    {lang.nativeName}
                  </span>
                  <span className="text-xs text-gray-500">
                    {lang.name}
                  </span>
                </div>
                {language === lang.code && (
                  <div className="ml-auto">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  </div>
                )}
              </button>
            ))}
          </div>
          
          {/* Language Icon at bottom */}
          <div className="border-t border-gray-100 px-4 py-2">
            <div className="flex items-center justify-center text-gray-400">
              <Globe className="h-4 w-4" />
            </div>
          </div>
        </div>
      )}

      {/* Custom CSS for animations */}
      {/* <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-8px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style> */}
    </div>
  );
};

export default LanguageSelector;