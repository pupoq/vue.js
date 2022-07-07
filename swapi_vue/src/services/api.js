import { API_URL } from "@/config";
import axios from "axios";

const API = axios.create({
    baseURL: API_URL,
    timeout: 30000
});

const responseInterceptors = {
    after: async function (response) {
        console.log('API: ', response)
        return response;
    },
    error: async function (error) {
        console.log('API ERROR: ', error.response);
        console.log({ error })
        Promise.reject(error)
    }
}

API.interceptors.response.use(
    responseInterceptors.after, responseInterceptors.error)


export default API;