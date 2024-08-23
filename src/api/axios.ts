import axios from 'axios';
import { API_URL } from './constants';

export const axiosConfig = axios.create({
  baseURL: API_URL, //replace with your BaseURL
  headers: {
    'Content-Type': 'application/json', // change according header type accordingly
  },
});


// Set up interceptor to handle session and token usages
axiosConfig.interceptors.request.use(
    (config) => {
      const accessToken = localStorage.getItem('access'); // get stored access token
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`; // set in header
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
);

// Handle logic of refreshing token 
axiosConfig.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      const originalRequest = error.config;
      if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        const refresh = localStorage.getItem('refresh');
        if (refresh) {
          try {
            const response = await axios.post(`${API_URL}/token/refresh/`, {refresh});
            // don't use axious instance that already configured for refresh token api call
            const newAccessToken = response.data.access;
            localStorage.setItem('access', newAccessToken);  //set new access token
            originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
            return axios(originalRequest); //recall Api with new token
          } catch (error) {
            // Handle token refresh failure
            // mostly logout the user and re-authenticate by login again
          }
        }
      }
      return Promise.reject(error);
    }
  );