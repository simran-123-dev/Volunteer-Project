const { generateVolunteerReply } = require('../services/geminiService');

exports.chatWithAI = async (req, res, next) => {
  try {
    const message = String(req.body?.message || '').trim();

    if (!message) {
      return res.status(400).json({
        success: false,
        message: 'Message is required',
      });
    }

    const reply = await generateVolunteerReply(message);

    res.json({
      success: true,
      reply,
    });
  } catch (error) {
    next(error);
  }
};
