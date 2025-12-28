
import React from 'react';
import { FormStep, GiftRequest } from '../types.ts';

interface FormWizardProps {
  step: FormStep;
  setStep: (step: FormStep) => void;
  formData: GiftRequest;
  setFormData: (data: GiftRequest) => void;
  onSubmit: () => void;
}

const PERSONALITY_TRAITS = [
  "Интроверт", "Экстраверт", "Творческий", "Аналитик", 
  "Лидер", "Мечтатель", "Перфекционист", "Скептик", 
  "Оптимист", "Трудоголик", "Гедонист", "Минималист", 
  "Альтруист", "Романтик", "Прагматик", "Душа компании",
  "Сентиментальный", "Авантюрист"
];

const INTERESTS = [
  "Путешествия", "Фотография", "Музыка", "Кино", 
  "Литература", "Гейминг", "Кулинария", "Фитнес", 
  "Йога", "Технологии", "Живопись", "Садоводство", 
  "Астрономия", "История", "Автомобили", "Мода", 
  "Коллекционирование", "Настольные игры", "Кодинг", "Дизайн", 
  "Психология", "Виноделие", "Эко-активизм", "Животные", 
  "Спорт", "Кофе и Чай", "Рукоделие", "Космос"
];

const OCCASIONS = [
  "Новый год", "Рождество", "День рождения", 
  "Годовщина", "Просто так", "Новоселье", "Повышение"
];

const DecorativeElements = () => (
  <>
    <div className="big-candy bg-[#c41e3a] w-5 h-5 top-[5%] left-[8%]"></div>
    <div className="big-candy bg-[#145a32] w-6 h-6 top-[15%] right-[12%]"></div>
    <div className="big-candy bg-[#c41e3a] w-4 h-4 bottom-[10%] left-[15%]"></div>
    <div className="big-candy bg-[#145a32] w-7 h-7 bottom-[5%] right-[20%]"></div>
    
    <div className="absolute top-4 right-8 opacity-20 pointer-events-none">
       <svg width="60" height="60" viewBox="0 0 24 24" fill="#fdf5e6">
         <path d="M12 2L4.5 20.29L5.21 21L12 18L18.79 21L19.5 20.29L12 2Z" />
       </svg>
    </div>
    <div className="absolute bottom-10 left-6 opacity-20 pointer-events-none rotate-12">
       <svg width="40" height="40" viewBox="0 0 24 24" fill="#fdf5e6">
         <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
       </svg>
    </div>
  </>
);

