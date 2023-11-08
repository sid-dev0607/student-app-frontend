import axios from 'axios';

const axiosResponseInterceptor = axios.interceptors.response.use(config=>{
        return config;
    // },error=>{
    //     if (error.response.status === 401 || error.response.status === 403) {
    //         console.log("Unauthorized or Access Denied For This Role");
    //         localStorage.clear();
    //         window.location.href='/login';
    //     }
    //     return Promise.reject(error);
    // }
}
);

export default axiosResponseInterceptor;