
import { Answer, AssessmentResults } from '../types';
import { questions } from '../data/questionData';

export const calculateResults = (answers: Answer[]): AssessmentResults => {
  // Initialize results structure
  const results: AssessmentResults = {
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

  // Count responses by category and value
  answers.forEach(answer => {
    const question = questions.find(q => q.id === answer.questionId);
    if (!question) return;

    const option = question.options.find(opt => opt.id === answer.selectedOption);
    if (!option) return;

    // Process attachment questions
    if (question.category === 'attachment') {
      if (option.value === 'secure') results.attachment.secure++;
      else if (option.value === 'anxious') results.attachment.anxious++;
      else if (option.value === 'avoidant') results.attachment.avoidant++;
      else if (option.value === 'disorganized') results.attachment.disorganized++;
    }
    
    // Process love language questions
    else if (question.category === 'love-language') {
      if (option.value === 'wordsOfAffirmation') results.loveLanguage.wordsOfAffirmation++;
      else if (option.value === 'actsOfService') results.loveLanguage.actsOfService++;
      else if (option.value === 'receivingGifts') results.loveLanguage.receivingGifts++;
      else if (option.value === 'qualityTime') results.loveLanguage.qualityTime++;
      else if (option.value === 'physicalTouch') results.loveLanguage.physicalTouch++;
    }
    
    // Process conflict resolution questions
    else if (question.category === 'conflict') {
      if (option.value === 'collaborative') results.conflict.collaborative++;
      else if (option.value === 'compromising') results.conflict.compromising++;
      else if (option.value === 'accommodating') results.conflict.accommodating++;
      else if (option.value === 'avoiding') results.conflict.avoiding++;
      else if (option.value === 'competing') results.conflict.competing++;
    }
  });

  // Determine strengths and areas for growth
  results.strengths = determineStrengths(results);
  results.growthAreas = determineGrowthAreas(results);
  results.recommendations = generateRecommendations(results);

  // Calculate vision alignment (simplified approach for now)
  const visionQuestions = questions.filter(q => q.category === 'vision');
  const visionAnswersCount = answers.filter(a => {
    const question = questions.find(q => q.id === a.questionId);
    return question?.category === 'vision';
  }).length;

  results.vision.alignment = Math.round((visionAnswersCount / visionQuestions.length) * 100);

  return results;
};

const determineStrengths = (results: AssessmentResults): string[] => {
  const strengths: string[] = [];

  // Check attachment style
  if (results.attachment.secure >= 3) {
    strengths.push('Secure attachment tendencies that foster trust and stability');
  }

  // Check love language awareness
  const topLoveLanguage = getTopCategory(results.loveLanguage);
  if (topLoveLanguage) {
    const readableName = formatLoveLanguage(topLoveLanguage);
    strengths.push(`Strong preference for ${readableName} as your love language`);
  }

  // Check conflict resolution
  if (results.conflict.collaborative >= 2) {
    strengths.push('Collaborative approach to resolving conflicts');
  }
  if (results.conflict.compromising >= 2) {
    strengths.push('Willingness to compromise in conflicts');
  }

  // Add vision alignment if high
  if (results.vision.alignment >= 70) {
    strengths.push('Strong shared vision for the future');
  }

  return strengths.length > 0 ? strengths : ['Complete more questions to identify your relationship strengths'];
};

const determineGrowthAreas = (results: AssessmentResults): string[] => {
  const growthAreas: string[] = [];

  // Check for potential attachment issues
  if (results.attachment.anxious >= 3) {
    growthAreas.push('Managing anxious attachment tendencies');
  }
  if (results.attachment.avoidant >= 3) {
    growthAreas.push('Working with avoidant attachment patterns');
  }
  if (results.attachment.disorganized >= 2) {
    growthAreas.push('Finding consistency in relationship patterns');
  }

  // Check conflict resolution areas
  if (results.conflict.avoiding >= 3) {
    growthAreas.push('Addressing conflict avoidance patterns');
  }
  if (results.conflict.competing >= 3) {
    growthAreas.push('Balancing assertiveness with compromise');
  }

  // Add vision alignment if low
  if (results.vision.alignment < 50) {
    growthAreas.push('Aligning long-term goals and expectations');
  }

  return growthAreas.length > 0 ? growthAreas : ['Complete more questions to identify your growth areas'];
};

const generateRecommendations = (results: AssessmentResults): string[] => {
  const recommendations: string[] = [];

  // Attachment-based recommendations
  if (results.attachment.anxious >= 3) {
    recommendations.push('Practice self-soothing techniques when feeling relationship anxiety');
    recommendations.push('Communicate needs clearly rather than expecting partner to anticipate them');
  }
  
  if (results.attachment.avoidant >= 3) {
    recommendations.push('Try to share feelings more regularly, even in small steps');
    recommendations.push('Practice staying present during difficult conversations');
  }

  // Love language recommendations
  const topLoveLanguage = getTopCategory(results.loveLanguage);
  if (topLoveLanguage) {
    recommendations.push(`Share your preference for ${formatLoveLanguage(topLoveLanguage)} with your partner`);
  }

  // Conflict resolution recommendations
  if (results.conflict.avoiding >= 3) {
    recommendations.push('Set aside regular time to discuss concerns before they become bigger issues');
  }
  
  if (results.conflict.competing >= 3) {
    recommendations.push('Practice active listening without forming rebuttals while your partner speaks');
  }

  // Add general recommendations
  recommendations.push('Schedule regular check-ins about relationship satisfaction and needs');
  recommendations.push('Consider reading "The Seven Principles for Making Marriage Work" by John Gottman');

  return recommendations;
};

const getTopCategory = (categories: Record<string, number>): string | null => {
  let maxKey: string | null = null;
  let maxValue = 0;
  
  Object.entries(categories).forEach(([key, value]) => {
    if (value > maxValue) {
      maxKey = key;
      maxValue = value;
    }
  });
  
  return maxKey;
};

const formatLoveLanguage = (key: string): string => {
  switch (key) {
    case 'wordsOfAffirmation': return 'Words of Affirmation';
    case 'actsOfService': return 'Acts of Service';
    case 'receivingGifts': return 'Receiving Gifts';
    case 'qualityTime': return 'Quality Time';
    case 'physicalTouch': return 'Physical Touch';
    default: return key;
  }
};
