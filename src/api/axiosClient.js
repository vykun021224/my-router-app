// Tạo một Axios instance dùng chung
import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

// Request interceptor (có thể gắn token sau này)
axiosClient.interceptors.request.use(
  (config) => {
    // ví dụ: const token = localStorage.getItem("token");
    // if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor (chuẩn hóa lỗi)
axiosClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // Bạn có thể log chung ở đây
    return Promise.reject(error);
  }
);

export default axiosClient;
