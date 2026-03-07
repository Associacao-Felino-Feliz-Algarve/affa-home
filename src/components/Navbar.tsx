import React from 'react';
import { Link } from 'react-router-dom';
import { Cat, Globe } from 'lucide-react';
import { Button } from './Button';
import { useTranslation } from 'react-i18next';

export const Navbar = () => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'pt' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-orange-600 rounded-xl flex items-center justify-center">
            <Cat className="text-white w-6 h-6" />
          </div>
          <span className="font-display font-bold text-xl tracking-tight text-slate-900">AFFA</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
          <Link to="/adopt" className="hover:text-orange-600 transition-colors">{t('nav.adopt')}</Link>
          <Link to="/volunteer" className="hover:text-orange-600 transition-colors">{t('nav.volunteer')}</Link>
          <Link to="/donate" className="hover:text-orange-600 transition-colors">{t('nav.donate')}</Link>
          <Link to="/about" className="hover:text-orange-600 transition-colors">{t('nav.about')}</Link>
          <Link to="/contact" className="hover:text-orange-600 transition-colors">{t('nav.contact')}</Link>
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-slate-100 transition-colors text-sm font-bold text-slate-600 uppercase"
          >
            <Globe className="w-4 h-4" />
            {i18n.language.split('-')[0]}
          </button>
          <Link to="/donate">
            <Button variant="primary" className="hidden sm:flex">
              {t('nav.donate')}
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
