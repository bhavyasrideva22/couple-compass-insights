
import React from 'react';
import { useAssessment } from '../context/AssessmentContext';
import { Button } from '@/components/ui/button';
import { Heart, ChartPie, MessageSquare, Users } from 'lucide-react';

const AssessmentResults: React.FC = () => {
  const { results, name, partnerName, resetAssessment } = useAssessment();

  if (!results) return null;

  // Determine dominant attachment style
  const attachmentStyles = [
    { name: 'Secure', value: results.attachment.secure },
    { name: 'Anxious', value: results.attachment.anxious },
    { name: 'Avoidant', value: results.attachment.avoidant },
    { name: 'Disorganized', value: results.attachment.disorganized }
  ];
  const dominantAttachment = [...attachmentStyles].sort((a, b) => b.value - a.value)[0];

  // Determine dominant love language
  const loveLanguages = [
    { name: 'Words of Affirmation', value: results.loveLanguage.wordsOfAffirmation },
    { name: 'Acts of Service', value: results.loveLanguage.actsOfService },
    { name: 'Receiving Gifts', value: results.loveLanguage.receivingGifts },
    { name: 'Quality Time', value: results.loveLanguage.qualityTime },
    { name: 'Physical Touch', value: results.loveLanguage.physicalTouch }
  ];
  const dominantLoveLanguage = [...loveLanguages].sort((a, b) => b.value - a.value)[0];

  // Determine dominant conflict style
  const conflictStyles = [
    { name: 'Collaborative', value: results.conflict.collaborative },
    { name: 'Compromising', value: results.conflict.compromising },
    { name: 'Accommodating', value: results.conflict.accommodating },
    { name: 'Avoiding', value: results.conflict.avoiding },
    { name: 'Competing', value: results.conflict.competing }
  ];
  const dominantConflict = [...conflictStyles].sort((a, b) => b.value - a.value)[0];

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 animate-fade-in">
      <div className="text-center mb-10">
        <Heart size={48} className="mx-auto text-love-600" />
        <h1 className="font-headings text-3xl md:text-4xl font-bold mt-4 mb-3 gradient-heading">
          Your Relationship Dynamics Results
        </h1>
        <p className="text-lg text-gray-600">
          Thank you for completing the assessment, {name}. Here are your personalized insights.
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white p-6 rounded-xl shadow-md border border-love-100">
          <ChartPie className="h-8 w-8 text-love-600 mb-3" />
          <h3 className="font-headings text-lg font-semibold mb-2">Attachment Style</h3>
          <p className="text-gray-600 mb-2">Your dominant style:</p>
          <p className="text-xl font-medium text-love-700">{dominantAttachment.name}</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md border border-love-100">
          <Heart className="h-8 w-8 text-love-600 mb-3" />
          <h3 className="font-headings text-lg font-semibold mb-2">Love Language</h3>
          <p className="text-gray-600 mb-2">Your primary language:</p>
          <p className="text-xl font-medium text-love-700">{dominantLoveLanguage.name}</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md border border-love-100">
          <MessageSquare className="h-8 w-8 text-love-600 mb-3" />
          <h3 className="font-headings text-lg font-semibold mb-2">Conflict Style</h3>
          <p className="text-gray-600 mb-2">Your approach to conflict:</p>
          <p className="text-xl font-medium text-love-700">{dominantConflict.name}</p>
        </div>
      </div>

      {/* Detailed Results */}
      <div className="bg-white p-8 rounded-xl shadow-lg border border-love-100 mb-10">
        <h2 className="font-headings text-2xl font-semibold mb-6 text-harmony-700">Detailed Insights</h2>

        <div className="mb-8">
          <h3 className="font-medium text-xl mb-4 flex items-center">
            <Users className="mr-2 text-love-600" /> Relationship Strengths
          </h3>
          <ul className="space-y-2">
            {results.strengths.map((strength, index) => (
              <li key={index} className="flex items-start">
                <span className="text-love-600 mr-2">•</span>
                <span>{strength}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="font-medium text-xl mb-4 flex items-center">
            <ChartPie className="mr-2 text-harmony-600" /> Growth Opportunities
          </h3>
          <ul className="space-y-2">
            {results.growthAreas.map((area, index) => (
              <li key={index} className="flex items-start">
                <span className="text-harmony-600 mr-2">•</span>
                <span>{area}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-medium text-xl mb-4 flex items-center">
            <MessageSquare className="mr-2 text-harmony-600" /> Recommendations
          </h3>
          <ul className="space-y-3">
            {results.recommendations.map((recommendation, index) => (
              <li key={index} className="bg-harmony-50 p-4 rounded-lg border border-harmony-100">
                <p>{recommendation}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="text-center">
        <Button onClick={resetAssessment} className="btn-secondary">
          Take Assessment Again
        </Button>
        
        <p className="text-sm text-gray-500 mt-6">
          Remember that this assessment is just one tool to understand your relationship dynamics. 
          Every relationship is unique, and ongoing communication with {partnerName} is key to growth and connection.
        </p>
      </div>
    </div>
  );
};

export default AssessmentResults;
