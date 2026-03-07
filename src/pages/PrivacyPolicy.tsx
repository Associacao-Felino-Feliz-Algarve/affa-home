import React from 'react';
import { BentoCard } from '../components/BentoCard';
import { ShieldCheck } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const PrivacyPolicy = () => {
  const { t } = useTranslation();

  return (
    <main className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
      <BentoCard className="p-8 md:p-12">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center">
            <ShieldCheck className="text-emerald-600 w-6 h-6" />
          </div>
          <h1 className="text-3xl md:text-4xl font-display font-bold text-slate-900">{t('policies.privacy.title')}</h1>
        </div>

        <div className="prose prose-slate max-w-none space-y-6 text-slate-600">
          <p className="text-sm text-slate-400 italic">{t('policies.lastUpdated')}: March 7, 2026</p>
          
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">{t('policies.privacy.s1.title')}</h2>
            <p>
              {t('policies.privacy.s1.p1')}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">{t('policies.privacy.s2.title')}</h2>
            <p>
              {t('policies.privacy.s2.p1')}
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>{t('policies.privacy.s2.l1')}</li>
              <li>{t('policies.privacy.s2.l2')}</li>
              <li>{t('policies.privacy.s2.l3')}</li>
              <li>{t('policies.privacy.s2.l4')}</li>
            </ul>
            <p className="mt-3">
              {t('policies.privacy.s2.p2')}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">{t('policies.privacy.s3.title')}</h2>
            <p>
              {t('policies.privacy.s3.p1')}
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>{t('policies.privacy.s3.l1')}</li>
              <li>{t('policies.privacy.s3.l2')}</li>
              <li>{t('policies.privacy.s3.l3')}</li>
              <li>{t('policies.privacy.s3.l4')}</li>
              <li>{t('policies.privacy.s3.l5')}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">{t('policies.privacy.s4.title')}</h2>
            <p>
              {t('policies.privacy.s4.p1')}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">{t('policies.privacy.s5.title')}</h2>
            <p>
              {t('policies.privacy.s5.p1')}
            </p>
          </section>
        </div>
      </BentoCard>
    </main>
  );
};
