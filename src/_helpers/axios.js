import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/weather?units=metric&appid=2ec7f7b5fab44885766bbe4fc05fde4f',
  headers: { 'Content-Type': 'application/json;charset=utf-8' },
});

instance.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response) {
      throw new axios.Cancel('444');
    }

    return Promise.reject(error);
  },
);

export default instance;
