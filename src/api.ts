import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Create an axios instance with the base URL
const api = axios.create({
  baseURL: "http://127.0.0.1:8000/", // Update with your backend URL
  headers: {
    "Content-Type": "application/json",
  },
});

// Registration API
export const registerUser = (formData: {
  username: string;
  email: string;
  password: string;
}) => {
  return api.post("/users/register/", formData);
};

export const loginUser = (formData: { email_id: string; password: string }) => {
  return api.post("/users/login/", formData);
};

export const fetchUsers = async () => {
  try {
    // Retrieve the token from AsyncStorage
    const token = await AsyncStorage.getItem("accessToken");
    console.log(token);

    if (!token) {
      throw new Error("No access token found.");
    }

    // Make the API request with the token
    return api.get("users/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

export const postBlog = async (blogData: {
  title: string;
  content: string;
}) => {
  try {
    const token = await AsyncStorage.getItem("accessToken");
    if (!token) throw new Error("No access token found.");

    return api.post("/blog/post/", blogData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.error("Error posting blog:", error);
    throw error;
  }
};

export default api;
