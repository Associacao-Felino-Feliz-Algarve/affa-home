import React, { useState } from 'react';
import { BentoCard } from '../components/BentoCard';
import { Button } from '../components/Button';
import { Mail, Phone, MapPin, Send, MessageSquare, Cat } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Contact = () => {
  const { t } = useTranslation();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the data to a server
    setSubmitted(true);
    setFormState({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <div className="mb-12 text-center">
        <h1 className="font-display text-5xl font-bold text-slate-900 mb-4">{t('contact.title')}</h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          {t('contact.description')}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Contact Form */}
        <BentoCard className="lg:col-span-7 p-8 md:p-10">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center">
              <MessageSquare className="text-orange-600 w-5 h-5" />
            </div>
            <h2 className="text-2xl font-display font-bold text-orange-600">{t('contact.form.title')}</h2>
          </div>

          {submitted ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Send className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">{t('contact.form.success')}</h3>
              <Button variant="secondary" onClick={() => setSubmitted(false)} className="mt-4">
                Send another message
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-bold text-slate-700 ml-1">{t('contact.form.name')}</label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder={t('contact.form.placeholder.name')}
                    className="w-full px-4 py-3 rounded-2xl border border-slate-200 focus:border-orange-600 focus:ring-2 focus:ring-orange-600/20 outline-none transition-all"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-bold text-slate-700 ml-1">{t('contact.form.email')}</label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder={t('contact.form.placeholder.email')}
                    className="w-full px-4 py-3 rounded-2xl border border-slate-200 focus:border-orange-600 focus:ring-2 focus:ring-orange-600/20 outline-none transition-all"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-bold text-slate-700 ml-1">{t('contact.form.subject')}</label>
                <select
                  id="subject"
                  className="w-full px-4 py-3 rounded-2xl border border-slate-200 focus:border-orange-600 focus:ring-2 focus:ring-orange-600/20 outline-none transition-all bg-white"
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                >
                  <option value="">{t('contact.form.topics.select')}</option>
                  <option value="adoption">{t('contact.form.topics.adoption')}</option>
                  <option value="volunteer">{t('contact.form.topics.volunteer')}</option>
                  <option value="donation">{t('contact.form.topics.donation')}</option>
                  <option value="other">{t('contact.form.topics.other')}</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-bold text-slate-700 ml-1">{t('contact.form.message')}</label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  placeholder={t('contact.form.placeholder.message')}
                  className="w-full px-4 py-3 rounded-2xl border border-slate-200 focus:border-orange-600 focus:ring-2 focus:ring-orange-600/20 outline-none transition-all resize-none"
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                ></textarea>
              </div>

              <Button variant="primary" className="w-full md:w-auto px-10 py-4 justify-center">
                {t('contact.form.submit')} <Send className="w-4 h-4 ml-1" />
              </Button>
            </form>
          )}
        </BentoCard>

        {/* Contact Info & Map */}
        <div className="lg:col-span-5 space-y-6">
          <BentoCard className="bg-slate-900 text-orange-600 border-none p-8">
            <h3 className="text-2xl font-display font-bold mb-8">{t('contact.info.title')}</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-orange-200 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="text-orange-400 w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-slate-600">{t('contact.info.shelter')}</p>
                  <p className="text-slate-400 text-sm">Rua das Flores 123, 1200-000 Lisboa, Portugal</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-emerald-200 rounded-xl flex items-center justify-center shrink-0">
                  <Mail className="text-emerald-400 w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-slate-600">{t('contact.info.email')}</p>
                  <p className="text-slate-400 text-sm">hello@affa.org</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-indigo-200 rounded-xl flex items-center justify-center shrink-0">
                  <Phone className="text-indigo-400 w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-slate-600">{t('contact.info.phone')}</p>
                  <p className="text-slate-400 text-sm">+351 210 000 000</p>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-10 border-t border-slate-800">
              <p className="text-xs text-slate-500 uppercase tracking-widest mb-4 font-bold">{t('contact.info.hours')}</p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-slate-600">{t('contact.info.weekdays')}</p>
                  <p className="text-slate-400">09:00 - 18:00</p>
                </div>
                <div>
                  <p className="text-slate-600">{t('contact.info.weekends')}</p>
                  <p className="text-slate-400">10:00 - 16:00</p>
                </div>
              </div>
            </div>
          </BentoCard>

          <BentoCard className="p-0 h-[300px] overflow-hidden">
            <img 
              src="https://picsum.photos/seed/map/800/600" 
              alt="Shelter Location Map" 
              className="w-full h-full object-cover grayscale opacity-80"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3">
                <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center">
                  <Cat className="text-white w-5 h-5" />
                </div>
                <span className="font-bold text-slate-900">AFFA</span>
              </div>
            </div>
          </BentoCard>
        </div>
      </div>
    </main>
  );
};
