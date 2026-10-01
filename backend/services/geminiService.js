import dotenv from "dotenv";
dotenv.config();

import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  throw new Error("GEMINI_API_KEY is missing in backend .env");
}

const ai = new GoogleGenAI({ apiKey });

const model = "gemini-3.5-flash-lite";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function generateWithRetry(request, maxRetries = 2) {
  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      return await ai.models.generateContent(request);
    } catch (error) {
      const status = error.status;
      const isTemporaryError = [429, 500, 502, 503, 504].includes(status);

      if (!isTemporaryError || attempt === maxRetries) {
        throw error;
      }

      const delay = 1000 * 2 ** attempt;

      console.log(
        `Gemini temporary error (${status}). Retrying in ${delay}ms...`,
      );

      await sleep(delay);
    }
  }
}

const prompt = `
You are an ATS resume reviewer for students and software engineering candidates.

Analyze the supplied resume and return a concise, actionable ATS review.

SCORING (integer scores only):
- Summary: 0-10
- Skills: 0-20
- Experience: 0-30
- Projects: 0-25
- Education: 0-15
- ATS score = sum of all section scores (0-100).
- Missing sections receive 0.
- Do not invent experience, technologies, metrics, or achievements.

VERDICT:
90-100 Excellent
75-89 Strong
60-74 Good
40-59 Needs Improvement
0-39 Poor

OUTPUT REQUIREMENTS:
- Maximum 3 concise strengths.
- Exactly 3 prioritized fixes.
- Maximum 10 relevant missing keywords.
- Summary improvedVersion: 40-70 words.
- Improve existing project bullets without changing technologies or inventing facts.
- If projects are missing, return exactly 2 suitable sample bullets, clearly marked as examples.
- If experience is missing, mention it.
- If education is missing, explain what to add.
- Return exactly 3 concise final tips.
- Feedback should be concise and specific.
- Return only valid JSON matching this structure:

{
  "atsScore": 0,
  "overallVerdict": "",
  "strengths": [],
  "priorityFixes": [],
  "sectionAnalysis": {
    "summary": {
      "score": 0,
      "feedback": "",
      "improvedVersion": ""
    },
    "skills": {
      "score": 0,
      "feedback": ""
    },
    "projects": {
      "score": 0,
      "feedback": "",
      "improvedBullets": []
    },
    "experience": {
      "score": 0,
      "feedback": ""
    },
    "education": {
      "score": 0,
      "feedback": ""
    }
  },
  "missingKeywords": [],
  "finalTips": []
}

Ensure:
- Every section score is an integer within its defined range.
- atsScore exactly equals the sum of section scores.
- overallVerdict matches the defined score range.
- Return valid JSON without markdown fences.
`;

export const analyzeResumeAI = async (resumeData) => {
  const startTime = Date.now();

  try {
    const resumeText =
      typeof resumeData === "string"
        ? resumeData
        : resumeData?.rawResumeText || JSON.stringify(resumeData);

    if (!resumeText || !resumeText.trim()) {
      throw new Error("Resume content is empty");
    }

    const response = await generateWithRetry({
      model,
      contents: `${prompt}\n\nResume:\n${resumeText}`,
      config: {
        responseMimeType: "application/json",
        temperature: 0.2,
        maxOutputTokens: 2048,
      },
    });

    const rawResponse = response.text;

    if (!rawResponse) {
      throw new Error("Gemini returned an empty response");
    }

    const cleanedResponse = rawResponse
      .replace(/^```json\s*/i, "")
      .replace(/^```\s*/, "")
      .replace(/\s*```$/, "")
      .trim();

    const analysis = JSON.parse(cleanedResponse);

    console.log(`Gemini analysis completed in ${Date.now() - startTime}ms`);

    return analysis;
  } catch (error) {
    console.error(
      `Gemini analysis failed after ${Date.now() - startTime}ms:`,
      error.message,
    );

    throw error;
  }
};
