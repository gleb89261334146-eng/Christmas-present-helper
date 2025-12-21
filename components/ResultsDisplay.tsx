
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
      <div className="text-center space-y-4 px-6 relative">
        <h2 className="text-5xl font-black text-[#fdf5e6] tracking-tight drop-shadow-lg">Ваше <span className="text-[#ffebcd]">угощение</span></h2>
        <div className="max-w-2xl mx-auto py-8 bg-[#7d4f39] border-[10px] border-[#fdf5e6] p-8 rounded-[3rem] shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full icing-ornament opacity-20"></div>
          <p className="text-[#fdf5e6] text-xl font-bold italic drop-shadow-md z-10 relative">«{results.summary}»</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-12">
        {results.recommendations.map((gift, idx) => (
          <GiftCard key={idx} gift={gift} index={idx} />
        ))}
      </div>

      <div className="flex flex-col items-center pt-8">
        <button 
          onClick={onReset} 
          className="px-16 py-6 bg-[#fdf5e6] text-[#7d4f39] rounded-2xl font-black shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center space-x-3 text-lg"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          <span>НОВЫЙ РЕЦЕПТ</span>
        </button>
      </div>
    </div>
  );
};

const GiftCard: React.FC<{ gift: GiftRecommendation; index: number }> = ({ gift, index }) => (
  <div className="group relative bg-[#7d4f39] candy-dots rounded-[3.5rem] p-8 md:p-12 border-[10px] border-[#fdf5e6] shadow-2xl animate-slideUp transition-all hover:-translate-y-3">
    {/* Хаотичные крупные леденцы на карточке */}
    <div className="big-candy bg-[#c41e3a] w-4 h-4 top-[8%] right-[5%]"></div>
    <div className="big-candy bg-[#145a32] w-5 h-5 bottom-[12%] left-[4%]"></div>
    <div className="big-candy bg-[#facc15] w-3 h-3 top-[40%] left-[2%] opacity-60"></div>
    
    {/* Рождественские иконки в углах */}
    <div className="absolute top-4 left-4 opacity-10 pointer-events-none">
       <svg width="30" height="30" viewBox="0 0 24 24" fill="#fdf5e6">
         <path d="M12,2L4.5,20.29L5.21,21L12,18L18.79,21L19.5,20.29L12,2Z" />
       </svg>
    </div>
    
    <div className="relative z-10 flex flex-col md:flex-row gap-10 items-start">
      <div className="flex-grow space-y-6">
        <div className="flex items-center gap-4">
          <span className="inline-block bg-[#fdf5e6] text-[#7d4f39] text-[10px] font-black uppercase px-5 py-2 rounded-full shadow-lg">{gift.category}</span>
          <span className="text-[#ffebcd] text-xs font-black drop-shadow-sm">≈ {gift.estimatedPrice}</span>
        </div>
        <h3 className="text-4xl font-black text-[#fdf5e6] tracking-tight drop-shadow-md">{gift.title}</h3>
        <p className="text-[#ffebcd] leading-relaxed font-semibold text-lg opacity-95">{gift.description}</p>
        <div className="bg-[#5d3a24] p-6 rounded-3xl border-4 border-[#fdf5e6]/30 shadow-inner relative overflow-hidden">
          <div className="absolute top-0 right-0 p-2 opacity-5">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="#fff"><path d="M12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2Z" /></svg>
          </div>
          <h4 className="text-[10px] font-black text-[#fdf5e6]/50 uppercase tracking-widest mb-3">Почему это идеально:</h4>
          <p className="text-base text-[#fdf5e6] font-bold italic leading-relaxed">«{gift.whyItFits}»</p>
        </div>
      </div>
      <div className="flex-shrink-0 self-stretch flex items-center">
        <a 
          href={`https://www.google.com/search?q=${encodeURIComponent(gift.title + ' купить подарок')}`} 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full md:w-auto px-12 py-6 bg-[#fdf5e6] text-[#7d4f39] font-black rounded-2xl hover:bg-white transition-all shadow-2xl text-center active:scale-95 text-lg"
        >
          КУПИТЬ
        </a>
      </div>
    </div>
  </div>
);

export default ResultsDisplay;
