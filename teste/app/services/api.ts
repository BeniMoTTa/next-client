import Axios from "axios";


export const api = Axios.create({
    baseURL: "http://127.0.0.1:8000",
});

export const apiUazapi = Axios.create({
    baseURL: "http://server01.uazapi.dev",
})
