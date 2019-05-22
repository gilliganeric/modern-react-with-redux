import axios from 'axios';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 25,
    type: 'video',
    key: 'AIzaSyBpWHtH7KvSTm-obQgOzd0LNFn5hG98ZII'
  }
});