const FormWizard: React.FC<FormWizardProps> = ({ step, setStep, formData, setFormData, onSubmit }) => {
  const updateField = (field: keyof GiftRequest, value: any) => 
    setFormData({ ...formData, [field]: value });

  const toggleItem = (field: 'personality' | 'interests', item: string) => {
    const current = [...formData[field]];
    const idx = current.indexOf(item);
    idx > -1 ? current.splice(idx, 1) : current.push(item);
    updateField(field, current);
  };

  const stepsLabels = ["Основы", "Вайб", "Детали", "Печь!"];

  return (
    <div className="ginger-house candy-dots p-8 md:p-14 overflow-hidden shadow-2xl relative">
      <DecorativeElements />
      <div className="absolute top-0 left-0 w-full icing-ornament opacity-20 z-10"></div>

      <div className="relative z-10 flex mb-16 justify-between items-center max-w-xl mx-auto">
        <div className="absolute h-2 bg-[#5d3a24] w-full top-6 left-0 -z-10 rounded-full"></div>
        <div 
          className="absolute h-2 bg-[#fdf5e6] transition-all duration-500 top-6 left-0 -z-10 rounded-full shadow-[0_0_15px_#fdf5e6]" 
          style={{ width: `${(step / 3) * 100}%` }}
        ></div>
        
        {[0, 1, 2, 3].map((s) => (
          <div key={s} className="flex flex-col items-center">
            <button 
              onClick={() => step > s && setStep(s)}
              className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-500 border-4 ${
                step === s ? 'bg-[#fdf5e6] text-[#7d4f39] border-[#fdf5e6] scale-125 shadow-[0_0_20px_#fdf5e6]' : 
                step > s ? 'bg-[#fdf5e6]/40 text-[#fdf5e6] border-[#fdf5e6]/60' : 'bg-[#5d3a24] text-[#7d4f39] border-[#5d3a24]'
              }`}
            >
              {s + 1}
            </button>
            <span className={`text-[10px] mt-4 font-black uppercase tracking-widest ${step >= s ? 'text-[#fdf5e6]' : 'text-[#5d3a24]'}`}>
              {stepsLabels[s]}
            </span>
          </div>
        ))}
      </div>

      <div className="relative z-10 min-h-[440px]">
        {step === FormStep.Identity && (
          <div className="space-y-10 animate-fadeIn">
            <div className="text-center">
              <h2 className="text-4xl font-black text-[#fdf5e6] mb-4 tracking-tight drop-shadow-lg">Кто наш гость?</h2>
              <p className="text-[#ffebcd] font-medium opacity-90">Начнем с базовых ингредиентов.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-xs font-black text-[#fdf5e6] uppercase tracking-widest ml-1">Имя</label>
                <input 
                  type="text" 
                  className="w-full px-6 py-5 rounded-2xl border-4 border-[#fdf5e6]/40 focus:border-[#fdf5e6] transition-all outline-none bg-[#5d3a24] text-[#fdf5e6] font-bold placeholder:text-[#7d4f39]"
                  placeholder="Имя"
                  value={formData.recipientName}
                  onChange={(e) => updateField('recipientName', e.target.value)}
                />
              </div>
              <div className="space-y-3">
                <label className="text-xs font-black text-[#fdf5e6] uppercase tracking-widest ml-1">Возраст</label>
                <input 
                  type="number" 
                  className="w-full px-6 py-5 rounded-2xl border-4 border-[#fdf5e6]/40 focus:border-[#fdf5e6] transition-all outline-none bg-[#5d3a24] text-[#fdf5e6] font-bold"
                  value={formData.age}
                  onChange={(e) => updateField('age', e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-4">
              <label className="text-xs font-black text-[#fdf5e6] uppercase tracking-widest ml-1 text-center block">Пол</label>
              <div className="grid grid-cols-3 gap-4">
                {['Мужской', 'Женский', 'Другой'].map(g => (
                  <button
                    key={g}
                    onClick={() => updateField('gender', g)}
                    className={`py-4 rounded-2xl border-4 font-bold transition-all ${
                      formData.gender === g 
                        ? 'bg-[#fdf5e6] text-[#7d4f39] border-[#fdf5e6] shadow-xl scale-105' 
                        : 'border-[#5d3a24] bg-[#5d3a24]/50 text-[#fdf5e6]/60 hover:border-[#fdf5e6]/40'
                    }`}
                  >
                    {g}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {step === FormStep.Personality && (
          <div className="space-y-10 animate-fadeIn">
            <div className="text-center">
              <h2 className="text-4xl font-black text-[#fdf5e6] mb-4 tracking-tight drop-shadow-lg">Внутренний мир</h2>
              <p className="text-[#ffebcd] font-medium opacity-90">Выберите тип личности и то, что человек любит.</p>
            </div>

            <div className="space-y-8">
              <div>
                <label className="text-xs font-black text-[#fdf5e6] uppercase tracking-widest mb-4 block text-center opacity-60">Тип личности</label>
                <div className="flex flex-wrap gap-2.5 justify-center">
                  {PERSONALITY_TRAITS.map(trait => (
                    <button
                      key={trait}
                      onClick={() => toggleItem('personality', trait)}
                      className={`px-4 py-2 rounded-xl text-xs font-bold border-2 transition-all ${
                        formData.personality.includes(trait)
                          ? 'bg-[#fdf5e6] text-[#7d4f39] border-[#fdf5e6] shadow-lg'
                          : 'border-[#5d3a24] text-[#fdf5e6]/80 bg-[#5d3a24]/50 hover:border-[#fdf5e6]/30'
                      }`}
                    >
                      {trait}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs font-black text-[#fdf5e6] uppercase tracking-widest mb-4 block text-center opacity-60">Интересы и Хобби</label>
                <div className="flex flex-wrap gap-2.5 justify-center">
                  {INTERESTS.map(interest => (
                    <button
                      key={interest}
                      onClick={() => toggleItem('interests', interest)}
                      className={`px-4 py-2 rounded-xl text-xs font-bold border-2 transition-all ${
                        formData.interests.includes(interest)
                          ? 'bg-[#145a32] text-white border-[#fdf5e6] shadow-lg'
                          : 'border-[#5d3a24] text-[#fdf5e6]/80 bg-[#5d3a24]/50 hover:border-[#fdf5e6]/30'
                      }`}
                    >
                      {interest}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {step === FormStep.Occasion && (
          <div className="space-y-10 animate-fadeIn">
            <div className="text-center">
              <h2 className="text-4xl font-black text-[#fdf5e6] mb-4 tracking-tight drop-shadow-lg">Когда подавать?</h2>
              <p className="text-[#ffebcd] font-medium opacity-90">Повод и бюджет подарка.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-xs font-black text-[#fdf5e6] uppercase tracking-widest ml-1">Событие</label>
                <select
                  className="w-full px-6 py-5 rounded-2xl border-4 border-[#fdf5e6]/40 focus:border-[#fdf5e6] transition-all outline-none bg-[#5d3a24] text-[#fdf5e6] font-bold"
                  value={formData.occasion}
                  onChange={(e) => updateField('occasion', e.target.value)}
                >
                  {OCCASIONS.map(occ => <option key={occ} value={occ} className="bg-[#7d4f39]">{occ}</option>)}
                </select>
              </div>
              <div className="space-y-3">
                <label className="text-xs font-black text-[#fdf5e6] uppercase tracking-widest ml-1">Бюджет</label>
                <input
                  type="text"
                  className="w-full px-6 py-5 rounded-2xl border-4 border-[#fdf5e6]/40 focus:border-[#fdf5e6] transition-all outline-none bg-[#5d3a24] text-[#fdf5e6] font-bold placeholder:text-[#7d4f39]"
                  placeholder="Бюджет (напр. до 5000р)"
                  value={formData.budget}
                  onChange={(e) => updateField('budget', e.target.value)}
                />
              </div>
            </div>
          </div>
        )}

        {step === FormStep.Review && (
          <div className="space-y-10 animate-fadeIn">
            <div className="text-center">
              <h2 className="text-4xl font-black text-[#fdf5e6] mb-4 tracking-tight drop-shadow-lg">Рецепт готов</h2>
              <p className="text-[#ffebcd] font-medium opacity-90">Проверьте данные перед выпеканием идей.</p>
            </div>
            <div className="bg-[#5d3a24] border-[10px] border-[#fdf5e6] rounded-[3rem] p-8 text-[#fdf5e6] shadow-inner relative overflow-hidden">
               <div className="absolute top-3 left-3 w-4 h-4 bg-[#fdf5e6] rounded-full shadow-md"></div>
               <div className="absolute top-3 right-3 w-4 h-4 bg-[#fdf5e6] rounded-full shadow-md"></div>
               <div className="absolute bottom-3 left-3 w-4 h-4 bg-[#fdf5e6] rounded-full shadow-md"></div>
               <div className="absolute bottom-3 right-3 w-4 h-4 bg-[#fdf5e6] rounded-full shadow-md"></div>
               
              <p className="text-3xl font-black text-center icing-text drop-shadow-md">
                {formData.recipientName}, {formData.age} лет
              </p>
              <div className="mt-8 flex flex-col items-center space-y-3 opacity-95">
                <div className="px-6 py-2 bg-[#fdf5e6]/10 rounded-full border border-[#fdf5e6]/20">
                  <p className="font-bold text-[#ffebcd]">Праздник: {formData.occasion}</p>
                </div>
                <p className="text-sm italic text-center px-4 text-[#ffebcd]">
                  «{formData.personality.slice(0, 3).join(", ")}... и {formData.interests.length} увлечений»
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-6 mt-16 pt-10 border-t-4 border-[#fdf5e6]/20">
        <button
          onClick={() => step > 0 && setStep(step - 1)}
          className={`font-black text-[#fdf5e6]/70 hover:text-[#fdf5e6] uppercase tracking-widest text-xs transition-all ${step === 0 ? 'opacity-0 pointer-events-none' : ''}`}
        >
          Назад
        </button>
        <button
          onClick={step === FormStep.Review ? onSubmit : () => setStep(step + 1)}
          className="w-full md:w-auto px-16 py-6 bg-[#fdf5e6] text-[#7d4f39] rounded-2xl font-black shadow-[0_12px_40px_rgba(253,245,230,0.4)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center space-x-3 text-lg"
        >
          <span>{step === FormStep.Review ? "ИСПЕЧЬ ИДЕИ" : "ДАЛЕЕ"}</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full icing-ornament opacity-20 rotate-180 z-10"></div>
    </div>
  );
};

export default FormWizard;
