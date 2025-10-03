import axiosClient from "../api/axiosClient";

const postsApi = {
  getAll(params = { _limit: 10, _page: 1 }) {
    return axiosClient.get("/posts", { params }); // GET /posts?_limit=10&_page=1
  },
  getById(id) {
    return axiosClient.get(`/posts/${id}`);
  },
  create(payload) {
    // JSONPlaceholder sẽ trả về object giả lập (không thực ghi DB)
    return axiosClient.post("/posts", payload);
  },
};

export default postsApi;
