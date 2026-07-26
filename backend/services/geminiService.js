import { GoogleGenAI } from "@google/genai";

export const analyzeResumeAI = async (resumeData) => {
  const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
  });

  const prompt = `
You are an expert ATS Resume Reviewer and Career Coach specializing in helping students improve their resumes for internships and placements.

GOAL:
Your goal is to analyze the student's resume and provide actionable suggestions that help them build a stronger ATS-friendly and recruiter-friendly resume.

INPUT:
The resume will be provided in JSON format.

TASKS:
1. Analyze the overall quality of the resume.
2. Evaluate the Summary section.
3. Evaluate the Skills section.
4. Evaluate the Projects section.
5. Evaluate the Experience section.
6. Evaluate the Education section.
7. Identify the strengths of the resume.
8. Identify weaknesses and missing information.
9. Suggest improvements.
10. Rewrite weak or missing content wherever applicable.
11. Identify missing ATS keywords.
12. Prioritize the most important improvements.

OUTPUT FORMAT:
Return ONLY valid JSON in the following structure.

{
  "atsScore": integer,
  "overallVerdict": string,
  "strengths": [string],
  "priorityFixes": [string],
  "sectionAnalysis": {
    "summary": {
      "score": number,
      "feedback": string,
      "improvedVersion": string
    },
    "skills": {
      "score": number,
      "feedback": string
    },
    "projects": {
      "score": number,
      "feedback": string,
      "improvedBullets": [string]
    },
    "experience": {
      "score": number,
      "feedback": string
    },
    "education": {
      "score": number,
      "feedback": string
    }
  },
  "missingKeywords": [string],
  "finalTips": [string]
}

RULES:
- ATS score must be an integer between 1 and 100.
- 100 means an excellent ATS-friendly resume.
- 1 means a very poor resume.
- Never return a value less than 1 or greater than 100.
- Return ONLY valid JSON.
- Do NOT use markdown.
- Do NOT wrap the response inside \`\`\`json.
- Do NOT add explanations outside the JSON.
- Do NOT invent projects, experience, or skills that are not present.
- Keep suggestions concise, practical, and student-friendly.
- If any section is missing, clearly mention it and provide an improved version whenever possible.
- Base your analysis only on the provided resume.

Resume JSON:
${JSON.stringify(resumeData, null, 2)}
`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-flash-latest",
      contents: prompt,
    });

    const rawResponse = response.text;

    const cleanedResponse = rawResponse
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    return JSON.parse(cleanedResponse);
  } catch (error) {
    console.error("Gemini AI Error:", error);
    throw new Error("Failed to analyze resume using AI.");
  }
};
