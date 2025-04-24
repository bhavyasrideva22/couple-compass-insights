
export type AnswerOption = {
  id: string;
  text: string;
  value: string;
};

export type Question = {
  id: number;
  text: string;
  category: 'attachment' | 'love-language' | 'conflict' | 'vision';
  options: AnswerOption[];
};

export type Answer = {
  questionId: number;
  selectedOption: string;
};

export type AssessmentResults = {
  attachment: {
    secure: number;
    anxious: number;
    avoidant: number;
    disorganized: number;
  };
  loveLanguage: {
    wordsOfAffirmation: number;
    actsOfService: number;
    receivingGifts: number;
    qualityTime: number;
    physicalTouch: number;
  };
  conflict: {
    collaborative: number;
    compromising: number;
    accommodating: number;
    avoiding: number;
    competing: number;
  };
  vision: {
    alignment: number;
  };
  strengths: string[];
  growthAreas: string[];
  recommendations: string[];
};
