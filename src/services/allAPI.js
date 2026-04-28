import apiService from "../api/apiService";

export const registerAPI = async (userData) => {
  return await apiService("POST", "/register", userData);
};

export const loginAPI = async (userData) => {
  return await apiService("POST", "/login", userData);
};

export const googleLoginAPI = async (userData) => {
  return await apiService("POST", "/google-login", userData);
};