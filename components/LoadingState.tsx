
import React, { useEffect, useState } from 'react';

const messages = ["Замешиваем тесто...", "Добавляем специи...", "Рисуем глазурью...", "Украшаем леденцами...", "Готово к подаче!"];

const LoadingState: React.FC = () => {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx(p => (p + 1) % messages.length), 2000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center py-20 animate-fadeIn">
      <div className="w-44 h-44 bg-[#7d4f39] border-[10px] border-[#fdf5e6] rounded-[2.5rem] flex items-center justify-center animate-bounce shadow-[0_20px_60px_rgba(0,0,0,0.5)] relative candy-dots overflow-hidden">
        <div className="absolute inset-0 bg-white/5 animate-pulse"></div>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-[#fdf5e6] relative z-10 drop-shadow-lg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      </div>
      <div className="mt-12 text-center">
        <h3 className="text-3xl font-black text-[#fdf5e6] tracking-tight drop-shadow-md">Печем ваши идеи...</h3>
        <p className="mt-4 text-[#ffebcd] font-bold uppercase tracking-[0.4em] text-[10px] opacity-80 h-4">{messages[idx]}</p>
      </div>
      
      <div className="mt-10 flex space-x-2">
        <div className="w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
        <div className="w-2 h-2 bg-green-500 rounded-full animate-ping delay-75"></div>
        <div className="w-2 h-2 bg-red-500 rounded-full animate-ping delay-150"></div>
      </div>
    </div>
  );
};

export default LoadingState;
