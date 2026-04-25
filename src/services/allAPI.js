import apiService from "../api/apiService";

// register api : Called by auth component when register btn clicked 

export const registerAPI = async (userData)=>{
    return await apiService("POST","/register",userData)
}

// login api : Called by auth component when login btn clicked 

export const loginAPI = async (userData)=>{
    return await apiService("POST","/login",userData)
}

