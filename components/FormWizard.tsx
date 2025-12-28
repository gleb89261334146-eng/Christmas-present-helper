
import React from 'react';
import { FormStep, GiftRequest } from '../types';

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
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-xs font-black text-[#fdf5e6] uppercase tracking-widest ml-1">Имя</label>
                <input 
                  type="text" 
                  className="w-full px-6 py-5 rounded-2xl border-4 border-[#fdf5e6]/40 focus:border-[#fdf5e6] transition-all outline-none bg-[#5d3a24] text-[#fdf5e6] font-bold"
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
                        : 'border-[#5d3a24] bg-[#5d3a24]/50 text-[#fdf5e6]/60'
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
                          ? 'bg-[#fdf5e6] text-[#7d4f39] border-[#fdf5e6]'
                          : 'border-[#5d3a24] text-[#fdf5e6]/80 bg-[#5d3a24]/50'
                      }`}
                    >
                      {trait}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs font-black text-[#fdf5e6] uppercase tracking-widest mb-4 block text-center opacity-60">Интересы</label>
                <div className="flex flex-wrap gap-2.5 justify-center">
                  {INTERESTS.map(interest => (
                    <button
                      key={interest}
                      onClick={() => toggleItem('interests', interest)}
                      className={`px-4 py-2 rounded-xl text-xs font-bold border-2 transition-all ${
                        formData.interests.includes(interest)
                          ? 'bg-[#145a32] text-white border-[#fdf5e6]'
                          : 'border-[#5d3a24] text-[#fdf5e6]/80 bg-[#5d3a24]/50'
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
              <h2 className="text-4xl font-black text-[#fdf5e6] mb-4 tracking-tight drop-shadow-lg">Детали</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-xs font-black text-[#fdf5e6] uppercase tracking-widest ml-1">Событие</label>
                <select
                  className="w-full px-6 py-5 rounded-2xl border-4 border-[#fdf5e6]/40 bg-[#5d3a24] text-[#fdf5e6] font-bold"
                  value={formData.occasion}
                  onChange={(e) => updateField('occasion', e.target.value)}
                >
                  {OCCASIONS.map(occ => <option key={occ} value={occ}>{occ}</option>)}
                </select>
              </div>
              <div className="space-y-3">
                <label className="text-xs font-black text-[#fdf5e6] uppercase tracking-widest ml-1">Бюджет</label>
                <input
                  type="text"
                  className="w-full px-6 py-5 rounded-2xl border-4 border-[#fdf5e6]/40 bg-[#5d3a24] text-[#fdf5e6] font-bold"
                  placeholder="Бюджет (напр. до 5000р)"
                  value={formData.budget}
                  onChange={(e) => updateField('budget', e.target.value)}
                />
              </div>
            </div>
          </div>
        )}

        {step === FormStep.Review && (
          <div className="space-y-10 animate-fadeIn text-center">
            <h2 className="text-4xl font-black text-[#fdf5e6] mb-4 tracking-tight drop-shadow-lg">Готово к выпечке!</h2>
            <div className="bg-[#5d3a24] border-[10px] border-[#fdf5e6] rounded-[3rem] p-10 text-[#fdf5e6]">
              <p className="text-3xl font-black">{formData.recipientName}, {formData.age} лет</p>
              <p className="mt-4 text-[#ffebcd] font-bold">{formData.occasion}</p>
            </div>
          </div>
        )}
      </div>

      <div className="relative z-10 flex justify-between items-center mt-16 pt-10 border-t-4 border-[#fdf5e6]/20">
        <button
          onClick={() => step > 0 && setStep(step - 1)}
          className={`font-black text-[#fdf5e6]/70 uppercase tracking-widest text-xs ${step === 0 ? 'opacity-0' : ''}`}
        >
          Назад
        </button>
        <button
          onClick={step === FormStep.Review ? onSubmit : () => setStep(step + 1)}
          className="px-12 py-5 bg-[#fdf5e6] text-[#7d4f39] rounded-2xl font-black shadow-xl hover:scale-105 transition-all"
        >
          {step === FormStep.Review ? "ИСПЕЧЬ ИДЕИ" : "ДАЛЕЕ"}
        </button>
      </div>
    </div>
  );
};

export default FormWizard;
