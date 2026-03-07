import React from 'react';
import { BentoCard } from '../components/BentoCard';
import { Button } from '../components/Button';
import { Gift, Heart, Shield, Zap } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Donate = () => {
  const { t } = useTranslation();

  return (
    <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="font-display text-5xl font-bold text-slate-900 mb-4">{t('donate.title')}</h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          {t('donate.description')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
        {[
          { amount: "10€", title: t('donate.tiers.meal.title'), desc: t('donate.tiers.meal.desc'), icon: <Zap className="text-orange-500" /> },
          { amount: "50€", title: t('donate.tiers.health.title'), desc: t('donate.tiers.health.desc'), icon: <Shield className="text-emerald-500" /> },
          { amount: "150€", title: t('donate.tiers.life.title'), desc: t('donate.tiers.life.desc'), icon: <Heart className="text-rose-500" /> }
        ].map((tier, i) => (
          <BentoCard key={i} className="text-center p-10 flex flex-col items-center">
            <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-6">
              {tier.icon}
            </div>
            <h2 className="text-4xl font-display font-bold text-slate-900 mb-2">{tier.amount}</h2>
            <h3 className="font-bold text-slate-600 mb-4">{tier.title}</h3>
            <p className="text-sm text-slate-500 mb-8 flex-grow">{tier.desc}</p>
            <Button variant="primary" className="w-full justify-center">Donate {tier.amount}</Button>
          </BentoCard>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
        <BentoCard className="bg-slate-900 text-orange-600 p-10">
          <h3 className="font-display text-3xl font-bold mb-6">{t('donate.monthly.title')}</h3>
          <p className="text-slate-400 mb-8">
            {t('donate.monthly.description')}
          </p>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 text-white bg-orange-600 rounded-full flex items-center justify-center">
              <Gift className="w-6 h-6" />
            </div>
            <div>
              <p className="font-bold">{t('donate.monthly.updates')}</p>
              <p className="text-xs text-slate-500">{t('donate.monthly.updatesDesc')}</p>
            </div>
          </div>
          <Button variant="primary" className="w-full justify-center">{t('donate.monthly.cta')}</Button>
        </BentoCard>

        {/* <BentoCard className="p-10 border-slate-200">
          <h3 className="font-display text-3xl font-bold text-slate-900 mb-6">{t('donate.other.title')}</h3>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center shrink-0">
                <Gift className="text-orange-500 w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-slate-900">{t('donate.other.wishlist.title')}</p>
                <p className="text-sm text-slate-500">{t('donate.other.wishlist.desc')}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center shrink-0">
                <Shield className="text-emerald-500 w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-slate-900">{t('donate.other.corporate.title')}</p>
                <p className="text-sm text-slate-500">{t('donate.other.corporate.desc')}</p>
              </div>
            </div>
          </div>
        </BentoCard> */}
      </div>
    </main>
  );
};
