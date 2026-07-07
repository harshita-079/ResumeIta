import axios from "axios";

const api = axios.create({
  baseURL: "https://resumeita-backend.onrender.com/api",
});

export default api;
