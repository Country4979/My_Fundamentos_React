import axios from 'axios';

window.config = JSON.stringify(process.env);

const client = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

client.interceptors.response.use(
  response => response.data,
  error => {
    if (error.response) {                           //Me devuelve como error del último al primero
      return Promise.reject({message: error.response.statusText,
        ...error.response,                          //Esto significa sobreescribir
        ...error.response.data
      })
    };
    return Promise.reject({message: error.response});
  }
);

export const setAuthorizationHeader = token =>
  (client.defaults.headers.common['Authorization'] = `Bearer ${token}`);

export const removeAuthorizationHeader = () => {
  delete client.defaults.headers.common['Authorization'];
};

export default client;