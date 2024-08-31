import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: `https://itunes.apple.com/search?term=queen`,
    headers: {'Content-Type': 'application/json'},
});

export default axiosInstance;