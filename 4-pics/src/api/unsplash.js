import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 4769d13d9493c5d5d6855b7a3357ecde7026f685a1ea93f83bb9d1791720471a'
  }
});