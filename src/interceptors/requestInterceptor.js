import axios from "axios"
import { useNavigate } from "react-router-dom";

const requestInterceptor = axios.interceptors.request.use(config => {
    if (window.location.href !== "http://localhost:3000/login") {
        console.log("URllllllllllllll  >> ",window.location.href);
         const token = localStorage.getItem("token");
    console.log(token);
    if (token != null) {
        config.headers.Authorization = 'Bearer ' + token;
        return config;
    } else {
        console.log("Inside else");
        return config;
    }
    }else{
        return config;
    }
})

export default requestInterceptor;