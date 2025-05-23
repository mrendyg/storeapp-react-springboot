import axios from "axios";

//Varaible de DB
const baseURL = "http://127.0.0.1:8080/api/";

export const axi = axios.create({
    baseURL,
})

