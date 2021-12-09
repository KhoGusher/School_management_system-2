import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:80'
});

instance.interceptors.request.use(
    async (config) => {
       const temp = localStorage.getItem('data');
        if(temp){
            let temp1 = JSON.parse(temp);
            config.headers.Authorization = `Bearer ${temp1.token}`;
        }
        return config;
    },
    (err) => {
        return Promise.reject(err);
    }
)

export default instance;