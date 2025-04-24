
import React, { useState } from 'react';
import { useAssessment } from '../context/AssessmentContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Heart } from 'lucide-react';

const AssessmentIntro: React.FC = () => {
  const { setName, setPartnerName, startAssessment } = useAssessment();
  const [nameInput, setNameInput] = useState('');
  const [partnerNameInput, setPartnerNameInput] = useState('');
  const [isValid, setIsValid] = useState(false);

  const handleStart = () => {
    if (nameInput.trim() && partnerNameInput.trim()) {
      setName(nameInput);
      setPartnerName(partnerNameInput);
      startAssessment();
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setter: React.Dispatch<React.SetStateAction<string>>
  ) => {
    setter(e.target.value);
    // Check if both inputs have content
    setTimeout(() => {
      setIsValid(!!nameInput.trim() && !!partnerNameInput.trim());
    }, 0);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10 text-center animate-fade-in">
      <Heart size={48} className="mx-auto text-love-600 animate-pulse-gentle" />
      
      <h1 className="font-headings text-4xl md:text-5xl font-bold mt-6 mb-4 gradient-heading">
        Couple's Relationship Dynamics Assessment
      </h1>
      
      <p className="text-lg text-gray-600 mb-8">
        Discover insights about your relationship dynamics, communication patterns, and emotional compatibility with our research-backed assessment.
      </p>
      
      <div className="bg-white p-8 rounded-xl shadow-lg border border-love-100 mb-8">
        <h2 className="font-headings text-2xl font-semibold mb-6 text-harmony-700">How It Works</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="p-4 rounded-lg bg-harmony-50 border border-harmony-100">
            <div className="bg-harmony-100 w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-harmony-700 font-bold">1</span>
            </div>
            <h3 className="font-medium mb-2">Complete the Assessment</h3>
            <p className="text-sm text-gray-600">Answer 30 questions about your relationship dynamics</p>
          </div>
          
          <div className="p-4 rounded-lg bg-harmony-50 border border-harmony-100">
            <div className="bg-harmony-100 w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-harmony-700 font-bold">2</span>
            </div>
            <h3 className="font-medium mb-2">Get Your Results</h3>
            <p className="text-sm text-gray-600">Receive personalized insights based on your responses</p>
          </div>
          
          <div className="p-4 rounded-lg bg-harmony-50 border border-harmony-100">
            <div className="bg-harmony-100 w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-harmony-700 font-bold">3</span>
            </div>
            <h3 className="font-medium mb-2">Apply the Insights</h3>
            <p className="text-sm text-gray-600">Use recommendations to strengthen your relationship</p>
          </div>
        </div>
        
        <div className="text-left bg-love-50 p-6 rounded-lg border border-love-100 mb-6">
          <h3 className="font-medium mb-3 text-center text-love-700">To get started, please enter your names:</h3>
          
          <div className="space-y-4">
            <div>
              <label htmlFor="your-name" className="block text-sm font-medium mb-1 text-gray-700">Your Name</label>
              <Input
                id="your-name"
                value={nameInput}
                onChange={(e) => handleInputChange(e, setNameInput)}
                placeholder="Enter your name"
                className="w-full"
              />
            </div>
            
            <div>
              <label htmlFor="partner-name" className="block text-sm font-medium mb-1 text-gray-700">Your Partner's Name</label>
              <Input
                id="partner-name"
                value={partnerNameInput}
                onChange={(e) => handleInputChange(e, setPartnerNameInput)}
                placeholder="Enter your partner's name"
                className="w-full"
              />
            </div>
          </div>
        </div>
        
        <div className="mt-6">
          <Button 
            onClick={handleStart} 
            disabled={!isValid}
            className="btn-primary text-lg px-10 py-6"
          >
            Begin Assessment
          </Button>
        </div>
      </div>
      
      <div className="text-sm text-gray-500">
        <p className="mb-2">This assessment is based on research in attachment theory, love languages, and conflict resolution styles.</p>
        <p>Your responses are private and will not be stored or shared.</p>
      </div>
    </div>
  );
};

export default AssessmentIntro;
