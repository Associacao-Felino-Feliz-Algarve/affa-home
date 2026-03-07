import React from 'react';
import { motion } from 'motion/react';
import { 
  Heart, 
  Cat, 
  Gift, 
  Users, 
  ArrowRight, 
  Star, 
  Info,
  ChevronRight
} from 'lucide-react';
import { BentoCard } from '../components/BentoCard';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const Home = () => {
  const { t } = useTranslation();

  return (
    <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <BentoCard className="lg:col-span-8 bg-orange-50/50 border-orange-100/50 flex flex-col justify-center min-h-[400px]">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 bg-orange-100 text-orange-700 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                {t('home.hero.badge')}
              </span>
              <h1 className="font-display text-5xl md:text-6xl font-bold text-slate-900 leading-[1.1] mb-6">
                {t('home.hero.title')}
              </h1>
              <p className="text-lg text-slate-600 max-w-xl mb-8">
                {t('home.hero.description')}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/adopt">
                  <Button variant="primary">{t('home.hero.cta')}</Button>
                </Link>
                <Link to="/about">
                  <Button variant="outline">{t('home.hero.learnMore')}</Button>
                </Link>
              </div>
            </motion.div>
            <div className="absolute right-0 bottom-0 w-1/3 h-full hidden md:block opacity-10 pointer-events-none">
              <Cat className="w-full h-full text-orange-600" />
            </div>
          </BentoCard>

          <BentoCard className="lg:col-span-4 p-0">
            <img 
              src="https://picsum.photos/seed/cat-hero/800/1000" 
              alt="Cute rescued cat" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/90 backdrop-blur-sm rounded-2xl">
              <p className="text-sm font-medium text-slate-900">"Milo found his forever home last week!"</p>
              <p className="text-xs text-slate-500">Adopted by the Miller family</p>
            </div>
          </BentoCard>
        </div>
      </section>

      {/* Bento Grid Main */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[240px]">
        
        {/* Adoptable Cats */}
        <BentoCard className="lg:col-span-2 lg:row-span-2 flex flex-col h-full" id="adopt" delay={0.1}>
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="font-display text-2xl font-bold mb-1 text-slate-900">{t('home.residents.title')}</h3>
              <p className="text-slate-500 text-sm">{t('home.residents.subtitle')}</p>
            </div>
            <div className="w-10 h-10 bg-rose-50 rounded-full flex items-center justify-center border border-rose-100">
              <Heart className="text-rose-500 w-5 h-5" />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 flex-grow mt-4 overflow-auto">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="relative rounded-2xl overflow-hidden group/item">
                <img 
                  src={`https://picsum.photos/seed/cat-${i}/400/400`} 
                  alt="Adoptable cat" 
                  className="w-full h-full object-cover group-hover/item:scale-110 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity flex items-end p-3">
                  <span className="text-white text-xs font-bold">View Profile</span>
                </div>
              </div>
            ))}
          </div>
          
          <Link to="/adopt" className="mt-6 w-full py-3 border-2 border-slate-100 rounded-2xl text-sm font-bold text-slate-600 hover:bg-slate-50 transition-colors flex items-center justify-center gap-2">
            {t('home.residents.cta')} <ChevronRight className="w-4 h-4" />
          </Link>
        </BentoCard>

        {/* About Us Mini */}
        <BentoCard className="md:col-span-2 lg:col-span-1 bg-rose-50/50 border-rose-100/50 flex flex-col justify-between" id="about" delay={0.6}>
          <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm border border-rose-100">
            <Info className="text-rose-500 w-5 h-5" />
          </div>
          <div>
            <h3 className="font-display text-lg font-bold mb-1 text-slate-900">{t('nav.about')}</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Founded in 2018, we've grown from a small group of friends to a city-wide network of foster homes.
            </p>
            <Link to="/about" className="mt-3 text-rose-600 text-xs font-bold flex items-center gap-1 hover:underline">
              {t('home.hero.learnMore')} <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </BentoCard>

        {/* Volunteer Card */}
        <BentoCard className="bg-indigo-50/50 border-indigo-100/50 flex flex-col justify-between" id="volunteer" delay={0.3}>
          <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-4 border border-indigo-100">
            <Users className="text-indigo-600 w-6 h-6" />
          </div>
          <div>
            <h3 className="font-display text-xl font-bold mb-2 text-slate-900">{t('home.volunteer.title')}</h3>
            <p className="text-slate-600 text-sm mb-4">{t('home.volunteer.description')}</p>
            <Link to="/volunteer">
              <Button variant="primary" className="w-full text-sm py-2 bg-indigo-600 hover:bg-indigo-700 border-none">
                {t('home.volunteer.cta')}
              </Button>
            </Link>
          </div>
        </BentoCard>

        {/* Donation Card */}
        <BentoCard className="bg-emerald-50/50 border-emerald-100/50 flex flex-col justify-between md:col-span-2 lg:col-span-2" id="donate" delay={0.2}>
          <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-4 border border-emerald-100">
            <Gift className="text-emerald-600 w-6 h-6" />
          </div>
          <div>
            <h3 className="font-display text-xl font-bold mb-2 text-slate-900">{t('home.donate.title')}</h3>
            <p className="text-slate-600 text-sm mb-4">{t('home.donate.description')}</p>
            <Link to="/donate">
              <Button variant="primary" className="w-full text-sm py-2 bg-emerald-600 hover:bg-emerald-700 border-none">
                {t('home.donate.cta')}
              </Button>
            </Link>
          </div>
        </BentoCard>

        {/* Stats Card */}
        {/* <BentoCard className="lg:col-span-2 flex items-center justify-around bg-slate-900 text-white border-none" delay={0.4}>
          <div className="text-center">
            <p className="text-4xl font-display font-bold text-orange-400">450+</p>
            <p className="text-xs text-slate-400 uppercase tracking-widest mt-1">{t('home.stats.rescued')}</p>
          </div>
          <div className="w-px h-12 bg-slate-800"></div>
          <div className="text-center">
            <p className="text-4xl font-display font-bold text-emerald-400">320</p>
            <p className="text-xs text-slate-400 uppercase tracking-widest mt-1">{t('home.stats.homes')}</p>
          </div>
          <div className="w-px h-12 bg-slate-800"></div>
          <div className="text-center">
            <p className="text-4xl font-display font-bold text-indigo-400">85</p>
            <p className="text-xs text-slate-400 uppercase tracking-widest mt-1">{t('home.stats.volunteers')}</p>
          </div>
        </BentoCard> */}

        {/* Success Story */}
        {/* <BentoCard className="md:col-span-2 lg:col-span-1 flex flex-col justify-between" delay={0.5}>
          <div className="flex items-center gap-1 text-amber-400 mb-2">
            <Star className="fill-current w-4 h-4" />
            <Star className="fill-current w-4 h-4" />
            <Star className="fill-current w-4 h-4" />
            <Star className="fill-current w-4 h-4" />
            <Star className="fill-current w-4 h-4" />
          </div>
          <p className="italic text-slate-600 text-sm">
            "AFFA helped us find the perfect companion for our lonely senior cat. The process was so smooth and caring."
          </p>
          <div className="flex items-center gap-3 mt-4">
            <div className="w-8 h-8 rounded-full bg-slate-200 overflow-hidden">
              <img src="https://picsum.photos/seed/user1/100/100" alt="User" referrerPolicy="no-referrer" />
            </div>
            <span className="text-xs font-bold text-slate-900">Sarah J.</span>
          </div>
        </BentoCard> */}

      </section>

      {/* Call to Action Section */}
      <section className="mt-20">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-orange-600 rounded-[3rem] p-12 text-center text-white relative overflow-hidden"
        >
          <div className="relative z-10">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">{t('home.cta.title')}</h2>
            <p className="text-orange-100 text-lg max-w-2xl mx-auto mb-10">
              {t('home.cta.description')}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/adopt">
                <button className="px-8 py-4 bg-white text-orange-600 rounded-full font-bold hover:bg-orange-50 transition-colors shadow-lg">
                  {t('home.cta.adopt')}
                </button>
              </Link>
              <Link to="/volunteer">
                <button className="px-8 py-4 bg-orange-700 text-white rounded-full font-bold hover:bg-orange-800 transition-colors border border-orange-500/30">
                  {t('home.cta.volunteer')}
                </button>
              </Link>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-black/10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>
        </motion.div>
      </section>
    </main>
  );
};
