
import React, { useState, useEffect } from 'react';
import { useAssessment } from '../context/AssessmentContext';
import { Question as QuestionType, AnswerOption } from '../types';
import { Button } from '@/components/ui/button';
import ProgressBar from './ProgressBar';

const AssessmentQuestion: React.FC = () => {
  const { 
    currentQuestion, 
    questions, 
    answers,
    nextQuestion,
    prevQuestion,
    setAnswer,
    completeAssessment
  } = useAssessment();

  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [animateIn, setAnimateIn] = useState(true);

  const question: QuestionType = questions[currentQuestion];
  const isLastQuestion = currentQuestion === questions.length - 1;
  
  // When the question changes, find if there's an existing answer and set it
  useEffect(() => {
    const existingAnswer = answers.find(answer => answer.questionId === question.id);
    setSelectedOption(existingAnswer ? existingAnswer.selectedOption : null);
    
    // Reset animation state
    setAnimateIn(false);
    setTimeout(() => setAnimateIn(true), 50);
  }, [currentQuestion, question.id, answers]);

  const handleOptionSelect = (optionId: string) => {
    setSelectedOption(optionId);
    setAnswer(question.id, optionId);
  };

  const handleNext = () => {
    if (isLastQuestion) {
      completeAssessment();
    } else {
      nextQuestion();
    }
  };

  // Determine category label
  const getCategoryLabel = (category: string) => {
    switch(category) {
      case 'attachment': return 'Attachment Style';
      case 'love-language': return 'Love Language';
      case 'conflict': return 'Conflict Resolution';
      case 'vision': return 'Future Vision';
      default: return 'Question';
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 animate-fade-in">
      <ProgressBar />
      
      <div className={`question-card ${animateIn ? 'animate-fade-in' : 'opacity-0'}`}>
        <div className="mb-5">
          <span className="inline-block px-3 py-1 text-sm rounded-full bg-harmony-100 text-harmony-800 mb-2">
            {getCategoryLabel(question.category)}
          </span>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-6">{question.text}</h2>
        </div>

        <div className="space-y-3 mb-8">
          {question.options.map((option: AnswerOption) => (
            <div
              key={option.id}
              className={`answer-option ${selectedOption === option.id ? 'selected' : ''}`}
              onClick={() => handleOptionSelect(option.id)}
            >
              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mr-2
                ${selectedOption === option.id 
                  ? 'border-love-500 bg-love-500' 
                  : 'border-gray-300'}`
              }>
                {selectedOption === option.id && (
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                )}
              </div>
              <span>{option.text}</span>
            </div>
          ))}
        </div>

        <div className="flex justify-between mt-8">
          {currentQuestion > 0 ? (
            <Button
              onClick={prevQuestion}
              variant="outline"
              className="btn-outline"
            >
              Previous
            </Button>
          ) : (
            <div></div> // Empty div for spacing
          )}
          
          <Button
            onClick={handleNext}
            disabled={!selectedOption}
            className="btn-primary"
          >
            {isLastQuestion ? 'Complete Assessment' : 'Next Question'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AssessmentQuestion;
