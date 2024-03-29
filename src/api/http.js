import axios from 'axios';

const http = axios.create({
  baseURL: process.env.VUE_APP_API_BASEURL,
  timeout: 5000,
});

export default http;
