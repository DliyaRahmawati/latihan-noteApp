import axios from "axios"
import { http } from "./http"

export const Logins = async (email,password) => {
    const data = {
        email:email,
        password:password
    }
    const api = await axios.post((http + "auth/login"),data)
    .then ((response) => {
        return response
    })
    .catch((eror) => {
        return eror.response
    })
    return api
}

export const setTokens = (token) => {
    localStorage.setItem('token',token);
}

export const getToken = () => {
    return localStorage.getItem('token') ?? null;
}

export const addNote = async (title,content,writer) => {
    const token = getToken();
    const apiAdd = await axios.post((http+ "notes"),{
        title:title,
        content:content,
        writer:writer
    },{
    headers:{
        Authorization:"Bearear"
        }
    })
}