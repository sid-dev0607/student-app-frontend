import axios from "axios"
import { BASE_URL } from "../constant/const"

export const loginService = (loginData) =>{
    console.log("Login service");
    return axios.post(BASE_URL + "login",loginData);
}
