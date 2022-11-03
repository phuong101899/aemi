import axios from "axios";

export const httpClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_ENDPOINT,
    timeout: 30 * 1000,
    headers: {},
});