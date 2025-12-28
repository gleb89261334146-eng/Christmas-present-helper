
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
        <h2 className="text-5xl font-black text-[#fdf5e6] tracking-tight drop-shadow-lg">Ваше <span className="text-[#ffebcd]">угощение</span></h2>
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

const GiftCard: React.FC<{ gift: GiftRecommendation; index: number }> = ({ gift }) => (
  <div className="group relative bg-[#7d4f39] candy-dots rounded-[3.5rem] p-10 border-[10px] border-[#fdf5e6] shadow-2xl animate-slideUp">
    <div className="flex flex-col md:flex-row gap-10 items-start">
      <div