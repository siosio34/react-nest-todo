import axios from 'axios';

const axiosInstance = axios.create();

// axiosInstance.defaults.baseURL = '';


axiosInstance.interceptors.request.use(function (config) {
    // d
})

axiosInstance.interceptors.response.use(function (response: AxiosResponse)) {
    
})

export default axiosInstance;
