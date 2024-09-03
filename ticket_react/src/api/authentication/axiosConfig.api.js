import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://127.0.0.1:8000',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
        accept: 'application/json',
    },
});

axiosInstance.interceptors.response.use(
    response => response,
    async error => {
        const originalRequest = error.config;

        if (error.response.status === 401 && originalRequest.url === '/auth/jwt/refresh/') {
            window.location.href = '/login';
            return Promise.reject(error);
        }

        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            try {
                const refreshToken = localStorage.getItem('refresh_token');
                const response = await axiosInstance.post('/auth/jwt/refresh/', {
                    refresh: refreshToken
                });
                localStorage.setItem('access_token', response.data.access);
                axiosInstance.defaults.headers['Authorization'] = `JWT ${localStorage.getItem('access_token')}`;
                return axiosInstance(originalRequest);
            } catch {
                window.location.href = '/login';
            }
        }

        return Promise.reject(error);
    }
);

export default axiosInstance;