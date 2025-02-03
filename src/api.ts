import axios from "axios";

// Create an axios instance with the base URL
const api = axios.create({
  baseURL: "http://127.0.0.1:8000/", // Update with your backend URL
  headers: {
    "Content-Type": "application/json",
  },
});

// Registration API
export const registerUser = (formData: { username: string; email: string; password: string }) => {
  return api.post("register/", formData);
};

export default api;
