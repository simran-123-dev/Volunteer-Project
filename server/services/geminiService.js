const { GoogleGenerativeAI } = require("@google/generative-ai");

const SYSTEM_PROMPT = `
You are an AI assistant for NayePankh Foundation.

Help volunteers find suitable campaigns based on their:
- skills
- interests
- city
- availability

Be polite, professional and concise.

You can also help with:
- AI Volunteer Recommendation
- AI Career Guidance
- AI Learning Roadmap
- AI FAQ Assistant
- AI Motivation Messages
- AI Event Suggestions
`;

const getGeminiModel = () => {
  if (!process.env.GEMINI_API_KEY) {
    throw new Error("GEMINI_API_KEY is missing.");
  }

  console.log("Using Model:", process.env.GEMINI_MODEL || "gemini-2.5-flash");

  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

  return genAI.getGenerativeModel({
    model: process.env.GEMINI_MODEL || "gemini-2.5-flash",
    systemInstruction: SYSTEM_PROMPT,
  });
};

const generateVolunteerReply = async (message) => {
  try {
    const model = getGeminiModel();

    const prompt = `
Volunteer Message:
${message}

Reply as NayePankh Foundation AI Assistant.
Keep the answer short and helpful.
`;

    const result = await model.generateContent(prompt);

    console.log("Gemini Response Received");

    const reply = result.response.text();

    return reply || "No response generated.";

  } catch (err) {
    console.error("========== GEMINI ERROR ==========");
    console.error(err);

    throw err;
  }
};

module.exports = {
  generateVolunteerReply,
};