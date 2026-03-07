import React from 'react';
import { BentoCard } from '../components/BentoCard';
import { Button } from '../components/Button';
import { Users, Heart, Clock, Home as HomeIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Volunteer = () => {
  const { t } = useTranslation();

  return (
    <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <div className="mb-12">
        <h1 className="font-display text-5xl font-bold text-slate-900 mb-4">{t('volunteer.title')}</h1>
        <p className="text-lg text-slate-600 max-w-2xl">
          {t('volunteer.description')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <BentoCard className="bg-orange-50 border-orange-100 p-8">
          <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6">
            <Heart className="text-orange-500 w-8 h-8" />
          </div>
          <h3 className="font-display text-2xl font-bold text-slate-900 mb-4">{t('volunteer.shelter.title')}</h3>
          <p className="text-slate-600 mb-6">
            {t('volunteer.shelter.description')}
          </p>
          <ul className="space-y-3 mb-8 text-sm text-slate-500">
            <li className="flex items-center gap-2"><Clock className="w-4 h-4" /> {t('volunteer.shelter.shifts')}</li>
            <li className="flex items-center gap-2"><Users className="w-4 h-4" /> {t('volunteer.shelter.team')}</li>
          </ul>
          <Button variant="primary">{t('volunteer.shelter.cta')}</Button>
        </BentoCard>

        <BentoCard className="bg-indigo-50 border-indigo-100 p-8">
          <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6">
            <HomeIcon className="text-indigo-500 w-8 h-8" />
          </div>
          <h3 className="font-display text-2xl font-bold text-slate-900 mb-4">{t('volunteer.foster.title')}</h3>
          <p className="text-slate-600 mb-6">
            {t('volunteer.foster.description')}
          </p>
          <ul className="space-y-3 mb-8 text-sm text-slate-500">
            <li className="flex items-center gap-2"><Clock className="w-4 h-4" /> {t('volunteer.foster.options')}</li>
            <li className="flex items-center gap-2"><Heart className="w-4 h-4" /> {t('volunteer.foster.supplies')}</li>
          </ul>
          <Button variant="primary" className="bg-indigo-600 hover:bg-indigo-700">{t('volunteer.foster.cta')}</Button>
        </BentoCard>
      </div>

      <section className="mt-20">
        <h2 className="font-display text-3xl font-bold text-slate-900 mb-8 text-center">{t('volunteer.why.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: t('volunteer.why.impact.title'), desc: t('volunteer.why.impact.desc') },
            { title: t('volunteer.why.skills.title'), desc: t('volunteer.why.skills.desc') },
            { title: t('volunteer.why.people.title'), desc: t('volunteer.why.people.desc') }
          ].map((item, i) => (
            <div key={i} className="text-center p-6">
              <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-600 font-bold">{i + 1}</span>
              </div>
              <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
              <p className="text-sm text-slate-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};
