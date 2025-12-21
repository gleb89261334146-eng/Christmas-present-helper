
export interface GiftRequest {
  recipientName: string;
  age: string;
  gender: string;
  personality: string[];
  interests: string[];
  occasion: string;
  budget: string;
  additionalInfo: string;
}

export interface GiftRecommendation {
  id: string;
  title: string;
  description: string;
  estimatedPrice: string;
  whyItFits: string;
  category: string;
  tags: string[];
}

export interface RecommendationResponse {
  recommendations: GiftRecommendation[];
  summary: string;
}

export enum FormStep {
  Identity = 0,
  Personality = 1,
  Occasion = 2,
  Review = 3
}
