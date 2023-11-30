import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.DB_SERVER_URL,
  headers: {
    'apikey': process.env.CNET_API_KEY,
  }
});

export default instance;