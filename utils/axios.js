import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.DB_SERVER_URL,
  headers: {
    'Content-Type': 'application/json',
    'Apikey': process.env.CNET_API_KEY,
  },
});

export default instance;