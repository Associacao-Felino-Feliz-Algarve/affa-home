import React from 'react';
import { Link } from 'react-router-dom';
import { Cat, Instagram, Facebook, Twitter } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center">
                <Cat className="text-white w-5 h-5" />
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-slate-900">AFFA</span>
            </div>
            <p className="text-slate-500 max-w-sm mb-8">
              {t('footer.description')}
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-orange-600 hover:border-orange-600 transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-orange-600 hover:border-orange-600 transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-orange-600 hover:border-orange-600 transition-all">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">{t('footer.quickLinks')}</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><Link to="/adopt" className="hover:text-orange-600 transition-colors">{t('nav.adopt')}</Link></li>
              <li><Link to="/volunteer" className="hover:text-orange-600 transition-colors">{t('nav.volunteer')}</Link></li>
              <li><Link to="/donate" className="hover:text-orange-600 transition-colors">{t('nav.donate')}</Link></li>
              <li><Link to="/about" className="hover:text-orange-600 transition-colors">{t('nav.about')}</Link></li>
              <li><Link to="/contact" className="hover:text-orange-600 transition-colors">{t('nav.contact')}</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">{t('footer.contact')}</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li>123 Feline Way, Cat City</li>
              <li>hello@affa.org</li>
              <li>+1 (555) 123-4567</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-10 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <p>© 2024 AFFA Association. {t('footer.rights')}</p>
          <div className="flex gap-8">
            <Link to="/privacy" className="hover:text-slate-600">{t('footer.privacy')}</Link>
            <Link to="/terms" className="hover:text-slate-600">{t('footer.terms')}</Link>
            <Link to="/cookies" className="hover:text-slate-600">{t('footer.cookies')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
