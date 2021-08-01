import api from "./index";

const blogsApi = {
  getBlogs: (params) => {
    const url = "/blogs";
    return api.get(url, params);
  },
  getBlog: (blog_id) => {
    const url = `/blogs/${blog_id}`;
    return api.get(url);
  },
  createBlog: (dataSubmit) => {
    const url = "/blogs";
    return api.post(url, dataSubmit);
  },
  updateBlog: (blog_id, dataSubmit) => {
    const url = `/blogs/${blog_id}`;
    return api.put(url, dataSubmit);
  },
  removeBlog: (blog_id) => {
    const url = `/blogs/${blog_id}`;
    return api.delete(url);
  },
};

export default blogsApi;
