
import React from 'react';
import { useAssessment } from '../context/AssessmentContext';

const ProgressBar: React.FC = () => {
  const { currentQuestion, questions } = useAssessment();
  
  const progress = ((currentQuestion + 1) / questions.length) * 100;
  
  return (
    <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2 mb-6">
      <div 
        className="bg-gradient-to-r from-love-500 to-harmony-500 h-2.5 rounded-full transition-all duration-300 ease-in-out"
        style={{ width: `${progress}%` }}
      ></div>
      <div className="flex justify-between text-xs text-gray-500 mt-1">
        <span>Question {currentQuestion + 1} of {questions.length}</span>
        <span>{Math.round(progress)}% complete</span>
      </div>
    </div>
  );
};

export default ProgressBar;
