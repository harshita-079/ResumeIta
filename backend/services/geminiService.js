import { GoogleGenAI } from "@google/genai";

export const testGemini = async () => {
  const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
  });
  const response = await ai.models.generateContent({
    model: "gemini-flash-latest",
    contents: "Say Hello to ResumeIta in one sentence.",
  });
  return response.text;
};
