import Resume from "../models/Resume.js";
import { analyzeResumeAI } from "../services/geminiService.js";

export const analyzeResume = async (req, res) => {
  try {
    const { resumeId } = req.params;

    const resume = await Resume.findById(resumeId);

    if (!resume) {
      return res.status(404).json({
        success: false,
        message: "Resume not found.",
      });
    }

    const analysis = await analyzeResumeAI(resume.data);

    return res.status(200).json({
      success: true,
      analysis,
    });
  } catch (error) {
    console.error("Ai Controller Error:", error);

    return res.status(500).json({
      success: false,
      message: "AI analysis failed.",
      error: error.message,
    });
  }
};
