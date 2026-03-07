import React from 'react';
import { BentoCard } from '../components/BentoCard';
import { Cookie } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const CookiePolicy = () => {
  const { t } = useTranslation();

  return (
    <main className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
      <BentoCard className="p-8 md:p-12">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center">
            <Cookie className="text-orange-600 w-6 h-6" />
          </div>
          <h1 className="text-3xl md:text-4xl font-display font-bold text-slate-900">{t('policies.cookie.title')}</h1>
        </div>

        <div className="prose prose-slate max-w-none space-y-6 text-slate-600">
          <p className="text-sm text-slate-400 italic">{t('policies.lastUpdated')}: March 7, 2026</p>
          
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">{t('policies.cookie.s1.title')}</h2>
            <p>
              {t('policies.cookie.s1.p1')}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">{t('policies.cookie.s2.title')}</h2>
            <p>
              {t('policies.cookie.s2.p1')}
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>{t('policies.cookie.s2.l1')}</li>
              <li>{t('policies.cookie.s2.l2')}</li>
              <li>{t('policies.cookie.s2.l3')}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">{t('policies.cookie.s3.title')}</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="py-3 font-bold text-slate-900">{t('policies.cookie.s3.th1')}</th>
                    <th className="py-3 font-bold text-slate-900">{t('policies.cookie.s3.th2')}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="py-3 pr-4 font-medium">{t('policies.cookie.s3.tr1')}</td>
                    <td className="py-3">{t('policies.cookie.s3.td1')}</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium">{t('policies.cookie.s3.tr2')}</td>
                    <td className="py-3">{t('policies.cookie.s3.td2')}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">{t('policies.cookie.s4.title')}</h2>
            <p>
              {t('policies.cookie.s4.p1')}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">{t('policies.cookie.s5.title')}</h2>
            <p>
              {t('policies.cookie.s5.p1')}
            </p>
          </section>
        </div>
      </BentoCard>
    </main>
  );
};
