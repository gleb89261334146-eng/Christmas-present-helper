
import React from 'react';
import { RecommendationResponse, GiftRecommendation } from '../types';

interface ResultsDisplayProps {
  results: RecommendationResponse;
  onReset: () => void;
  recipientName: string;
}

const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ results, onReset, recipientName }) => {
  return (
    <div className="space-y-12 animate-fadeIn max-w-4xl mx-auto pb-20">
      <div className="text-center space-y-4 px-6">
        <h2 className="text-5xl font-black text-[#fdf5e6] tracking-tight drop-shadow-lg">
          Ваше <span className="text-[#ffebcd]">угощение</span>
        </h2>
        <div className="bg-[#7d4f39] border-[10px] border-[#fdf5e6] p-8 rounded-[3rem] shadow-2xl">
          <p className="text-[#fdf5e6] text-xl font-bold italic">«{results.summary}»</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-12">
        {results.recommendations.map((gift, idx) => (
          <GiftCard key={idx} gift={gift} index={idx} />
        ))}
      </div>

      <div className="flex justify-center pt-8">
        <button 
          onClick={onReset} 
          className="px-16 py-6 bg-[#fdf5e6] text-[#7d4f39] rounded-2xl font-black shadow-2xl hover:scale-105 transition-all"
        >
          НОВЫЙ РЕЦЕПТ
        </button>
      </div>
    </div>
  );
};

const GiftCard: React.FC<{ gift: GiftRecommendation; index: number }> = ({ gift, index }) => (
  <div className="group relative bg-[#7d4f39] candy-dots rounded-[3.5rem] p-10 border-[10px] border-[#fdf5e6] shadow-2xl animate-slideUp">
    <div className="flex flex-col md:flex-row gap-10 items-start">
      <div className="flex-grow space-y-6">
        <div className="flex items-center gap-4">
          <span className="bg-[#fdf5e6] text-[#7d4f39] text-[10px] font-black uppercase px-5 py-2 rounded-full">{gift.category}</span>
          <span className="text-[#ffebcd] text-xs font-black">≈ {gift.estimatedPrice}</span>
        </div>
        <h3 className="text-4xl font-black text-[#fdf5e6] tracking-tight">{gift.title}</h3>
        <p className="text-[#ffebcd] leading-relaxed text-lg">{gift.description}</p>
        <div className="bg-[#5d3a24] p-6 rounded-3xl border-4 border-[#fdf5e6]/30">
          <p className="text-base text-[#fdf5e6] font-bold italic">«{gift.whyItFits}»</p>
        </div>
      </div>
      <div className="flex-shrink-0">
        <a 
          href={`https://www.google.com/search?q=${encodeURIComponent(gift.title + ' купить подарок')}`} 
          target="_blank" 
          rel="noopener noreferrer"
          className="px-12 py-6 bg-[#fdf5e6] text-[#7d4f39] font-black rounded-2xl hover:bg-white transition-all block text-center"
        >
          КУПИТЬ
        </a>
      </div>
    </div>
  </div>
);

export default ResultsDisplay;
