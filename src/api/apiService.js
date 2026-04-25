import axiosInstance from "./axiosInstance"

const apiService = async (httpMethod,url,reqbody,reqHeader)=>{
    const reqConfig = {
        method:httpMethod,
        url,
        data:reqbody,
        headers:reqHeader
    }
    try{
        const response = await axiosInstance(reqConfig)
        return response
    }catch(err){
        return err

    }
}
export default apiService