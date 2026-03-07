import React from 'react';
import { BentoCard } from '../components/BentoCard';
import { Button } from '../components/Button';
import { Cat, Heart, Users, Star, Shield } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const About = () => {
  const { t } = useTranslation();

  return (
    <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <div className="max-w-3xl mx-auto text-center mb-20">
        <h1 className="font-display text-5xl font-bold text-slate-900 mb-6">{t('about.title')}</h1>
        <p className="text-lg text-slate-600 leading-relaxed">
          {t('about.description')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        <BentoCard className="p-0 overflow-hidden h-[400px]">
          <img 
            src="https://picsum.photos/seed/about-1/800/800" 
            alt="Our first rescue" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </BentoCard>
        <div className="flex flex-col justify-center">
          <h2 className="font-display text-3xl font-bold text-slate-900 mb-6">{t('about.history.title')}</h2>
          <p className="text-slate-600 mb-6 leading-relaxed">
            {t('about.history.description')}
          </p>
          <div className="grid grid-cols-2 gap-6">
            <div className="p-4 bg-orange-50 rounded-2xl">
              <p className="text-2xl font-display font-bold text-orange-600">2018</p>
              <p className="text-xs text-slate-500 uppercase tracking-wider">{t('about.history.founded')}</p>
            </div>
            <div className="p-4 bg-emerald-50 rounded-2xl">
              <p className="text-2xl font-display font-bold text-emerald-600">1,200+</p>
              <p className="text-xs text-slate-500 uppercase tracking-wider">{t('about.history.totalRescues')}</p>
            </div>
          </div>
        </div>
      </div>

      <section className="mb-20">
        <h2 className="font-display text-3xl font-bold text-slate-900 mb-12 text-center">{t('about.values.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { icon: <Heart className="text-rose-500" />, title: t('about.values.compassion.title'), desc: t('about.values.compassion.desc') },
            { icon: <Shield className="text-emerald-500" />, title: t('about.values.integrity.title'), desc: t('about.values.integrity.desc') },
            { icon: <Users className="text-indigo-500" />, title: t('about.values.community.title'), desc: t('about.values.community.desc') },
            { icon: <Star className="text-amber-500" />, title: t('about.values.excellence.title'), desc: t('about.values.excellence.desc') }
          ].map((value, i) => (
            <BentoCard key={i} className="text-center p-8">
              <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                {value.icon}
              </div>
              <h4 className="font-bold text-slate-900 mb-2">{value.title}</h4>
              <p className="text-xs text-slate-500 leading-relaxed">{value.desc}</p>
            </BentoCard>
          ))}
        </div>
      </section>

      <BentoCard className="bg-slate-900 text-orange-600 p-12 text-center">
        <h2 className="font-display text-4xl font-bold mb-6">{t('about.join.title')}</h2>
        <p className="text-slate-400 max-w-2xl mx-auto mb-10">
          {t('about.join.description')}
        </p>
        <div className="flex justify-center gap-4">
          <Button variant="primary">{t('about.join.cta')}</Button>
        </div>
      </BentoCard>
    </main>
  );
};
