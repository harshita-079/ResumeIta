import * as pdfParse from "pdf-parse";
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

export const analyzePdfResume = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No PDF file uploaded.",
      });
    }

    const parser = new pdfParse.PDFParse({
      data: req.file.buffer,
    });
    const pdfData = await parser.getText();

    const analysis = await analyzeResumeAI({
      rawResumeText: pdfData.text,
    });

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

// export const analyzePdfResume = async (req, res) => {
//   try {
//     if (!req.file) {
//       return res.status(400).json({
//         success: false,
//         message: "PDF file is required.",
//       });
//     }

//     const loadingTask = pdfjsLib.getDocument({
//       data: new Uint8Array(req.file.buffer),
//     });

//     const pdf = await loadingTask.promise;

//     let text = "";

//     for (let i = 1; i <= pdf.numPages; i++) {
//       const page = await pdf.getPage(i);
//       const content = await page.getTextContent();

//       const pageText = content.items.map((item) => item.str).join(" ");

//       text += pageText + "\n";
//     }

//     console.log("Extracted text length:", text.length);

//     const analysis = await analyzeResumeAI({
//       rawResumeText: text,
//     });

//     return res.status(200).json({
//       success: true,
//       analysis,
//     });
//   } catch (error) {
//     console.error("PDF AI Controller Error:", error);

//     return res.status(500).json({
//       success: false,
//       message: "Failed to analyze PDF resume.",
//       error: error.message,
//     });
//   }
// };
