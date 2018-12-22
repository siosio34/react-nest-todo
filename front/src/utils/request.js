import axios from 'axios';
 
const axiosInstance = axios.create();
 
axiosInstance.defaults.baseURL = 'http://54.255.248.64:3000';

axiosInstance.interceptors.request.use(function (config) {
    return config;
    }, function (error) {
    return Promise.reject(error);
});


axiosInstance.interceptors.response.use(function (response) {
    return response.data;
}, function(error) {
    return Promise.reject(error);
})

export default axiosInstance;