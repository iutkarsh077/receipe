import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL
})

api.interceptors.request.use((config)=>{
    console.log(config);
    return config;
}, (error)=>{
    console.log(error)
});


api.interceptors.response.use((response)=>{
    console.log(response);
    return response
}, (error)=>{
    console.log(error)
})

export default api