import { testGemini } from "../services/geminiService.js";

export const testAI = async (req, res) => {
  try {
    const result = await testGemini();

    res.status(200).json({
      success: true,
      message: result,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Gemini connection failed",
    });
  }
};
