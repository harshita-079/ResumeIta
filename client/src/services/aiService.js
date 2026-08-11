import api from "../api/axios";

export const analyzeResumeAI = async (resumeId) => {
  const token = localStorage.getItem("token");

  const response = await api.post(
    `/ai/analyze/${resumeId}`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  return response.data;
};

export const analyzePdfResumeAI = async (file) => {
  console.log("analyzePdfResumeAI called with file:", file); // Log the file for debugging
  const token = localStorage.getItem("token");

  const formData = new FormData();
  formData.append("resume", file);

  const response = await api.post("/ai/analyze-pdf", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
