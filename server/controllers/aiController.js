const { generateVolunteerReply } = require("../services/geminiService");

exports.chatWithAI = async (req, res) => {
  try {
    const message = String(req.body?.message || "").trim();

    if (!message) {
      return res.status(400).json({
        success: false,
        message: "Message is required",
      });
    }

    const reply = await generateVolunteerReply(message);

    return res.json({
      success: true,
      reply,
    });

  } catch (err) {
    console.error("========== AI CONTROLLER ERROR ==========");
    console.error(err);

    return res.status(500).json({
      success: false,
      message: err.message,
      stack: err.stack,
    });
  }
};