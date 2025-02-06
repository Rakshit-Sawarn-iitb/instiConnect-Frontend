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
export const registerUser = async (formData: any) => {
  return await axios.post("http://users/register", formData);
};

// Login API function
export const loginUser = async (email: string, password: string) => {
  try {
    const response = await api.post("/users/login/", { email_id: email, password });

    if (response.data.status === 200) {
      const { access, refresh } = response.data;

      // Store tokens securely
      await AsyncStorage.setItem("accessToken", access);
      await AsyncStorage.setItem("refreshToken", refresh);
      console.log(access)

      return response.data;
    } else {
      throw new Error(response.data.message);
    }
  } catch (error) {
    console.error("Login Error:", error);
    throw error;
  }
};

// Logout function to clear tokens
export const logoutUser = async () => {
  await AsyncStorage.removeItem("accessToken");
  await AsyncStorage.removeItem("refreshToken");
};



export default api;
