import axios from "axios";

// Create axios instance
const makeApiCall = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Generic GET request
export const getRequest = async (url) => {
  try {
    const response = await makeApiCall.get(url);
    return response.data;
  } catch (error) {
    console.error("API GET Error:", error);
    throw error;
  }
};

// Generic POST request
export const postRequest = async (url, payload) => {
  try {
    const response = await makeApiCall.post(url, payload);
    return response.data;
  } catch (error) {
    console.error("API POST Error:", error);
    throw error;
  }
};

// You can add PUT, DELETE similarly
export default makeApiCall;
