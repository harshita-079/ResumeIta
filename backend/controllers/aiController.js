import { createRequire } from "module";
import Resume from "../models/Resume.js";
import { analyzeResumeAI } from "../services/geminiService.js";

const require = createRequire(import.meta.url);
const pdfParse = require("pdf-parse");

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

export const analyzePdfResume = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No PDF file uploaded.",
      });
    }
    console.log("Received PDF file:", req.file.originalname); // Log the received file for debugging

    const pdfData = await pdfParse(req.file.buffer);
    console.log("PDF TEXT LENGTH:", pdfData.text.length); // Log the length of the extracted text for debugging
    console.log("PDF Text Extracted:", pdfData.text); // Log the extracted text for debugging

    const analysis = await analyzeResumeAI(pdfData.text);
    console.log("AI Analysis Result:", analysis); // Log the analysis result for debugging

    return res.status(200).json({
      success: true,
      analysis,
    });
  } catch (error) {
    console.error("PDF AI Controller Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to analyze PDF resume.",
      error: error.message,
    });
  }
};
