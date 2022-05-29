import axios from 'axios';

const api = axios.create({
  baseURL: 'https://picsum.photos/v2/list',
});

export default api;