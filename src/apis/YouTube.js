import axios from 'axios';

const KEY = 'AIzaSyAZwBeo5dkdnYKAXwnItThLtqi3xftKfI8';

export default axios.create({
  baseURL: 'https://youtube.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    type: 'video',
    key: KEY
  }
});