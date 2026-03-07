import React from 'react';
import { BentoCard } from '../components/BentoCard';
import { Button } from '../components/Button';
import { Heart, Info } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const CATS = [
  { id: 1, name: "Luna", age: "2 years", gender: "Female", breed: "Tabby", image: "https://picsum.photos/seed/cat-1/600/600" },
  { id: 2, name: "Oliver", age: "6 months", gender: "Male", breed: "Ginger", image: "https://picsum.photos/seed/cat-2/600/600" },
  { id: 3, name: "Bella", age: "4 years", gender: "Female", breed: "Calico", image: "https://picsum.photos/seed/cat-3/600/600" },
  { id: 4, name: "Simba", age: "1 year", gender: "Male", breed: "Siamese Mix", image: "https://picsum.photos/seed/cat-4/600/600" },
  { id: 5, name: "Misty", age: "3 years", gender: "Female", breed: "Grey Shorthair", image: "https://picsum.photos/seed/cat-5/600/600" },
  { id: 6, name: "Charlie", age: "2 years", gender: "Male", breed: "Black & White", image: "https://picsum.photos/seed/cat-6/600/600" },
];

export const Adopt = () => {
  const { t } = useTranslation();

  return (
    <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <div className="mb-12">
        <h1 className="font-display text-5xl font-bold text-slate-900 mb-4">{t('adopt.title')}</h1>
        <p className="text-lg text-slate-600 max-w-2xl">
          {t('adopt.description')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {CATS.map((cat) => (
          <BentoCard key={cat.id} className="p-0 flex flex-col h-full">
            <div className="relative h-64 overflow-hidden">
              <img 
                src={cat.image} 
                alt={cat.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 right-4">
                <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-rose-500 hover:bg-rose-50 transition-colors">
                  <Heart className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="p-6 flex-grow flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-display text-2xl font-bold text-slate-900">{cat.name}</h3>
                  <p className="text-slate-500 text-sm">{cat.breed} • {cat.gender}</p>
                </div>
                <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-bold">
                  {cat.age}
                </span>
              </div>
              <p className="text-slate-600 text-sm mb-6 flex-grow">
                {cat.name} {t('adopt.cat.description')}
              </p>
              <Button variant="primary" className="w-full justify-center">
                {t('adopt.cat.inquire')} {cat.name}
              </Button>
            </div>
          </BentoCard>
        ))}
      </div>

      <BentoCard className="mt-12 bg-orange-50 border-orange-100 flex items-center gap-6 p-8">
        <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm shrink-0">
          <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm shrink-0">
            <Info className="text-orange-500 w-8 h-8" />
          </div>
        </div>
        <div>
          <h3 className="font-display text-xl font-bold text-slate-900 mb-2">{t('adopt.process.title')}</h3>
          <p className="text-slate-600 text-sm">
            {t('adopt.process.description')}
          </p>
        </div>
      </BentoCard>
    </main>
  );
};
