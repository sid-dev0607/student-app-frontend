import axios from "axios"
import { BASE_URL } from "../constant/const"

export const registerService = (registerData) =>{
    return axios.post(BASE_URL + "register",registerData)
}