import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "https://insightflow-backend-6rzs.onrender.com/api"
});

export default API;