
import React, { useState, useCallback } from 'react';
import { GiftRequest, RecommendationResponse, FormStep } from './types.ts';
import { getGiftRecommendations } from './services/geminiService.ts';
import Header from './components/Header.tsx';
import FormWizard from './components/FormWizard.tsx';
import ResultsDisplay from './components/ResultsDisplay.tsx';
import LoadingState from './components/LoadingState.tsx';

const App: React.FC = () => {
  const [step, setStep] = useState<FormStep>(FormStep.Identity);
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<RecommendationResponse | null>(null);
  const [formData, setFormData] = useState<GiftRequest>({
    recipientName: '', 
    age: '', 
    gender: 'Другой', 
    personality: [], 
    interests: [], 
    occasion: 'Новый год', 
    budget: '', 
    additionalInfo: ''
  });

  const handleSubmit = useCallback(async () => {
    if (!formData.recipientName || !formData.age) return alert("Пожалуйста, заполните имя и возраст получателя.");
    setIsLoading(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    try {
      const recs = await getGiftRecommendations(formData);
      setResults(recs);
    } catch (e) { 
      console.error(e);
      alert("Ошибка при получении рекомендаций. Попробуйте еще раз."); 
    }
    finally { setIsLoading(false); }
  }, [formData]);

  const reset = () => { 
    setResults(null); 
    setStep(FormStep.Identity); 
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-[#fdf5e6] selection:text-[#7d4f39]">
      <Header />
      <main className="flex-grow container mx-auto px-6 py-12 max-w-5xl relative z-20">
        {!results && !isLoading && (
          <div className="animate-fadeIn">
            <FormWizard 
              step={step} 
              setStep={setStep} 
              formData={formData} 
              setFormData={setFormData} 
              onSubmit={handleSubmit} 
            />
          </div>
        )}
        {isLoading && <LoadingState />}
        {results && !isLoading && (
          <ResultsDisplay 
            results={results} 
            onReset={reset} 
            recipientName={formData.recipientName} 
          />
        )}
      </main>
      <footer className="py-12 px-6 text-center text-[#ffebcd]/40 relative z-20">
        <p className="text-[10px] font-black uppercase tracking-[0.3em] mb-2">© 2025 Ginger GiftGenius AI</p>
        <p className="text-[8px] uppercase tracking-widest opacity-50">С любовью от праздничных эльфов</p>
      </footer>
      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: scale(0.98); } to { opacity: 1; transform: scale(1); } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fadeIn { animation: fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-slideUp { animation: slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
      `}</style>
    </div>
  );
};

export default App;
