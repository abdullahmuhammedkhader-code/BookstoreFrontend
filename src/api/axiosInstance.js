import axios from "axios"

const axiosInstance = axios.create({
    baseURL:"http://localhost:3000",
    timeout:5000
})
axiosInstance.interceptors.request.use(
    (config)=>{
        const token = sessionStorage.getItem("token")
        if(token){
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },(error)=>{
        return Promise.reject(error)
    }
)



axiosInstance.interceptors.response.use((response)=>{
    console.log("response Recieved !!!!");
    return response
},
(error)=>{
    if(error.response){
        const status = error.response.status
        if(status==401){
            console.log("Unauthorised Access - Invalid Token !!!");
            
        }
        else if(status==404){
            console.log("API not Found!!!!!");
            
        } else if(status==500){
            console.log("server Error!!!");
            
        } else if (error.request){
            console.log("Client Error");
            return error.request
            
        } else {
            console.log("Error "+error.message);
            
        }
        return Promise.reject(error)
    }

}
)


export default axiosInstance