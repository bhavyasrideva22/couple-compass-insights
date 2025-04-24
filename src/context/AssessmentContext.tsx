
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Question, Answer, AssessmentResults } from '../types';
import { questions } from '../data/questionData';
import { calculateResults } from '../utils/calculateResults';

type AssessmentContextType = {
  currentQuestion: number;
  questions: Question[];
  answers: Answer[];
  results: AssessmentResults | null;
  name: string;
  partnerName: string;
  isCompleted: boolean;
  setName: (name: string) => void;
  setPartnerName: (name: string) => void;
  setAnswer: (questionId: number, selectedOption: string) => void;
  nextQuestion: () => void;
  prevQuestion: () => void;
  startAssessment: () => void;
  completeAssessment: () => void;
  resetAssessment: () => void;
};

const initialResults: AssessmentResults = {
  attachment: {
    secure: 0,
    anxious: 0,
    avoidant: 0,
    disorganized: 0,
  },
  loveLanguage: {
    wordsOfAffirmation: 0,
    actsOfService: 0,
    receivingGifts: 0,
    qualityTime: 0,
    physicalTouch: 0,
  },
  conflict: {
    collaborative: 0,
    compromising: 0,
    accommodating: 0,
    avoiding: 0,
    competing: 0,
  },
  vision: {
    alignment: 0,
  },
  strengths: [],
  growthAreas: [],
  recommendations: [],
};

const AssessmentContext = createContext<AssessmentContextType | undefined>(undefined);

export const AssessmentProvider = ({ children }: { children: ReactNode }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [results, setResults] = useState<AssessmentResults | null>(null);
  const [name, setName] = useState('');
  const [partnerName, setPartnerName] = useState('');
  const [isCompleted, setIsCompleted] = useState(false);

  const setAnswer = (questionId: number, selectedOption: string) => {
    const existingAnswerIndex = answers.findIndex(answer => answer.questionId === questionId);
    
    if (existingAnswerIndex !== -1) {
      const updatedAnswers = [...answers];
      updatedAnswers[existingAnswerIndex] = { questionId, selectedOption };
      setAnswers(updatedAnswers);
    } else {
      setAnswers([...answers, { questionId, selectedOption }]);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const startAssessment = () => {
    setCurrentQuestion(0);
  };

  const completeAssessment = () => {
    const assessmentResults = calculateResults(answers);
    setResults(assessmentResults);
    setIsCompleted(true);
  };

  const resetAssessment = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setResults(null);
    setName('');
    setPartnerName('');
    setIsCompleted(false);
  };

  return (
    <AssessmentContext.Provider
      value={{
        currentQuestion,
        questions,
        answers,
        results,
        name,
        partnerName,
        isCompleted,
        setName,
        setPartnerName,
        setAnswer,
        nextQuestion,
        prevQuestion,
        startAssessment,
        completeAssessment,
        resetAssessment,
      }}
    >
      {children}
    </AssessmentContext.Provider>
  );
};

export const useAssessment = (): AssessmentContextType => {
  const context = useContext(AssessmentContext);
  if (context === undefined) {
    throw new Error('useAssessment must be used within an AssessmentProvider');
  }
  return context;
};
