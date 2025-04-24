
import { Question } from '../types';

export const questions: Question[] = [
  // Attachment Style Questions
  {
    id: 1,
    text: "When your partner seems emotionally distant, you typically:",
    category: "attachment",
    options: [
      { id: "a", text: "Give them space, knowing they'll come around when ready", value: "avoidant" },
      { id: "b", text: "Initiate a conversation about what's happening between you", value: "secure" },
      { id: "c", text: "Feel anxious and try various ways to reconnect immediately", value: "anxious" },
      { id: "d", text: "Feel confused about how to respond and may react inconsistently", value: "disorganized" }
    ]
  },
  {
    id: 2,
    text: "In your relationship, how comfortable are you with emotional intimacy?",
    category: "attachment",
    options: [
      { id: "a", text: "Very comfortable both giving and receiving emotional support", value: "secure" },
      { id: "b", text: "More comfortable giving than receiving emotional support", value: "avoidant" },
      { id: "c", text: "Sometimes worry it's never enough, despite deep connection", value: "anxious" },
      { id: "d", text: "Find it unpredictable and sometimes overwhelming", value: "disorganized" }
    ]
  },
  {
    id: 3,
    text: "When you and your partner disagree, what's your primary concern?",
    category: "attachment",
    options: [
      { id: "a", text: "Finding a solution that addresses both our needs", value: "secure" },
      { id: "b", text: "Maintaining independence and not being controlled", value: "avoidant" },
      { id: "c", text: "Ensuring the relationship isn't damaged by the conflict", value: "anxious" },
      { id: "d", text: "Managing unpredictable emotions that arise", value: "disorganized" }
    ]
  },
  {
    id: 4,
    text: "How do you feel about depending on your partner?",
    category: "attachment",
    options: [
      { id: "a", text: "Comfortable depending on them while maintaining my independence", value: "secure" },
      { id: "b", text: "Prefer to rely on myself most of the time", value: "avoidant" },
      { id: "c", text: "Very comfortable; close relationships are my priority", value: "anxious" },
      { id: "d", text: "Conflicted; I want to depend on them but find it difficult", value: "disorganized" }
    ]
  },
  {
    id: 5,
    text: "When your relationship faces challenges, you tend to:",
    category: "attachment",
    options: [
      { id: "a", text: "Face them directly, confident we can work things out", value: "secure" },
      { id: "b", text: "Process independently before discussing together", value: "avoidant" },
      { id: "c", text: "Seek immediate reassurance and resolution", value: "anxious" },
      { id: "d", text: "Feel overwhelmed with mixed emotions about the situation", value: "disorganized" }
    ]
  },
  {
    id: 6,
    text: "Your partner is going through a difficult time. You're most likely to:",
    category: "attachment",
    options: [
      { id: "a", text: "Be supportive while respecting their way of coping", value: "secure" },
      { id: "b", text: "Give practical advice and solutions", value: "avoidant" },
      { id: "c", text: "Offer constant emotional support and check-ins", value: "anxious" },
      { id: "d", text: "Want to help but feel unsure about the best approach", value: "disorganized" }
    ]
  },
  {
    id: 7,
    text: "When it comes to personal space in your relationship, you prefer:",
    category: "attachment",
    options: [
      { id: "a", text: "A healthy balance of togetherness and independence", value: "secure" },
      { id: "b", text: "Regular alone time to recharge and maintain identity", value: "avoidant" },
      { id: "c", text: "Lots of togetherness and frequent communication", value: "anxious" },
      { id: "d", text: "Variable needs that can sometimes feel contradictory", value: "disorganized" }
    ]
  },
  // Love Languages Questions
  {
    id: 8,
    text: "Which makes you feel most loved and appreciated?",
    category: "love-language",
    options: [
      { id: "a", text: "When my partner compliments me or says 'I love you'", value: "wordsOfAffirmation" },
      { id: "b", text: "When my partner does helpful things for me", value: "actsOfService" },
      { id: "c", text: "When my partner gives me thoughtful gifts", value: "receivingGifts" },
      { id: "d", text: "When my partner gives me their undivided attention", value: "qualityTime" },
      { id: "e", text: "When my partner shows physical affection", value: "physicalTouch" }
    ]
  },
  {
    id: 9,
    text: "When you want to show love to your partner, you typically:",
    category: "love-language",
    options: [
      { id: "a", text: "Express your feelings and appreciation verbally", value: "wordsOfAffirmation" },
      { id: "b", text: "Take care of something they need done", value: "actsOfService" },
      { id: "c", text: "Find or make something special for them", value: "receivingGifts" },
      { id: "d", text: "Plan quality time together without distractions", value: "qualityTime" },
      { id: "e", text: "Offer physical affection like hugs, kisses, or touch", value: "physicalTouch" }
    ]
  },
  {
    id: 10,
    text: "What do you find yourself wishing your partner would do more often?",
    category: "love-language",
    options: [
      { id: "a", text: "Verbally affirm their feelings and appreciation for me", value: "wordsOfAffirmation" },
      { id: "b", text: "Help with tasks or responsibilities without being asked", value: "actsOfService" },
      { id: "c", text: "Give me thoughtful tokens of affection, even small ones", value: "receivingGifts" },
      { id: "d", text: "Spend focused, uninterrupted time with me", value: "qualityTime" },
      { id: "e", text: "Initiate physical contact and affection", value: "physicalTouch" }
    ]
  },
  {
    id: 11,
    text: "Which scenario would make you feel most appreciated on your birthday?",
    category: "love-language",
    options: [
      { id: "a", text: "A heartfelt card with specific reasons why I'm loved", value: "wordsOfAffirmation" },
      { id: "b", text: "My partner handling all responsibilities for the day", value: "actsOfService" },
      { id: "c", text: "A carefully chosen gift that shows they understand me", value: "receivingGifts" },
      { id: "d", text: "A special outing or experience together", value: "qualityTime" },
      { id: "e", text: "Extra physical affection and closeness throughout the day", value: "physicalTouch" }
    ]
  },
  {
    id: 12,
    text: "When you've had a difficult day, what do you most hope your partner will do?",
    category: "love-language",
    options: [
      { id: "a", text: "Listen and offer encouraging words", value: "wordsOfAffirmation" },
      { id: "b", text: "Take care of dinner or other responsibilities", value: "actsOfService" },
      { id: "c", text: "Bring me something to cheer me up", value: "receivingGifts" },
      { id: "d", text: "Spend time just being present with me", value: "qualityTime" },
      { id: "e", text: "Offer physical comfort like a hug or back rub", value: "physicalTouch" }
    ]
  },
  {
    id: 13,
    text: "If you had to choose, which trait would be most important in your partner?",
    category: "love-language",
    options: [
      { id: "a", text: "Being verbally expressive about their feelings", value: "wordsOfAffirmation" },
      { id: "b", text: "Being proactive and helpful in daily life", value: "actsOfService" },
      { id: "c", text: "Being thoughtful with gifts and surprises", value: "receivingGifts" },
      { id: "d", text: "Being fully present when we're together", value: "qualityTime" },
      { id: "e", text: "Being comfortable with physical affection", value: "physicalTouch" }
    ]
  },
  // Conflict Resolution Questions
  {
    id: 14,
    text: "During disagreements with your partner, you typically:",
    category: "conflict",
    options: [
      { id: "a", text: "Work toward a win-win solution that addresses both our concerns", value: "collaborative" },
      { id: "b", text: "Try to find a middle ground we can both accept", value: "compromising" },
      { id: "c", text: "Often prioritize their needs over your own to maintain harmony", value: "accommodating" },
      { id: "d", text: "Prefer to move on and discuss it later when emotions settle", value: "avoiding" },
      { id: "e", text: "Stand firm on issues that are important to you", value: "competing" }
    ]
  },
  {
    id: 15,
    text: "When tensions rise in a conversation, you're most likely to:",
    category: "conflict",
    options: [
      { id: "a", text: "Slow down and ask questions to understand their perspective", value: "collaborative" },
      { id: "b", text: "Look for a compromise we can both live with", value: "compromising" },
      { id: "c", text: "Back down if it seems important to them", value: "accommodating" },
      { id: "d", text: "Change the subject or take a break from the discussion", value: "avoiding" },
      { id: "e", text: "Express your position clearly and directly", value: "competing" }
    ]
  },
  {
    id: 16,
    text: "How do you typically express frustration in your relationship?",
    category: "conflict",
    options: [
      { id: "a", text: "Calmly explain my feelings using 'I' statements", value: "collaborative" },
      { id: "b", text: "Express my concerns while acknowledging their perspective", value: "compromising" },
      { id: "c", text: "Often hold back to avoid upsetting my partner", value: "accommodating" },
      { id: "d", text: "Process internally before sharing or may not bring it up", value: "avoiding" },
      { id: "e", text: "Directly address the issue and my expectations", value: "competing" }
    ]
  },
  {
    id: 17,
    text: "When making decisions as a couple, you prefer to:",
    category: "conflict",
    options: [
      { id: "a", text: "Discuss thoroughly until we find a solution we're both excited about", value: "collaborative" },
      { id: "b", text: "Find a fair middle ground that incorporates both our priorities", value: "compromising" },
      { id: "c", text: "Be flexible and support what seems most important to them", value: "accommodating" },
      { id: "d", text: "Go with the flow and not overthink the decision process", value: "avoiding" },
      { id: "e", text: "Present your case for what you think is the best approach", value: "competing" }
    ]
  },
  {
    id: 18,
    text: "When your partner brings up a sensitive issue, you typically:",
    category: "conflict",
    options: [
      { id: "a", text: "Listen openly and work together to address the concern", value: "collaborative" },
      { id: "b", text: "Look for ways we can meet in the middle on the issue", value: "compromising" },
      { id: "c", text: "Try to understand and fulfill their needs even if difficult", value: "accommodating" },
      { id: "d", text: "Need time to process before engaging fully with the topic", value: "avoiding" },
      { id: "e", text: "Defend your position if you feel misunderstood", value: "competing" }
    ]
  },
  {
    id: 19,
    text: "In ongoing disagreements, what's most important to you?",
    category: "conflict",
    options: [
      { id: "a", text: "Finding a creative solution that satisfies both our core needs", value: "collaborative" },
      { id: "b", text: "Being willing to give and take equally", value: "compromising" },
      { id: "c", text: "Preserving harmony in the relationship above all", value: "accommodating" },
      { id: "d", text: "Not dwelling on issues that may resolve themselves with time", value: "avoiding" },
      { id: "e", text: "Standing up for what you believe is right", value: "competing" }
    ]
  },
  {
    id: 20,
    text: "After a disagreement, you prefer to:",
    category: "conflict",
    options: [
      { id: "a", text: "Talk through what happened and what we learned from it", value: "collaborative" },
      { id: "b", text: "Acknowledge both perspectives and reaffirm our connection", value: "compromising" },
      { id: "c", text: "Focus on reconnecting emotionally and moving forward", value: "accommodating" },
      { id: "d", text: "Give it time and let things naturally return to normal", value: "avoiding" },
      { id: "e", text: "Clarify any remaining issues before considering it resolved", value: "competing" }
    ]
  },
  // Vision Alignment Questions
  {
    id: 21,
    text: "Regarding financial priorities, which best describes you?",
    category: "vision",
    options: [
      { id: "a", text: "Building wealth and financial security are top priorities", value: "finance-focused" },
      { id: "b", text: "Balancing enjoyment now while saving responsibly for the future", value: "balanced" },
      { id: "c", text: "Living in the moment and spending on experiences matters most", value: "experience-focused" },
      { id: "d", text: "Financial decisions should primarily support family/relationship needs", value: "relationship-focused" }
    ]
  },
  {
    id: 22,
    text: "When thinking about ideal living arrangements, you prefer:",
    category: "vision",
    options: [
      { id: "a", text: "Urban living with access to culture, dining, and entertainment", value: "urban" },
      { id: "b", text: "Suburban neighborhood with community and convenience", value: "suburban" },
      { id: "c", text: "Rural setting with space, nature, and privacy", value: "rural" },
      { id: "d", text: "Flexible location based on other life priorities", value: "flexible" }
    ]
  },
  {
    id: 23,
    text: "Your approach to career and work-life balance is best described as:",
    category: "vision",
    options: [
      { id: "a", text: "Career-focused; professional achievement is very important", value: "career-focused" },
      { id: "b", text: "Balance-seeking; both career and personal life matter equally", value: "balanced" },
      { id: "c", text: "Relationship-focused; family needs come before career", value: "relationship-focused" },
      { id: "d", text: "Flexibility-focused; priorities may shift in different life phases", value: "flexible" }
    ]
  },
  {
    id: 24,
    text: "Regarding having children, your perspective is:",
    category: "vision",
    options: [
      { id: "a", text: "Definitely want children as a central part of my life plan", value: "child-focused" },
      { id: "b", text: "Open to children but not a definite requirement", value: "flexible" },
      { id: "c", text: "Prefer not to have children and focus on other life goals", value: "child-free" },
      { id: "d", text: "Uncertain and still exploring my feelings about parenthood", value: "undecided" }
    ]
  },
  {
    id: 25,
    text: "Your ideal way to spend free time together would be:",
    category: "vision",
    options: [
      { id: "a", text: "Active adventures, sports, and exploring new places", value: "active" },
      { id: "b", text: "Social gatherings with friends and family", value: "social" },
      { id: "c", text: "Quiet, relaxing time at home together", value: "home-centered" },
      { id: "d", text: "Cultural experiences like museums, concerts, or restaurants", value: "cultural" }
    ]
  },
  {
    id: 26,
    text: "How important is religion or spiritual practice in your life?",
    category: "vision",
    options: [
      { id: "a", text: "Very important; a central part of my identity and daily life", value: "central" },
      { id: "b", text: "Somewhat important; I value traditions and community", value: "moderate" },
      { id: "c", text: "Not particularly important; I'm open but not actively practicing", value: "minimal" },
      { id: "d", text: "Not important; I prefer a secular approach to life", value: "secular" }
    ]
  },
  {
    id: 27,
    text: "When making major life decisions, you tend to:",
    category: "vision",
    options: [
      { id: "a", text: "Plan carefully with detailed timelines and goals", value: "planning" },
      { id: "b", text: "Consider options thoroughly but remain adaptable", value: "balanced" },
      { id: "c", text: "Follow intuition and opportunities as they arise", value: "spontaneous" },
      { id: "d", text: "Prioritize what feels right for the relationship above all", value: "relationship-focused" }
    ]
  },
  {
    id: 28,
    text: "Regarding traditions and holidays, you prefer to:",
    category: "vision",
    options: [
      { id: "a", text: "Honor established family traditions and customs", value: "traditional" },
      { id: "b", text: "Balance traditions while creating new ones together", value: "balanced" },
      { id: "c", text: "Create entirely new traditions unique to our relationship", value: "innovative" },
      { id: "d", text: "Keep celebrations simple and low-pressure", value: "simple" }
    ]
  },
  {
    id: 29,
    text: "Your approach to health and wellness is best described as:",
    category: "vision",
    options: [
      { id: "a", text: "Very committed to fitness, nutrition, and preventive care", value: "health-focused" },
      { id: "b", text: "Generally health-conscious with room for indulgence", value: "balanced" },
      { id: "c", text: "Casual approach focusing on enjoyment over strict rules", value: "relaxed" },
      { id: "d", text: "Interested in holistic/alternative approaches to wellbeing", value: "holistic" }
    ]
  },
  {
    id: 30,
    text: "In ten years, the most important achievement for you would be:",
    category: "vision",
    options: [
      { id: "a", text: "Career success and financial stability", value: "career-focused" },
      { id: "b", text: "A thriving, connected relationship/family life", value: "relationship-focused" },
      { id: "c", text: "Personal growth, learning, and self-actualization", value: "growth-focused" },
      { id: "d", text: "Contributing to community or causes beyond myself", value: "community-focused" }
    ]
  }
];
