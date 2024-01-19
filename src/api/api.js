import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL;

const axiosInstance = axios.create({
    baseURL: API_BASE_URL,
    // Add any other default config options here, such as headers or interceptors
});

export default axiosInstance;
