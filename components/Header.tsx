
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between bg-[#7d4f39] border-[10px] border-[#fdf5e6] rounded-[2.5rem] px-8 py-4 shadow-2xl relative overflow-hidden">
        {/* Конфетти и леденцы */}
        <div className="absolute inset-0 candy-dots opacity-30 pointer-events-none"></div>
        <div className="big-candy bg-[#c41e3a] w-3 h-3 top-2 left-[20%] opacity-40"></div>
        <div className="big-candy bg-[#145a32] w-4 h-4 bottom-2 right-[30%] opacity-40"></div>
        
        {/* Орнамент-полоса */}
        <div className="absolute bottom-0 left-0 w-full icing-ornament opacity-10 h-2"></div>
        
        <div className="flex items-center space-x-4 group cursor-pointer relative z-10">
          <div className="relative">
            <div className="absolute inset-0 bg-white blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
            <div className="relative w-12 h-12 bg-[#fdf5e6] rounded-2xl flex items-center justify-center shadow-2xl transform group-hover:rotate-12 transition-transform border-2 border-[#7d4f39]/20">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-[#7d4f39]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-black tracking-tight text-[#fdf5e6] leading-none drop-shadow-lg">
              Ginger<span className="text-[#ffebcd]">Genius</span>
            </h1>
            <p className="text-[10px] text-[#ffebcd]/90 font-black uppercase tracking-[0.4em] mt-1.5 flex items-center gap-2">
               <span className="text-[#145a32]">✦</span> РОЖДЕСТВЕНСКИЙ ИИ <span className="text-[#c41e3a]">✦</span>
            </p>
          </div>
        </div>
        
        <div className="hidden md:flex items-center space-x-3 relative z-10">
          <div className="flex items-center space-x-2 bg-[#5d3a24]/60 text-[#fdf5e6] text-xs px-5 py-2.5 rounded-full font-black border-2 border-[#fdf5e6]/40 shadow-inner">
            <span className="w-2.5 h-2.5 bg-[#fdf5e6] rounded-full animate-pulse shadow-[0_0_8px_white]"></span>
            <span className="uppercase tracking-[0.2em] text-[10px]">Пряники в печи</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
