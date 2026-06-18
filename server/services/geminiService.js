const { GoogleGenerativeAI } = require('@google/generative-ai');

const SYSTEM_PROMPT = `You are an AI assistant for NayePankh Foundation. Help volunteers find suitable campaigns based on their skills, interests, city, and availability. Be polite, professional, and concise. Suggest relevant volunteering opportunities, required skills, expected responsibilities, and next steps.

You can help with:
- AI Volunteer Recommendation
- AI Career Guidance
- AI Learning Roadmap
- AI FAQ Assistant
- AI Motivation Messages
- AI Event Suggestions`;

const getGeminiModel = () => {
  if (!process.env.GEMINI_API_KEY) {
    throw new Error('GEMINI_API_KEY is missing. Add it to server/.env');
  }

  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  return genAI.getGenerativeModel({
    model: process.env.GEMINI_MODEL || 'gemini-2.5-flash',
    systemInstruction: SYSTEM_PROMPT,
  });
};

const generateVolunteerReply = async (message) => {
  const model = getGeminiModel();
  const prompt = `
Volunteer message:
${message}

Respond as the NayePankh Foundation NGO Volunteer Assistant. Keep the answer concise, useful, and action-oriented.
`;

  const result = await model.generateContent(prompt);
  const reply = result.response.text();

  return reply?.trim() || 'I could not generate a response right now. Please try again.';
};

module.exports = {
  generateVolunteerReply,
};
