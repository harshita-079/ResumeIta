import { GoogleGenAI } from "@google/genai";

export const analyzeResumeAI = async (resumeData) => {
  const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
  });

  const prompt = `
You are an expert ATS Resume Reviewer, Technical Recruiter, and Career Coach specializing in reviewing student resumes for internships and software engineering placements.

Your objective is to analyze the given resume and provide a professional ATS-friendly review with actionable improvements.

=========================
SCORING RULES
=========================

Evaluate the following sections:

- Summary (Maximum 10 points)
- Skills (Maximum 20 points)
- Experience (Maximum 30 points)
- Projects (Maximum 25 points)
- Education (Maximum 15 points)

Rules:

- Every score must be an INTEGER.
- Never return decimal values.
- Never exceed the maximum score of any section.
- If a section is missing, assign 0.
- ATS Score = Sum of all section scores.
- ATS Score must always be between 0 and 100.

=========================
VERDICT RULES
=========================

90-100 : Excellent
75-89 : Strong
60-74 : Good
40-59 : Needs Improvement
0-39 : Poor

=========================
ANALYSIS CRITERIA
=========================

Evaluate the resume based on:

- ATS Compatibility
- Resume Completeness
- Resume Structure
- Professional Language
- Technical Skills
- Relevant Keywords
- Experience Quality
- Project Quality
- Education
- Overall Recruiter Readability

=========================
STRENGTHS
=========================

Return at most 3 strengths.

Each strength should be concise.

=========================
PRIORITY FIXES
=========================

Return ONLY the TOP 3 improvements that will most improve the ATS score.

Order them by priority.

=========================
MISSING KEYWORDS
=========================

Return ONLY missing ATS keywords.

Maximum 10 keywords.

Avoid duplicates.

=========================
SUMMARY
=========================

If Summary exists:

- Rewrite it professionally.
- Keep it between 40 and 70 words.
- Do not use generic AI phrases like:
  - Passionate individual
  - Highly motivated professional
  - Hardworking candidate

If Summary is missing:

Generate a professional ATS-friendly summary.

=========================
PROJECTS
=========================

If Projects exist:

- Improve existing project descriptions.
- Keep technologies unchanged.
- Use action verbs.
- Improve clarity and impact.

Do NOT invent:

- Technologies
- Numbers
- Achievements

If Projects are missing:

Return exactly TWO sample ATS-friendly project bullet points suitable for a student.

=========================
EXPERIENCE
=========================

If Experience exists:

Improve wording only.

Do NOT invent:

- Company names
- Job titles
- Dates
- Achievements

If Experience is missing:

Mention that professional experience is unavailable.

=========================
EDUCATION
=========================

If Education is missing:

Mention it clearly and suggest what information should be added.

=========================
FINAL TIPS
=========================

Return exactly THREE concise and actionable ATS improvement tips.

=========================
OUTPUT RULES
=========================

Return ONLY valid JSON.

Do NOT return:

- Markdown
- \`\`\`json
- Explanations
- Notes
- Introductory text
- Closing text

Return ONLY the following JSON structure:

{
  "atsScore": number,
  "overallVerdict": "string",

  "strengths": [
    "string"
  ],

  "priorityFixes": [
    "string"
  ],

  "sectionAnalysis": {

    "summary": {
      "score": number,
      "feedback": "string",
      "improvedVersion": "string"
    },

    "skills": {
      "score": number,
      "feedback": "string"
    },

    "projects": {
      "score": number,
      "feedback": "string",
      "improvedBullets": [
        "string"
      ]
    },

    "experience": {
      "score": number,
      "feedback": "string"
    },

    "education": {
      "score": number,
      "feedback": "string"
    }

  },

  "missingKeywords": [
    "string"
  ],

  "finalTips": [
    "string"
  ]
}

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
    console.error("========== GEMINI ERROR ==========");
    console.error(error);
    console.error(error.message);

    if (error.response) {
      console.error(error.response.data);
    }

    throw error;
  }
};
