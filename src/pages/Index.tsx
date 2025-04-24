import React from 'react';
import { AssessmentProvider, useAssessment } from '../context/AssessmentContext';
import AssessmentIntro from '../components/AssessmentIntro';
import AssessmentQuestion from '../components/AssessmentQuestion';
import AssessmentResults from '../components/AssessmentResults';

const AssessmentContent: React.FC = () => {
  const { currentQuestion, isCompleted } = useAssessment();

  // Show results if assessment is completed
  if (isCompleted) {
    return <AssessmentResults />;
  }

  // Show questions if currentQuestion is valid (assessment started)
  if (currentQuestion >= 0 && currentQuestion < 30) {
    return <AssessmentQuestion />;
  }

  // Otherwise show intro screen
  return <AssessmentIntro />;
};

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-love-100 to-harmony-100">
      <AssessmentProvider>
        <AssessmentContent />
      </AssessmentProvider>
    </div>
  );
};

export default Index;
