
import { GoogleGenAI, Type } from "@google/genai";
import { GiftRequest, RecommendationResponse } from "../types";

export const getGiftRecommendations = async (request: GiftRequest): Promise<RecommendationResponse> => {
  // Получаем ключ безопасно, чтобы не уронить приложение, если переменная не определена в браузере
  const apiKey = typeof process !== 'undefined' ? process.env.API_KEY : '';
  
  if (!apiKey) {
    throw new Error("API KEY не найден. Пожалуйста, убедитесь, что ключ настроен.");
  }

  const ai = new GoogleGenAI({ apiKey });
  
  const prompt = `
    Предложи 5 идеальных идей подарков для следующего человека (отвечай ТОЛЬКО на русском языке):
    Имя: ${request.recipientName}
    Возраст: ${request.age}
    Пол: ${request.gender}
    Черты характера: ${request.personality.join(", ")}
    Интересы: ${request.interests.join(", ")}
    Повод: ${request.occasion}
    Бюджет: ${request.budget}
    Дополнительная информация: ${request.additionalInfo}

    Рекомендации должны быть разнообразными, креативными и точно соответствовать деталям.
    Поле "whyItFits" должно объяснять психологическую связь между подарком и личностью/интересами человека.
    Весь текст должен быть на русском языке.
  `;

  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          recommendations: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                id: { type: Type.STRING },
                title: { type: Type.STRING },
                description: { type: Type.STRING },
                estimatedPrice: { type: Type.STRING },
                whyItFits: { type: Type.STRING },
                category: { type: Type.STRING },
                tags: { type: Type.ARRAY, items: { type: Type.STRING } },
              },
              required: ["id", "title", "description", "estimatedPrice", "whyItFits", "category", "tags"]
            }
          },
          summary: { type: Type.STRING, description: "Краткое экспертное резюме того, почему эти подарки были выбраны." }
        },
        required: ["recommendations", "summary"]
      }
    }
  });

  const text = response.text || "{}";
  return JSON.parse(text) as RecommendationResponse;
};
