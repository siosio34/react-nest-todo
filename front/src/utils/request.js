import axios from 'axios';
 const axiosInstance = axios.create();
 
axiosInstance.defaults.baseURL = '';

axiosInstance.interceptors.request.use(function (config) {
    // TODO Header 에 인증 키값 넣어주는 작업 진행
})

axiosInstance.interceptors.response.use(function ()) {
    // TODO Response data 파싱
    // TODO Error 객체 생성
})
 export default axiosInstance;