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
