import React from 'react';
import { BentoCard } from '../components/BentoCard';
import { FileText } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const TermsOfService = () => {
  const { t } = useTranslation();

  return (
    <main className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
      <BentoCard className="p-8 md:p-12">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center">
            <FileText className="text-indigo-600 w-6 h-6" />
          </div>
          <h1 className="text-3xl md:text-4xl font-display font-bold text-slate-900">{t('policies.terms.title')}</h1>
        </div>

        <div className="prose prose-slate max-w-none space-y-6 text-slate-600">
          <p className="text-sm text-slate-400 italic">{t('policies.lastUpdated')}: March 7, 2026</p>
          
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">{t('policies.terms.s1.title')}</h2>
            <p>
              {t('policies.terms.s1.p1')}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">{t('policies.terms.s2.title')}</h2>
            <p>
              {t('policies.terms.s2.p1')}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">{t('policies.terms.s3.title')}</h2>
            <p>
              {t('policies.terms.s3.p1')}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">{t('policies.terms.s4.title')}</h2>
            <p>
              {t('policies.terms.s4.p1')}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">{t('policies.terms.s5.title')}</h2>
            <p>
              {t('policies.terms.s5.p1')}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">{t('policies.terms.s6.title')}</h2>
            <p>
              {t('policies.terms.s6.p1')}
            </p>
          </section>
        </div>
      </BentoCard>
    </main>
  );
};
