import axios from "axios"
import {BASE_URL} from "../constant/const"

export const applicationList = (token) =>{
    return axios.get(BASE_URL + "application/list",{headers:{
        "Authorization" : "Bearer " + token,
    }});
}
export const createApplication = (application,token) =>{
    return axios.post(BASE_URL + "application/create",application,{headers:{
        Authorization : "Bearer " + token
    }});
}